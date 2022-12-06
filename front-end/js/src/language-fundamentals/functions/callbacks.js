/**
 *  A function which accepts a callback and calls that function on the array
 *
 * @param {array} arr
 * @param {function} fun
 */
function statistics(arr, fun) {
  fun(arr);
}

/**
 * Callback function to find the maximum in an array
 *
 * @param {array} arr
 */
function findMax(arr) {
  let max = 0;

  for (let ele of arr) {
    if (ele > max) {
      max = ele;
    }
  }

  console.log("Max = " + max);
}

/**
 * Callback function to find the minimum in an array
 *
 * @param {array} arr
 */
function findMin(arr) {
  let max = arr[0];

  for (let ele of arr) {
    if (ele < max) {
      max = ele;
    }
  }

  console.log("Min = " + max);
}

let customerAges = [47, 41, 46, 52, 41, 65, 43];
statistics(customerAges, findMax);
statistics(customerAges, findMin);
