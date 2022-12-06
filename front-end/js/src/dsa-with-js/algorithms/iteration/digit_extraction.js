let num = 472;

while (num !== 0) {
  let digit = num % 10;
  num = Math.floor(num / 10); // ~~(num / 10) or (num / 10) >> 0 or (num / 10 | 0)
  console.log(digit);
}
