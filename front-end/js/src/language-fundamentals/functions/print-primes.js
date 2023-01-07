function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function printPrimes() {
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
printPrimes();

// 14: 2, 7
// 16: 2, 4, 8
// 20: 2, 4, 5, 10
// 44: 2, 4, 11, 22
// 60: 2, 3, 4, 5, 6, 12, 15, 20, 30
