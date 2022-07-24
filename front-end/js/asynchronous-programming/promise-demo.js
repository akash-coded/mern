function upload(url) {
  console.log(`Uploading the picture ${url} ...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(url);
      } else {
        reject(url);
      }
    }, 1000);
  });
}

let URL = "https://www.javascripttutorial.net/pic.jpg";

upload(URL)
  .then((url) => console.log(`Processing the picture ${url}`))
  .catch((url) => console.log(`The URL ${url} is not valid`));

// upload("")
//   .then((url) => console.log(`Processing the picture ${url}`))
//   .catch((url) => console.log(`The URL ${url} is not valid`));
