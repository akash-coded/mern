let address = {
  locality: "Koramangala",
  city: "Bangalore",
  state: "Karnataka",
  pincode: 560034,
  country: "India",
};

for (let key in address) {
  console.log(key, " : ", address[key]);
}

delete address.country;
console.log(address);

let post = {
  image: "https://picsum.photos/200/300",
  tags: ["#nature", "#beauty", "#sky"],
  likes: 100,
  comments: [
    {
      name: "Akash Das",
      comment: "Nice picture",
      likes: 10,
      tags: ["#nature", "#beauty", "#sky"],
    },
    {
      name: "John Doe",
      comment: "Awesome",
      likes: 5,
      tags: ["#nature", "#beauty", "#sky"],
    },
  ],
};
