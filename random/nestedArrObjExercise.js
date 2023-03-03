/* 
hitung total user yang berumur 20
siapa yang menggunakan twitter?
siapa yang menggunakan facebook?
hitung total user yang menggunakan twitter
hitung total user yang menggunakan facebook
*/

const users = [
  {
    uid: 0,
    uname: "Andi",
    age: "20",
    links: {
      name: "Facebook",
      url: "fb.com/andi"
    }
  },
  {
    uid: 1,
    uname: "Aldi",
    age: "21",
    links: {
      name: "Facebook",
      url: "fb.com/aldi"
    }
  },
  {
    uid: 3,
    uname: "Reza",
    age: "20",
    links: {
      name: "Twitter",
      url: "twt.com/arfa"
    }
  }
];

console.log("Total user terdaftar: " + users.length);
let uname = users.map((e) => e.uname);
console.log(`Nama user yang terdaftar: ${uname}`);

const filterAge = users.filter((user) => {
  return user.age === "20" ? true : false;
});
console.log(`Total user berumur 20: ${filterAge.length}`);

const filterUser = users.filter((user) => {
  return user.links.name === "Twitter" ? true : false;
});

console.log(`Total user yang menggunakan Twitter: ${filterUser.length}`);

const filterUserFb = users.filter((user) => {
  return user.links.name === "Facebook" ? true : false;
});

console.log(`Total user yang menggunakan Facebook: ${filterUserFb.length}`);
