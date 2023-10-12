const fs = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(fs.readFile);

//readFilePromise("./data.txt", "utf8") // ! tidak menerima relative path
readFilePromise(
  "/Volumes/HP-DISK/Front-End/JavaScript/Async Process/ReadDataWithPromise/data.txt",
  "utf8"
) // ! tidak menerima relative path
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
