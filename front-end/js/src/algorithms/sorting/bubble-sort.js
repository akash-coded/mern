let bubbleSort = (inputArr) => {
  let len = inputArr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
  }

  return inputArr;
};

let array = [4, 8, 7, 2, 11, 1, 3];
console.log(bubbleSort(array));
