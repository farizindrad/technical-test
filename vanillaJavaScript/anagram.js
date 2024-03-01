function anagrams(string1, string2) {
  const str1 = string1.replace(/\s/g, "").toLowerCase();
  const str2 = string2.replace(/\s/g, "").toLowerCase();

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  console.log(sortedStr1);
  console.log(sortedStr2);
  return sortedStr1 === sortedStr2;
}

const string1 = "abc123";
const string2 = "123acb";
const result = anagrams(string1, string2);
console.log(result);
