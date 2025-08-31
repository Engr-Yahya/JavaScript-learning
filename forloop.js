
// for (let i = 0; i <=10; i++) {
//   const element = i;

//   if (element === 5) {
//     console.log (`${element} is equal to 5`);
//   } 
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`----------------- table of ${i}---------------`);
//   for (let j = 1; j <= 10; j++){
//     // console.log(`This is the inner loop ${j}`);
//     console.log (` ${i} * ${j} = ${i * j}`);
//   }
  
// }


for (let i = 1; i<= 5; i++){
  let line = '';
  for (let space = 1; space <= 5-i; space++){
    line += ' ';
  }
  for (let star = 1; star <= i; star ++){
    line += ' *';

  }
  console.log(line)
}