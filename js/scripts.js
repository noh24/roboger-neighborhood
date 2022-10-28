//business logic

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

const input = "5"

function countArray(input) {
  let counter = 0;
  let inputArray = [];
  do {
    inputArray.push(counter());
    counter++;
  } while (counter <= Number(input))
  return inputArray;
}