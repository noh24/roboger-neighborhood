// Describe beepityBoopity()

// Test1: Take string 0, return array of 0
// Code: 
// const num = "0";
// beepityBoopity(num);
// Expected Output: [0];

const num = "0";

function beepityBoopity(num) {
  let numAr = [];
  numAr.push(num);
  return numAr;
}

// Test2: Take a string of numbers, replace 3 with "Won't you be my neighboor?" 
// Code: 
// const num = "3, 0";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0];

const num = "3 0";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}

// Test3: Take a string of numbers, replace 2 with "Boop"
// Code: 
// const num = "3, 0, 2";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop"];

const num = "3 0 2";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}