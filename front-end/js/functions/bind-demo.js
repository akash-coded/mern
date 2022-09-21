const TrevorNoah = {
  firstName: "Trevor",
  lastName: "Noah",
  personDetails: function (city, country) {
    return (
      this.firstName + " " + this.lastName + ". From: " + city + ", " + country
    );
  },
};

const DaveChapelle = {
  firstName: "Dave",
  lastName: "Chapelle",
};

let details = TrevorNoah.personDetails.bind(DaveChapelle);
console.log(details);
console.log(details("Washington D.C.", "USA"));
