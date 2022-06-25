// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // same as 10n

console.log(1n + 2n);

console.log(1n + 2);
