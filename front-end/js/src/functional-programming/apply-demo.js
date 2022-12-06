const person = {
  personDetails: function (city, country) {
    return (
      this.firstName + " " + this.lastName + ". From: " + city + ", " + country
    );
  },
};

const TrevorNoah = {
  firstName: "Trevor",
  lastName: "Noah",
};

let details = person.personDetails.apply(TrevorNoah, [
  "Johannesberg",
  "South Africa",
]);
console.log(details);
