const fs = require("fs");

//writeFile

fs.writeFile("./text.txt", "helloWorlddd", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("sucessfull");
});

//readfile
fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.tostring);
});

//Delete

fs.unlink("./text.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("deleted");
});
