// Objects Exercises


//1. Using the umbrella example from the class slide, see if you can follow the example open() method and create the close() method.

// const umbrella = {
//  color: "pink",
//  isOpen: false,
//  open: function() {
//    if (umbrella.isOpen === true) {
//      return "The umbrella is already opened!";
//    } else {
//      umbrella.isOpen = true;
//      return "Julia opens the umbrella!";
//    }
//   }
// };

// TIP: Remember to put all of your object's properties and methods inside curly braces: var myObject = { greeting: "hello", name: "Julia" };. Also, remember that an object is just another data type. Just like how you would put a semicolon after a string variable declaration var myString = "hello";, don't forget to put a semi-colon at the end of your object's declaration.

// /*
// * Programming Quiz: Umbrella
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a variable `umbrella`
// * - The variable `umbrella` should be an object
// * - Your `umbrella` object should have the `color` and `isOpen` property
// * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
// * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
// */

 // Solution
   var umbrella = {
   color: "pink",
   isOpen: true,
   open: function() {
       if (umbrella.isOpen === true) {
           return "The umbrella is already opened!";
       } else {
           umbrella.isOpen = true;
           return "Julia opens the umbrella!";
       }
   },
   isClose: true,
   close: function() {
       if (umbrella.isClose === true) {
           return "The umbrella is already closed!";
       } else {
           umbrella.isClose = false;
           return "Julia close the umbrella!";
       }
   }
}


//2. Create a breakfast object to represent the following menu item:

// The Lumberjack - $9.95
// eggs, sausage, toast, hashbrowns, pancakes
// The object should contain properties for the name, price, and ingredients.

// /*
// * Programming Quiz: Menu Items
// * Create an object named `breakfast`.
// * The object should contain properties for the `name`, `price`, and `ingredients`.
// * Print the entire object on the console
// */

//Solution

  // var breakfast = {
  // name: "The Lumberjack",
  // price: '$9.95',
  // ingredients: [`eggs, sausage, toast, hashbrowns, pancakes`]
  // };
  // console.log(breakfast);

// 3.	Using the given object:

// const savingsAccount = {
//  balance: 1000,
//  interestRatePercent: 1,
//  deposit: function addMoney(amount) {
//    if (amount > 0) {
//      savingsAccount.balance += amount;
//    }
//  },
//  withdraw: function removeMoney(amount) {
//    var verifyBalance = savingsAccount.balance - amount;
//    if (amount > 0 && verifyBalance >= 0) {
//      savingsAccount.balance -= amount;
//    }
//  }
// };
// add a printAccountSummary() method that returns the following account message:

// Welcome!
// Your balance is currently $1000 and your interest rate is 1%.
// /*
// * Programming Quiz: Bank Accounts 1
// */
    // const savingsAccount = {
    // balance: 1000,
    // interestRatePercent: 1,
    // deposit: function addMoney(amount) {
    //   if (amount > 0) {
    //     savingsAccount.balance += amount;
    //   }
    // },
    // withdraw: function removeMoney(amount) {
    //   var verifyBalance = savingsAccount.balance - amount;
    //   if (amount > 0 && verifyBalance >= 0) {
    //     savingsAccount.balance -= amount;
    //   }
    // }
    
    // };
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have an object `savingsAccount`
// * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
// * - Your `savingsAccount` object should have a `printAccountSummary()` method
// * - Your `printAccountSummary()` method should return the EXACT expected message
// * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
// */
// Solution

  const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary : function () {
      console.log(`  Welcome!\n  Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`)
    }
  };

    console.log(savingsAccount.printAccountSummary());

// 4. Using the object from exercise 3, answer the following quiz question:
// Which of the following are valid ways to access properties and call methods from the savingsAccount object?
// savingsAccount.balance;
// savingsAccount[balance];
// savingsAccount[“balance”];
// savingsAccount.”balance”;
// savingsAccount.withdraw = 50;
// savingsAccount.removeMoney = 50;
// savingsAccount.withdraw(50);
// savingsAccount.removeMoney(50);

//Answer
console.log(savingsAccount.balance);
console.log(savingsAccount["balance"])

// 5. Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
// /*
// * Programming Quiz: Facebook Friends
// */

// /*
// * QUIZ REQUIREMENTS
// * - Your code should have an object `facebookProfile`
// * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
// * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
// * - Carefully implement the desired functionality of each method, as decribed above
// */


// // TIP -
// // In an array,
// // - addition at the end is done using push() method
// // - addition at a specific index is done using splice() method
// // - deletion from the beginning is done using pop() method
// // - deletion from a specific index is done using splice() method

// Solution

    let facebookProfile = {
    name: `Toki Tosin`,
    friends: 2101,
    messages: [`How are you!, I love PHP!, Do you love JavaScript?`],
    postMessage: function(message) {
      this.messages.push(message)
    },
    deleteMessage: function(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function() {
          this.friends += 1;  
    },
    addFriend: function() {
          this.friends -= 1;  
    }
    };

    console.log(facebookProfile.friends)

// 6. Here is an array of donut objects.

// const donuts = [
//  { type: "Jelly", cost: 1.22 },
//  { type: "Chocolate", cost: 2.45 },
//  { type: "Cider", cost: 1.59 },
//  { type: "Boston Cream", cost: 5.99 }
// ];
// Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
// Jelly donuts cost $1.22 each
// Chocolate donuts cost $2.45 each
// Cider donuts cost $1.59 each
// Boston Cream donuts cost $5.99 each
// /*
// * Programming Quiz: Donuts Revisited
// */

// /*
// * QUIZ REQUIREMENTS
// * - Your code sshould have an array named `donuts`
// * - Your `donuts` array should call the `forEach()` method
// * - Your `forEach()` loop should output the donut summaries
// * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
// */

// // This is an array of objects.
 // Solution

const donuts = [
   { type: "Jelly", cost: 1.22 },
   { type: "Chocolate", cost: 2.45 },
   { type: "Cider", cost: 1.59 },
   { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
  console.log(`${donut.type} donuts cost $${donut.cost} each`)
})

