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

// Test4: Take a string of numbers, replace 1 with "Beep" 
// Code: 
// const num = "3, 0, 2, 1";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop", "Beep"];

const num = "3 0 2 1";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else if (numAr[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}

// Test5: Take a string of numbers with one double digit of 1 AND 3.
// Code: 
// const num = "3, 0, 2, 1, 13";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop", "Beep", "Won't you be my neighboor?"];

const num = "3, 0, 2, 1, 13";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else if (numAr[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}

// Test6: Take a string of numbers with two double digits of 2 AND 3.
// Code: 
// const num = "3, 0, 2, 1, 13, 23";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop", "Beep", "Won't you be my neighboor?", "Won't you be my neighboor?"];

const num = "3, 0, 2, 1, 13, 23";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else if (numAr[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}


// Test7: Take a string of numbers with two double digits of 2 AND 1.
// Code: 
// const num = "3, 0, 2, 1, 13, 23, 21";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop", "Beep", "Won't you be my neighboor?", "Won't you be my neighboor?", "Boop"];

const num = "3, 0, 2, 1, 13, 23, 21";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else if (numAr[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}

// Test8: Take a string of numbers with two double digits of 1 AND 0.
// Code: 
// const num = "3, 0, 2, 1, 13, 23, 21, 10";
// beepityBoopity(num);
// Expected Output: ["Won't you be my neighboor?", 0, "Boop", "Beep", "Won't you be my neighboor?", "Won't you be my neighboor?", "Boop", "Beep"];

const num = "3, 0, 2, 1, 13, 23, 21, 10";

function beepityBoopity(num) {
  const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < numAr.length; i++) {
    if (numAr[i].includes(3)) {
      newAr.push("Won't you be my neighboor?");
    } else if (numAr[i].includes(2)) {
      newAr.push("Boop");
    } else if (numAr[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(numAr[i]);
    }
  }
  return newAr;
}