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
  let newAr = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].includes(3)) {
      newAr.push("Won't you be my neighboor, " + name + "?");
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

document.getElementById("fire").addEventListener("click", function() {
  document.getElementById("hidden1").setAttribute("class", "hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  document.querySelector("legend").classList.add("hidden");
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("user-name").value;
  const input = document.getElementById("user-num").value;

  if (!name || name == '') {
    document.getElementById("error-name").classList.remove("hidden");
  } else if (!input) {
    document.getElementById("error-num").classList.remove("hidden");
  } else {
    result(name, input);
  }
  
  document.querySelector("legend").classList.add("hidden");
  document.getElementById("hidden2").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("reset").classList.remove("hidden");
});

function result(name, input) {
  const inputArray = countArray(input);
  const beepBoop = beepityBoopity(inputArray, name);

  for (let i = 0; i < beepBoop.length; i++) {
    setTimeout(function() {
      const li = document.createElement("li")
      li.append(beepBoop[i]);
      document.getElementById("results").append(li);
    }, i * 800);
  }
}

document.getElementById("reset").addEventListener("click", function() { 
  document.location.reload();
});