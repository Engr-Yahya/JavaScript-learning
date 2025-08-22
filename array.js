// const Arr1 = [1,2,3,4,5,]

// Arr1.push(6);

// console.log(Arr1);

// Arr1.pop();
// console.log(Arr1);

const sym = Symbol("unique");

const object = {
  name: "Yahya",
  age: 22,
  symbol: [sym],
  email:"yahyashafiq309@gmail.com",
  hobbies: ["coding", "reading", "gaming"],
  isLoggedIn: true
}

console.log(object.name);
console.log(object.email);
console.log(object.hobbies);
console.log(object.symbol[0]);