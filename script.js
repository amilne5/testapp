"use strict";
//this is a bake-off murder mystery: The game is two parts one the baking and second solving the murder. Lets first make a baking game dynamic then build the murder mystery component

let ovenTemp = "";
let score = "";
let bakeTime = "";
let isProved = "";
let weather = "";
let Challenge = 0;
let secretNumber =
  Math.trunc(Math.random() * 15) * (Math.round(Math.random()) * 2 - 1);
console.log(secretNumber);
if (secretNumber == 0) {
  weather = "lovely British 🌧️";
} else {
  weather = secretNumber > 0 ? "sunny 🌞" : "freezing 🥶";
}
console.log(weather);
//Gives a nudge to the bakers on how to fix their bakes
document.querySelector(
  ".message"
).textContent = `Its a ${weather} day in the tent. Welcome Bakers Today we have Giulia joining us. On your marks get set....bake!`;

const bread = {
  name: "Paul's Hollywood Bread",
  va: 8050,
};

const sponge = {
  name: "Victorian Sponge",
  va: 3333,
};

const cake = {
  name: "Savory chocolate cake",
  va: 5500,
};

const crust = {
  name: "Crispy Watercrust Pastry",
  va: 2200,
};

function pass(item) {
  return item.va * (1 + secretNumber / 100);
}
//this creates a up to +/- 15% variance

//create a random number to increase these up/down 5%
//proving reduces the random number range (on certain types)
let bakeScore = 0;
let bakeDelta = 0;

const displayMessage = function (message) {
  document.querySelector(".info").textContent = message;
};

function bake(temp, time, proved, target) {
  if (temp === "" || time === "") {
    return "no";
  } else {
    bakeScore = ((temp * time - target) / target) * 100;
    return bakeScore;
  }
}
//restrict the temp to 350-450
document.querySelector(".check").addEventListener("click", function () {
  const output = document.querySelector("#test option:checked").value;
  console.log(output);
  let comp = pass(eval(output));
  console.log(comp);
  ovenTemp = Number(document.querySelector(".topleft").value);
  bakeTime = Number(document.querySelector(".topleft2").value);
  console.log(ovenTemp, typeof ovenTemp);
  console.log(bakeTime, typeof bakeTime);
  console.log(output, typeof output);

  console.log(bake(ovenTemp, bakeTime, 0, comp));
  //question count if you ask more than 2 you get a GOOD hint but you burn your bake
  if (Math.abs(bakeScore) > 20) {
    displayMessage("F'd it");
  } else if (Math.abs(bakeScore) < 3) {
    displayMessage(`That is.... delicious. 
    Paul Hollywood 🤝 `);
  } else if (Math.abs(bakeScore) > 10) {
    displayMessage(
      "Yah its pretty good...the flavors are there but the texture"
    );
  } else {
    displayMessage(
      "Thats quality work, flavor and textures are good. Its nearly there"
    );
  }
});
