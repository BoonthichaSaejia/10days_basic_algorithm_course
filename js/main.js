//alert("Hello World");
var x = 10; //can assign both string and number
let y = 5; //just have in css5
const z = 15; //cant change to value of z
console.log(x, " ", y);
x = 20;
console.log(x);

var name = "Boonthicha";
var lastname = "Saejia";
console.log(name + lastname);
var a = "20";
var b = "10";
console.log(a + b);
console.log(parseInt(a) + parseInt(b));
console.log(x++);
console.log(x++);
console.log(x % 10);
x += x;
console.log(x);
console.log(typeof x);
console.log(typeof name);
console.log(typeof true);

var ar = [1, 2, 3, 4, 5];
console.log(typeof ar);
console.log(ar[2]);
console.log(ar.length);
ar.push(6); //assign value to the last index
var obj = {
  name: "Boonthicha",
  lastname: "Saejia",
  nickname: "Mui"
};
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
obj.age = 20; //can assign a new key and value
console.log(obj);
var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);
console.log(nu == nu);
console.log(un == nu);
