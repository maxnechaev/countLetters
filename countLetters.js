var str = String(process.argv.slice(2));
console.log(str);
var n = [];

for (var i = 0; i < str.length; i++) {
  n.push(/[a-z]/.exec(str)[i]);
}

console.log(n);

// var letters = {
//   a: "1",
//   b: "2",
// }

// countLetters();
// function countLetters(str){
//   console.log(n);
// }
