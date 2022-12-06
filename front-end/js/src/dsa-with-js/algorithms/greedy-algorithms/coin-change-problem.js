let deno = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
// let deno = [1, 5, 6, 9];
let n = deno.length;

function findMin(V) {
  // Initialize result
  let ans = [];

  // Traverse through all denomination
  for (let i = n - 1; i >= 0; i--) {
    // Find denominations
    while (V >= deno[i]) {
      V -= deno[i];
      ans.push(deno[i]);
    }
  }

  // Print result
  for (const element of ans) {
    console.log(" " + element);
  }
}

// Driver code
n = 93;
// n = 11;
console.log("Following is minimal number " + "of change for " + n + ": ");
findMin(n);
