//business
function countArray(input) {
  let counter = 0;
  let inputArray = [];
  do {
    inputArray.push(counter.toString());
    counter++;
  } while (counter <= Number(input))
  return inputArray;
}

function beepityBoopity(inputArray, name) {
  // const numAr = num.split(" ");
  let newAr = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].includes(3)) {
      newAr.push("Won't you be my neighboor, " + name +"?");
    } else if (inputArray[i].includes(2)) {
      newAr.push("Boop");
    } else if (inputArray[i].includes(1)) {
      newAr.push("Beep");
    } else {
      newAr.push(inputArray[i]);
    }
  }
  return newAr;
}

//ui
const inputArray = countArray(input);
const beepBoop = beepityBoopity(inputArray);
//user input form stuff here