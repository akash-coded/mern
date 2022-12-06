function upload(url) {
  console.log(`Uploading the picture ${url} ...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      url ? resolve(url) : reject(url);
    }, 2000);
  });
}

function process(url) {
  console.log(`Processing the picture ${url}`);
}

function showErrorMessage(url) {
  console.log(console.log(`The URL ${url} is not valid`));
}

let URL = "https://www.javascripttutorial.net/pic.jpg";
upload(URL).then(process).catch(showErrorMessage);

// upload(URL)
//   .then((url) => console.log(`Processing the picture ${url}`))
//   .catch((url) => console.log(`The URL ${url} is not valid`));

// upload("")
//   .then((url) => console.log(`Processing the picture ${url}`))
//   .catch((url) => console.log(`The URL ${url} is not valid`));
