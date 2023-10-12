/*

// ! Promise.all

// ? Resolve
const promise1ResolveAll = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2ResolveAll = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3ResolveAll = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1ResolveAll, promise2ResolveAll, promise3ResolveAll]).then(
  (values) => console.log(values)
); // [1, 2, 3] setelah 3 detik

// ? Reject
const promise1RejectAll = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2RejectAll = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promise3RejectAll = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1RejectAll, promise2RejectAll, promise3RejectAll])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups

console.log();

*/

/*

// ! Promise.race (mengembalikan nilai promise yang paling cepat selesai eksekusinya)

// ? Resolve
const promise1ResolveRace = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2ResolveRace = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3ResolveRace = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.race([
  promise1ResolveRace,
  promise2ResolveRace,
  promise3ResolveRace,
]).then((value) => console.log(value)); // 1 setelah 1 detik

// ? Reject
const promise1RejectRace = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2RejectRace = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3RejectRace = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.race([promise1RejectRace, promise2RejectRace, promise3RejectRace])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups

  */

/*
// ! Promise.allsettled (mengembalikan nilai promise dalam bentuk json)

const promise1ResolveAllSettled = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2ResolveAllSettled = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Error")), 2000)
);
const promise3ResolveAllSettled = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.allSettled([
  promise1ResolveAllSettled,
  promise2ResolveAllSettled,
  promise3ResolveAllSettled,
]).then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik
*/

/*

// ! Promise.race (mengembalikan nilai promise yang paling cepat selesai berstatus fulfilled)
const promiseResolve1Any = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2Any = new Promise((resolve, reject) =>
  setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3Any = new Promise((resolve, reject) =>
  setTimeout(() => resolve("3"), 3000)
);

Promise.any([promiseResolve1Any, promiseResolve2Any, promiseResolve3Any])
  .then((value) => console.log(value)) // 1
  .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1Any = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2Any = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3Any = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("3")), 3000)
);

Promise.any([promiseReject1Any, promiseReject2Any, promiseReject3Any])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // All Promises were rejected

*/
