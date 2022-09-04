const express = require("express");
const restaurantData = require("./JSON/restaurants.json");
const locationData = require("./JSON/locations.json");
const mealTypeData = require("./JSON/mealtypes.json");

const app = express();
const port = 8900;

// Defining the endpoint
app.get("/getAllRestaurants", (req, res) => {
  res.send(restaurantData);
});

app.get("/getAllLocations", (req, res) => {
  res.send(locationData);
});

app.get("/getAllMealTypes", (req, res) => {
  res.send(mealTypeData);
});

// Starting the server
app.listen(port, () => {
  console.log(`Restaurants app listening on port ${port}!`);
});
