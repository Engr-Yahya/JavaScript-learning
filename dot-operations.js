const coding = ["ruby", "javascript", "python", "swift", "go"]

coding.forEach((item) => {
  // console.log(item);

})


console.log(`______________________________________`);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.filter((num) => {
  return num > 5
})
// console.log(newNum);

// const newNum = []

// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num)
//   }
// })
// console.log(newNum);

const books = [
  { title: 'book-one', genre: 'Fiction', publish: 1971, edition: 2004 },
  { title: 'book-two', genre: 'Non-Fiction', publish: 1921, edition: 2000 },
  { title: 'book-three', genre: 'History', publish: 1963, edition: 2009 },
  { title: 'book-four', genre: 'Horror', publish: 1941, edition: 2008 },
  { title: 'book-five', genre: 'Drama', publish: 1988, edition: 2015 },
  { title: 'book-six', genre: 'Comedy', publish: 1917, edition: 1992 },
  { title: 'book-seven', genre: 'Sci-Fi', publish: 1980, edition: 2019 },
  { title: 'book-eight', genre: 'Science', publish: 1983, edition: 2020 },
  { title: 'book-nine', genre: 'Comedy', publish: 1991, edition: 2021 },
  { title: 'book-ten', genre: 'Fiction', publish: 1967, edition: 2022 },
  { title: 'book-eleven', genre: 'coding', publish: 1900, edition: 1998 },
]

// const filterBooks = books.filter((bk) => bk.genre === 'Comedy')
// console.log(filterBooks)

const latestBooks = books.filter((latest) => latest.publish >= 1960 && latest.genre === 'Fiction')
// console.log(latestBooks)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumbers.map((num) => {
  return num + 10
})
// console.log(newNums);

const shoppingCart = [
  {
    course: 'javascript',
    price: 2999
  },
  {
    course: 'Python',
    price: 1999
  },
  {
    course: 'Data Sciences',
    price: 19999
  },
]

const myTotal = shoppingCart.reduce((acc, item) => (acc + item.price),0)
console.log(`${myTotal} Rs`);
