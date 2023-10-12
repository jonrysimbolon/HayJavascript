const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    if (isOffline) {
      callback(new Error("cannot retrieve user due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch((err) => console.log(err.message));

getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message)); //cannot retrieve users due offline
