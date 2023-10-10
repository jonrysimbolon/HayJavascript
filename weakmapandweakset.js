// ? contoh perbandingan map dengan weak map

/*const visitCountMap = new Map();

function countUser(user){
    let count = visitCountMap.get(user) || 0
    visitCountMap.set(user, count + 1)
}

let jonas = { name: "Jonas"}
countUser(jonas)

jonas = null // mencoba menghapus user jonas

setTimeout(function(){
    console.log(visitCountMap)
}, 10000)

output
Map(1) { { name: 'Jonas' } => 1 }

// ! gagal menghapus karna memakai map dan bukan
// ! weakmap

*/

// * Dengan weakmap

const { inspect } = require('util');

const visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000); // !! gk jelas juga, udah dibikin 10 rb, 20 rb, 50 rb msh ada nilainya :(

/* output
  WeakMap {  }
*/