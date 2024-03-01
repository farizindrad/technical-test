import { useState } from "react";

export default function Array() {
  const [array, setArray] = useState("");
  const [targetSum, setTargetSum] = useState("");
  const [result, setResult] = useState("");

  //   const handleArrayChange = (event) => {
  //     const inputArray = event.target.value;
  //     setArray(inputArray);
  //   };

  //   const handleTargetSumChange = (event) => {
  //     setTargetSum(event.target.value);
  //   };

  const handleClick = () => {
    const inputArray = document
      .getElementById("Input")
      .value.trim()
      .split(" ")
      .map(Number);
    const inputSum = document.getElementById("Sum").value;
    const sum = parseInt(inputSum);
    const result = output(inputArray, sum);
    setArray(inputArray);
    setTargetSum(sum);
    setResult(result);
  };

  return (
    <div>
      <label>
        Masukkan Array:
        <input type="text" required placeholder="Input numbers" id="Input" />
      </label>
      <br />
      <label>
        Masukkan targetSum:
        <input type="text" required placeholder="Input target sum" id="Sum" />
      </label>
      <br />
      <button onClick={handleClick}>Hitung</button>
      <br />
      <p>Input: {array.length ? "[" + array.join(", ") + "]" : null}</p>
      <p>Target Sum: {targetSum}</p>
      <p>
        Output:{" "}
        {result ? (
          <>
            [
            {result.map((pair, index) => (
              <span key={index}>
                [{pair.join(", ")}]{index !== result.length - 1 ? ", " : null}
              </span>
            ))}
            ]
          </>
        ) : null}
      </p>
    </div>
  );
}

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
