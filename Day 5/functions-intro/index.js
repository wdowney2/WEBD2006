// Lesson 5 — Functions: Basics, Parameters, Scope
// Objective: Write function declarations with parameters and return values,
// call functions with appropriate arguments, and understand global vs function scope.


// ── Part 1: A simple function with no parameters ──────────────────────────────
// TODO: declare a function called greetUser that logs "Welcome to the Movie Club!"

function greetUser() {
    console.log("Welcome to the Movie Club!");
}

// TODO: call greetUser twice

greetUser();
greetUser();

// ── Part 2: Adding a parameter to make it flexible ────────────────────────────
// TODO: declare a function called greetMember that takes a name parameter
//       and logs a welcome message using it

function greetMember(member) {
    console.log(`Welcome ${member}!`);
}

// TODO: call greetMember three times with different names

greetMember("John");
greetMember("Ringo");
greetMember("Dark Ringo");

// ── Part 3: Multiple parameters + return values ───────────────────────────────

// TODO: declare rateMovieLog(title, score) — uses console.log (returns nothing)



// TODO: declare rateMovie(title, score) — uses return instead of console.log


// TODO: call rateMovieLog once and observe the output

// TODO: store the result of rateMovie in a variable and log it

// TODO: call rateMovie directly inside console.log for at least two movies


// ── Part 4: Arithmetic and composing functions ────────────────────────────────
// TODO: declare calculateAverageRating(rating1, rating2, rating3)
//       that returns the average of the three ratings


// TODO: call calculateAverageRating, store the result, and log it

// TODO: pass calculateAverageRating's return value directly into rateMovie


// ── Part 5: Scope — global vs function ────────────────────────────────────────
// TODO: declare two global variables: movieCount (start at 0) and clubName


// TODO: declare addMovie(title) that:
//       - increments movieCount by 1
//       - declares a local confirmMessage variable
//       - logs the confirm message


// TODO: call addMovie three times with different movie titles

// TODO: log movieCount and clubName (they're global — this should work)

// TODO: declare showMovieCount() that logs how many movies are in the list
//       and call it


// Uncomment to see the scope error — confirmMessage is local to addMovie:
// console.log(confirmMessage);


// ─── PRACTICE CHALLENGE ──────────────────────────────────────────────────────
// Write two helper functions below:
//
// 1. formatMovieInfo(title, year, rating)
//    Combines the three parameters into a readable string.
//    Example output: "Inception (2010) — 9/10"
//    Must use all three parameters and return (not console.log) the result.
//
// 2. convertRatingToPercentage(rating)
//    Converts a rating out of 10 into a percentage.
//    Example: convertRatingToPercentage(7.5) → 75
//    Must use a parameter and return the result.
//
// Test both functions by calling them and logging the results.
// Be ready to explain: what does each function do, and why did you use return?
// ─────────────────────────────────────────────────────────────────────────────
