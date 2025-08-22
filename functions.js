// function userLoggedIn (username){
//   if(!username){
//     console.log("Please provide a username");
//     return
//   }
//   return `${username} just logged in`;
// }
// console.log(userLoggedIn("Yahya"));

const arr = [100, 200, 300, 400, 500];

function arrayHandel (anyArr) {
  return anyArr[1];
}
// console.log(arrayHandel(arr));

const user = {
  name: "Yahya",
  age: 22,
  welcomeMsg: function () {
    const data = `Welcome ${this.name}, you are ${this.age} years old.`;
    console.log(data);
  }

}

user.welcomeMsg();
user.name = "Ahmed";
user.welcomeMsg();