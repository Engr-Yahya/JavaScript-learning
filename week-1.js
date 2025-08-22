for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let space = 1; space <= 5 - i; space++) {
    line += ' ';

  }
  for (let star = 1; star <= 2 * i - 1; star++) {
    line += '*';
  }
  console.log(line);
}
for (let i = 4; i >= 1; i--) {
  let line = '';
  for (let space = 1; space <= 5 - i; space++) {
    line += ' ';

  }
  for (let star = 1; star <= 2 * i - 1; star++) {
    line += '*';
  }
  console.log(line);
}

let str = 'javascript';
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed)


