import { useState } from "react";

export default function Anagram() {
  const [inputString1, setInputString1] = useState(null);
  const [inputString2, setInputString2] = useState(null);
  const [result, setResult] = useState(false);

  const handleClick = () => {
    const inputValue1 = document.getElementById("String1").value;
    const inputValue2 = document.getElementById("String2").value;

    setInputString1(inputValue1);
    setInputString2(inputValue2);

    if (!inputValue1 && !inputValue2) alert("String harus diisi");

    const result = checkAnagrams(inputValue1, inputValue2);

    setResult(result);
    console.log(result);
  };

  return (
    <>
      <label>
        Masukkan String1:
        <input type="text" required placeholder="Input string 1" id="String1" />
      </label>
      <br />
      <label>
        Masukkan String2:
        <input type="text" required placeholder="Input string 2" id="String2" />
      </label>
      <br />
      <button onClick={handleClick}>Periksa Anagram</button>
      <br />
      <p>String1: {inputString1}</p>
      <br />
      <p>String2: {inputString2}</p>
      <br />
      <p>Output: {result}</p>
      <br />
    </>
  );
}

function checkAnagrams(string1, string2) {
  if (string1 === null || string2 === null) {
    return false; // Mengembalikan false jika salah satu string adalah null
  }
  const str1 = string1.replace(/\s/g, "").toLowerCase();
  const str2 = string2.replace(/\s/g, "").toLowerCase();

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
