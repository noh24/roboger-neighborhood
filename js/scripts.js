// //business
function beepityBoopity(input, name) {
  let numAr = [];

  for (let i = 0; i <= Number(input); i++) {
    if (String(i).includes(3)) {
      numAr.push("Won't you be my neighboor, " + name + "?");
    } else if (String(i).includes(2)) {
      numAr.push("Boop");
    } else if (String(i).includes(1)) {
      numAr.push("Beep");
    } else {
      numAr.push(i);
    }
  }
  return numAr;
}

// //ui

document.getElementById("fire").addEventListener("click", function() {
  document.getElementById("hidden1").setAttribute("class", "hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  document.querySelector("div#box").classList.add("hidden");
});
document.getElementById("reset").addEventListener("click", function() { 
  document.location.reload();
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("user-name").value;
  const input = document.getElementById("user-num").value;
  const reverseTheOrder = document.getElementById("reverse-the-order").checked;

  if (!name || name.trim().length === 0 || Number(name)) {
    document.getElementById("error-name").classList.remove("hidden");
    document.querySelector("label[for=user-name]").classList.add("hidden");
    console.log("it works");
  } else if (!input) {
    document.getElementById("error-num").classList.remove("hidden");
    document.querySelector("label[for=user-num]").classList.add("hidden");
  } else if (reverseTheOrder) {
    document.getElementById("hidden2").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("reset").classList.remove("hidden");
    resultsInReverseList(name, input);
  } else  {
    document.getElementById("hidden2").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("reset").classList.remove("hidden");
    resultsInList(name, input);
  }
});

function resultsInList(name, input) {
  const beepBoop = beepityBoopity(input, name);

  for (let i = 0; i < beepBoop.length; i++) {
    setTimeout(function() {
      const li = document.createElement("li");
      li.append(beepBoop[i]);
      document.getElementById("results").append(li);
    }, i * 1500);
  }
}
function resultsInReverseList(name, input) {
  const beepBoop = beepityBoopity(input, name);
  const beepBoopReverse = beepBoop.reverse();
  for (let i = 0; i < beepBoop.length; i++) {
    setTimeout(function() {
      const li = document.createElement("li");
      li.append(beepBoopReverse[i]);
      document.getElementById("results").append(li);
    }, i * 1500);
  }
}
