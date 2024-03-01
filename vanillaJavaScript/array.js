const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Array: ", (inputArray) => {
  inputArray = inputArray.trim();
  const array = inputArray.split(" ").map(Number);

  rl.question("Masukkan targetSum: ", (inputTargetSum) => {
    const targetSum = parseInt(inputTargetSum);

    console.log("input: ", array);
    console.log("target sum ", targetSum);

    const result = output(array, targetSum);
    console.log("output:", result);
    rl.close();
  });
});

function output(array, targetSum) {
  let findSum = false;
  const sum = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        sum.push([array[i], array[j]]);
        findSum = true;
      }
    }
  }

  if (!findSum) {
    return "Tidak ada pasangan penjumlahan angka dalam array yang menghasilkan target sum.";
  }

  return sum;
}
