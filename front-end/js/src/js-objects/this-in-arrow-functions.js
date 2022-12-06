let user = {
  firstName: "Issac",
  sayHi() {
    let arrowFun = () => console.log(this.firstName);
    arrowFun();
  },
};
user.sayHi();
