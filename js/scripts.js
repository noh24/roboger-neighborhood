// //business
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

// //ui
// const inputArray = countArray(input);
// const beepBoop = beepityBoopity(inputArray);
//user input form stuff here

document.getElementById("fire").addEventListener("click", function() {
  document.getElementById("hidden1").setAttribute("class", "hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  document.querySelector("legend").classList.add("hidden");
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("legend").classList.add("hidden");
  getInput();
});

function getInput() {
  const name = document.getElementById("user-name").value;
  const input = document.getElementById("user-num").value;
  const inputArray = countArray(input);
  const beepBoop = beepityBoopity(inputArray, name);

  for (let i = 0; i < beepBoop.length; i++) {
    document.createElement("li").append(beepBoop[i]);
  }
}
