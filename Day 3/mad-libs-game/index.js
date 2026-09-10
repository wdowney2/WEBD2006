function log(logcontent) {
    console.log(logcontent);
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + logcontent + "<br>";
}

// Lesson 3 — Operators, Input, and Practice
// Objective: Use arithmetic operators to perform calculations, use template
// literals to build dynamic strings, and capture user input with prompt().

// ── Step 1: Collect words from the user ──────────────────────────────────────
// TODO: use prompt() to ask for: heroName, noun, verb, adjective, animal, food, place
//       store each in a descriptively named const

const heroName = prompt("provide heroName");
const noun = prompt("provide noun");
const verb = prompt("provide verb");
const adjective = prompt("provide adjective");
const animal = prompt("provide animal");
const food = prompt("provide food");
const place = prompt("provide place");

// TODO: ask for a sillyNumber and convert it to a number using Number()

const sillyNumber = Number(prompt("provide sillyNumber"));

// ── Step 2: Show string concatenation (the old way) ──────────────────────────
// TODO: build a short intro string using the + operator (old-school concatenation)
//       and log it to the console

// console.log(heroName + " the " + noun + " " + animal + " from " + place + " tried to " + verb + " a " + food + " " + adjective + "ly but the fucking");

// ── Step 3: Build the story using template literals (the new way) ─────────────
// TODO: use a template literal to build a multi-line story using all the collected words
//       log it to the console

const myRivetingTale = `${heroName} the ${noun} ${animal} from ${place} tried to ${verb} a ${food} ${adjective}ly but it exploded and he dieddddd :(`;
log(myRivetingTale);

// ── Step 4: Ask the user to rate the story ───────────────────────────────────
// TODO: use prompt() + Number() to get a rating from 1 to 10

const rating = Math.min(10, Math.max(1, Number(prompt("rate the story 1-10"))));

// ── Step 5: Calculate stats using arithmetic operators ───────────────────────
// TODO: calculate the following and store each in a const:
const percentageScore = rating * 10
const bonusScore = rating + sillyNumber
const improvementNeeded = 10 - rating
const averageScore = (rating + 5) / 2
const luckyRemainder = sillyNumber % 3       // (modulus: remainder after division)
const powerScore = rating ** 2               //  (exponentiation: rating squared)
const storyLength = myRivetingTale.length    //  (.length counts characters)

// ── Step 6: Display the stats ─────────────────────────────────────────────────
// TODO: use template literals to log each stat with a clear label
log("");

log("rating: " + rating)
log("percentageScore: " + percentageScore);
log("bonusScore: " + bonusScore);
log("improvementNeeded: " + improvementNeeded);
log("averageScore: " + averageScore);
log("luckyRemainder: " + luckyRemainder);
log("powerScore: " + powerScore);
log("storyLength: " + storyLength);

// ── Step 7: A fun category using modulus ─────────────────────────────────────
// TODO: use an if/else if/else to pick an adventureType based on luckyRemainder:
//   0 → "Epic Quest"
//   1 → "Comedic Mishap"
//   2 → "Mysterious Journey"
//   Then log it with a label explaining the modulus calculation

let adventureType;
switch (luckyRemainder) {
    case 0:
        adventureType = "Epic Quest";
        break;
    case 1:
        adventureType = "Comedic Mishap";
        break;
    case 2:
        adventureType = "Mysterious Journey";
        break;

    default:
        adventureType = "how";
        break;
}

log(adventureType);

if (sillyNumber == 67) {
    document.getElementsByTagName("body")[0].innerHTML = "<p style='font-size: 99.9vh; color: red; margin: 0; padding: 0;'>hey.</p>"
}

// ─── PRACTICE CHALLENGE ──────────────────────────────────────────────────────
// Build your own Mad Libs-style program with a different theme.
// Requirements:
//   • At least 5 prompt() calls to collect words or numbers from the user
//   • At least one Number() conversion for a numeric input
//   • A template literal that weaves the words into a story or message
//   • At least three different arithmetic operators used in stat calculations
//   • One use of modulus (%) to put the user in a category or group
//   • All results logged to the console with clear, readable labels
// ─────────────────────────────────────────────────────────────────────────────
