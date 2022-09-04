const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = require("./user.js");
const products = require("./product.js");

router.post(
  '/login',
  [
    check("username", "please enter valid username").not().isEmpty(),
    check("password", "please input valid password").isLength({ min: 6 }),
  ],

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    } else {
      const { username, password } = req.body;
      try {
        let user = await users.findOne({"username":username});
        console.log("user in DB "+user+password)
        
        if (user.password === password) {
          const payload = { "userId": user._id };
          jwt.sign(payload, "jwtKey", { expiresIn: 10000 }, (err, token) => {
            if (err) throw err;
            res.status(200).json({"userId": user._id, "token":token});
          });
        }
        else{
            res.status(401).json({"message":"invalid username or password"})
        }
        
      } catch (e) {
        console.error(e.message);
        res.status(500).send("Internal server error ");
      }
    }
  }
);


router.post(
    "/register",
    [
      check("username", "please enter valid username").not().isEmpty(),
      check("password", "please input valid password").isLength({ min: 6 }),
      check("email", "plese input valid email").isEmail()
    ],
  
    async (req, res) => {
      const error = validationResult(req);
      console.log('1. '+JSON.stringify(error))
      if (!error.isEmpty()) {
        console.log('2. returning 400')
        return res.status(400).json({ errors: error.array() });
      } else {
        const { username, password, email } = req.body;
        console.log('3. received '+username + password + email );
        try {
            let userInDB= users.findOne({"email":email}, async function(err, docs){
                
                if(docs && docs.email && docs.email != null)
                {
                    console.log('user in DB: '+docs+JSON.stringify(docs.email)+JSON.stringify(docs.username)+JSON.stringify(docs.password)+JSON.stringify(docs._id));
                    res.status(200).json({"message": "User already exists"});
                }
               else  {            
                const salt = await bcrypt.genSalt(10);
                req.password = bcrypt.hash(password, salt);
                const newUser = new users (req.body);
                var result = await newUser.save();
                if(result)
                {
                    res.status(201).json({"status" :"User created successfully"})
                }
              }

            });
           
        } catch (e) {
          console.error(e.message);
          res.status(500).send("Internal server error ");
        }
      }
    }
  );
  
  
  
  

  router.get(
    '/products',
   
    async (req, res) => {
      console.log("request in payload "+req.get("Authorization"))
        if(req.get('Authorization') == null)
        {
          res.status(401).json({"message":"please pass authorization header"});
        }
        else {
          try{
        let verification = jwt.verify(req.get('Authorization'), "jwtKey", async function(err)
        {
          if(err && err != null)
          {
            console.log("verification callback"+err );
            res.status(401).json({"message":"Auth token verfiication failed"})
          }
          else{
            let productList = await products.find();
          console.log("productList in DB "+productList)
          
          if (productList && productList!= null ) {
            const payload = { "productList": productList };
            res.status(200).json(payload);
          }
          else{
              res.status(404).json({"message":"No products are found"})
          }
          
          }
          
        });
       
      }
      catch(e)
      {
        console.error(e);
      }
    }
      }
    
  );
  
  module.exports =  router;
