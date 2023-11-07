/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Define the generateExcuse function
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["Zombie", "Weatherman", "Mad Scientist", "Necromancer"];
  let action = ["bit my", "ate my", "destroyed my"];
  let thing = ["brain", "homework", "Pokemon cards", "playstation"];
  let where = ["in the basement", "in the cemetery", "in the attic"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let thingIndex = Math.floor(Math.random() * thing.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return `${pronoun[proIndex]} ${subject[subIndex]} ${action[actIndex]} ${thing[thingIndex]} ${where[whereIndex]}`;
};

window.onload = () => {
  // Add an event listener to the button
  document.querySelector("#btn").addEventListener("click", () => {
    let excuse = generateExcuse();
    document.querySelector("#excuse").textContent = excuse;
    console.log("Hello"); // Added for debugging purposes
  });
};
