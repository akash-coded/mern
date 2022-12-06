function upload(url) {
  setTimeout(() => {
    console.log(`Uploading the picture ${url} ...`);
  }, 2000);
}

function process(picture) {
  console.log(`Processing the picture ${picture}`);
}

upload("https://www.javascripttutorial.net/pic.jpg"); // takes 2 seconds
process("https://www.javascripttutorial.net/pic.jpg");
