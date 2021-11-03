
// Conditionals Excersice

/*
 * Programming Quiz: Even or Odd 
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
// change the value of `number` to test your if...else statement

//Solution
let number = 2;

let remainder = number % 2;

if (remainder === 0) {
  console.log('even')
} else {
  console.log('odd')
}

// Programming Quiz: Musical Groups

/*/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */

// change the value of `musicians` to test your conditional statements
let musicians = 1;
//Solution
if (musicians <= 0) {
  console.log('not a group');
} else if (musicians === 1) {
  console.log('solo');
} else if (musicians === 2) {
  console.log('duet');
} else if (musicians === 3) {
  console.log('trio');
} else if (musicians === 4) {
  console.log('quartet');
} else {
  console.log('this is a large group');
}

/*
 * Programming Quiz: Murder Mystery 
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */
//Solution
var room = "dinning room";
var suspect = "Mr. Parkes";
var weapon = "knife";
var solved = false;

if (suspect === "Mr. Parkes" && room === "dinning room" && weapon === "knife") {
  solved = true;
} else if (suspect === "Ms. Van Cleve" && room === "gallery" && weapon === "trophy") {
  solved = true;
} else if (suspect === "Mrs. Sparr" && room === "billiards room" && weapon === "pool stick") {
  solved = true;
} else if (suspect === "Mr. Kalehoff" && room === "ballroom" && weapon === "poison") {
  solved = true;
} else {
  solved = false;
}

if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}`);
} else {
  console.log('')
}

/*
 * Programming Quiz - Checking Your Balance
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
// change the values of `balance`, `checkBalance`, and `isActive` to test your code

//Solution

let balance = 325.00;
let checkBalance = true;
let isActive = false;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".")
  } else {
    if (!isActive) {
      console.log("Your account is no longer active.");
    } else {
      if (balance === 0) {
        console.log("Your account is empty!");
      }
      else {
        console.log("Your balance is negative. Please contact bank.");
      }
    }
  }
} else {
  console.log("Thank you. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
//Solution

let flavor = "strawberry";
let vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" && vessel === "cone" && toppings === "sprinkles") || (flavor === "vanilla" && vessel === "cone" && toppings === "peanuts") || (flavor === "vanilla" && vessel === "bowl" && toppings === "sprinkles") || (flavor === "vanilla" && vessel === "bowl" && toppings === "peanuts") || (flavor === "chocolate" && vessel === "cone" && toppings === "sprinkles") || (flavor === "chocolate" && vessel === "cone" && toppings === "peanuts") || (flavor === "chocolate" && vessel === "bowl" && toppings === "sprinkles") || (flavor === "chocolate" && vessel === "bowl" && toppings === "peanuts")) {
  console.log(`"I\'d like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}."`);
} else {
  console.log(' ');
}

/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
//Solution
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/
if (shirtWidth <= 18 || shirtLength <= 28 || shirtSleeve <= 8.13) {
  console.log('S');
} else if (shirtWidth <= 20 || shirtLength <= 29 || shirtSleeve <= 8.38) {
  console.log('M');
} else if (shirtWidth <= 22 || shirtLength <= 30 || shirtSleeve <= 8.63) {
  console.log('L');
} else if (shirtWidth <= 24 || shirtLength <= 31 || shirtSleeve <= 8.88) {
  console.log('XL');
} else if (shirtWidth <= 26 || shirtLength <= 33 || shirtSleeve <= 9.63) {
  console.log('2XL');
} else if (shirtWidth <= 26 || shirtLength <= 34 || shirtSleeve <= 10.13) {
  console.log('3XL');
} else {
  console.log(' ');
}
/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */
 
//Solution

let category = "carnivore"

eatsPlants && !eatsAnimals
  ? category = "herbivore" :
  !eatsPlants && eatsAnimals
    ? category = "carnivore" :
    eatsPlants && eatsAnimals
      ? category = "omnivore" :
      category = "undefined";
console.log(category);


/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.


// change the value of `education` to test your code

//Solution

var education = 'no high school diploma';

// set the value of this based on a person's education
let salary = 0;
*/
switch (education) {
  case 'no high school diploma': {
    let pay = 25636;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'a high school diploma': {
    let pay = 35256;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'an Associate\'s degree': {
    let pay = 41496;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'a Bachelor\'s degree': {
    let pay = 59124;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'a Master\'s degree': {
    let pay = 69732;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'a Professional degree': {
    let pay = 89960;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  case 'a Doctoral degree': {
    let pay = 84396;
    let salary = pay.toLocaleString("en-US");
    console.log(`In 2015, a person with ${education} earned an average of $${salary}\/year.`);
    break;
  }
  default:
    console.log(" ")
} 
