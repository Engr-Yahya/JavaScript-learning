const greetings = "Hello World!"
for (const greet of greetings) {
  console.log(`Each Char is = ${greet}`);
}

console.log("----------------------------------------");
const map = new Map()

map.set('PK', 'Pakistan');
map.set('USA', 'United States of America');
map.set('IN', 'India');
map.set('Wes', 'Westerndes');
map.set('Fr', 'France');

for (const [key, value] of map) {
  console.log(key, value)
}

console.log("----------------------------------------");

const obj = {
  js: "javascript",
  cpp: "C++",
  Rb: "Ruby",
  py: "python"
}

for (const key in obj) {
  console.log(`The key is ${key} and the value it holds = ${obj[key]}`);
}

console.log("----------------------------------------");

const arr = ["cpp", "js", "rb", "py"]

for (const key in arr) {
  console.log(arr[key]);
  
}

console.log("----------------------------------------");

const coding = ["ruby", "javascript", "python", "swift", "php"]

coding.forEach((item, index, arr) => {
console.log(item, index, arr);

})

console.log("----------------------------------------");

const myCoding = [
  {
    langType: "javascript",
    langFile: "js"
  },
  {
    langType: "python",
    langFile: "py"
  },
  {
    langType: "swift",
    langFile: "sw"
  },
  
]

myCoding.forEach((item) => {
  console.log(item.langFile);
  
})