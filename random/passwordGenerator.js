var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbols = ",.";
var all = lower + upper + number + symbols;
var length = 8;
var password = "";

for (var i = 0; i < length; i++) {
  password += all.charAt(Math.floor(Math.random() * all.length));
}

console.log(password);
