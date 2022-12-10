function upload(url, successCallback, failureCallback) {
  // script to upload the picture here
  console.log(`Uploading the picture ${url} ...`);
  setTimeout(() => {
    url ? successCallback(url) : failureCallback(url);
  }, 2000);
}

function process(picture) {
  console.log(`Processing the picture ${picture}`);
}

function showErrorMessage(url) {
  console.log(console.log(`The URL ${url} is not valid`));
}

let URL = "www.images.com/img/1";
// let URL = "";

// upload(URL, process, showErrorMessage);

upload(URL, process, (url) => console.log(`The URL ${url} is not valid`));
