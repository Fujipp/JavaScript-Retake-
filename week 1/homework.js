// 1
console.log("ข้อ 1");
function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
console.log(findMin(numbers));

// 2
console.log("ข้อ 2");
let numString = "1234";
let num = parseInt(numString);
console.log(typeof num);

// 3
console.log("ข้อ 3");
let a = 5,
  b = 10;
[b, a] = [a, b];
console.log(a); // 10
console.log(b); // 5

// 4
console.log("ข้อ 4");
let value1 = [1, 2, 3];
let value2 = [];
let value3;

console.log(Array.isArray(value1) && value1.length === 0); // value1 false
console.log(Array.isArray(value2) && value2.length === 0); // value2 true
console.log(Array.isArray(value3) && value3.length === 0); // value3 false

// 5
console.log("ข้อ 5");
let mixedArray = [
  42,
  "hello",
  { name: "Joe", surname: "Doe" },
  true,
  56,
  false,
  { name: "John", surname: "Smith" },
  { name: "Joy", surname: "Stein" },
];

for (let element of mixedArray) {
  if (typeof element === "object" && element !== null) {
    console.log(element);
  }
}

// 6
console.log("ข้อ 6");
let x = 10;
let y = "20";
let result = x + y;
console.log(result); // XXXXX 10+"20" = 1020
console.log(typeof result); // XXXXX string

// 7
console.log("ข้อ 7");
// Create an object person with properties: name (a string), age (a number), and isStudent (a boolean).
let person = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};
// 7.1 Add a new property hobbies, an array of strings, to the person object.
person.hobbies = ["reading", "playing guitar", "hiking"];
// 7.2 Change the age property to a new value.
person.age = 30;
// 7.3 Delete the isStudent property.
delete person.isStudent;
// Print the modified person object
console.log(person);

// 8
console.log("ข้อ 8");
if (1) {
  console.log(1); // XXXXX
}
if ([]) {
  console.log([]); // XXXXX
}
if ("") {
  console.log(""); // XXXXX
}
if (null) {
  console.log(null); // XXXXX
}
if (undefined) {
  console.log(undefined); // XXXXX
}

//9
console.log("ข้อ 9");
let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };
// Compare names case-insensitively
if (
  peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() &&
  peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase()
) {
  console.log("These three objects have the same name.");
}

//10
console.log("ข้อ 10");
let people = [
  { name: "John", surname: "Doe" },
  { name: "olivia", surname: "Smith" },
  { name: "john", surname: "Johnson" },
  { name: "Sarah", surname: "Wilson" },
  { name: "David", surname: "Brown" },
  { name: "Emily", surname: "Davis" },
  { name: "David", surname: "Miller" },
  { name: "Olivia", surname: "Taylor" },
  { name: "david", surname: "Anderson" },
  { name: "Sophia", surname: "Clark" },
];
// Convert all names to lowercase for case-insensitive comparison
let lowerCaseNames = people.map((person) => person.name.toLowerCase());
// Filter out names that appear more than once
let result1 = lowerCaseNames.filter(
  (name, index) => lowerCaseNames.indexOf(name) !== index
);
console.log(result); // ["john", "olivia", "david"]

// 11
console.log("ข้อ 11");
// const arr = [1, 2, 3];
// arr.push(4); // XXXXX
// arr = [1, 2, 3, 4]; // XXXXX
// const obj = { name: "Alice" };
// obj.age = 30; // XXXXX
// obj = { name: "Alice", age: 30 }; // XXXXX

// 12
console.log("ข้อ 12");
function uniqueElements(arrayValue) {
  // Use a Set to store unique elements
  let uniqueSet = new Set(arrayValue);
  // Convert Set back to an array
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
let numbers2 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
let result2 = uniqueElements(numbers);
console.log(result2); // Output: [1, 3, 8, 21, 13, 7]

// 13
console.log("ข้อ 13");
function reverseArray(arrayValue) {
  // Use the reverse method to reverse the array in-place
  return arrayValue.reverse();
}
let numbers3 = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
let reversedNumbers = reverseArray(numbers3);
console.log(reversedNumbers); // Output: [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]

// 14
console.log("ข้อ 14");
const users = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Dave", age: 24 },
];
users.forEach(({ id, name, age }) => {
  console.log(`User ID: ${id}, Name: ${name}, Age: ${age}`);
});

// 15
console.log("ข้อ 15");
const numbers4 = [1, 2, 3, 4, 5];
const [firstElement1, secondElement2, , , lastElement3] = numbers4;
console.log(firstElement1); // Output: 1
console.log(secondElement2); // Output: 2
console.log(lastElement3); // Output: 5

// 16
console.log("ข้อ 16");
function multiplicationTable(number) {
  const table = [];

  for (let i = 1; i <= 12; i++) {
    const result = number * i;
    const row = `${number} x ${i} = ${result}`;
    table.push(row);
  }
  return table;
}
console.log(multiplicationTable(2));

// 17
console.log("ข้อ 17");
function calculateGrade(scores) {
  // Calculate the average score
  const averageScore =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  // Determine the letter grade based on the average score
  if (averageScore >= 90 && averageScore <= 100) {
    return "A";
  } else if (averageScore >= 80 && averageScore < 90) {
    return "B";
  } else if (averageScore >= 70 && averageScore < 80) {
    return "C";
  } else if (averageScore >= 60 && averageScore < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade([80, 95, 90, 70, 100])); // Output: B

// 18
console.log("ข้อ 18");
function convertTemperature(temperature, mode) {
  if (mode === "FtoC") {
    // Fahrenheit to Celsius conversion
    return ((temperature - 32) * 5) / 9;
  } else if (mode === "CtoF") {
    // Celsius to Fahrenheit conversion
    return (temperature * 9) / 5 + 32;
  } else {
    // Invalid mode
    return 'Invalid mode. Please use "FtoC" or "CtoF"';
  }
}

console.log(convertTemperature(68, "FtoC")); // Output: 20
console.log(convertTemperature(20, "CtoF")); // Output: 68
console.log(convertTemperature(100, "Unknown")); // Output: Invalid mode. Please use "FtoC" or "CtoF"

// 19
console.log("ข้อ 19");
function sumPositiveNumbers(numbers) {
  // Use the reduce function to calculate the sum
  const sum = numbers.reduce((accumulator, currentNumber) => {
    // Add positive numbers to the accumulator
    if (currentNumber > 0) {
      return accumulator + currentNumber;
    } else {
      return accumulator;
    }
  }, 0);

  return sum;
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // Output: 42
console.log(sumPositiveNumbers([-1, -2, -3])); // Output: 0
console.log(sumPositiveNumbers([])); // Output: 0

// 20
console.log("ข้อ 20");
function sameNumbers(numArray1, numArray2) {
  // Combine the arrays without repeating numbers
  const combinedArray = Array.from(new Set([...numArray1, ...numArray2]));

  return combinedArray;
}

console.log(
  sameNumbers(
    [1, 2, 3, 4, 5, 2, 1, 4, 1, 5, 2, 5, 8],
    [1, 2, 5, 8, 4, 1, 5, 1, 47, 2, 3, 56, 5, 8]
  )
);
// Output: [1, 2, 3, 4, 5, 8, 47, 56]
