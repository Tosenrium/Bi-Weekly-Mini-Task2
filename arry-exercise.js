//   Array Exercises

// 1. Create an array called softwareEngineeringStudents and add 10 students from your class in the array. Then, print the softwareEngineeringStudents to the console using console.log.

// /*
// * Programming Quiz: Software Engineering Students
// */

// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a variable `softwareEngineeringStudents`
// * - The variable `softwareEngineeringStudents` should be an array containing the values of 10 students from your class
// * - Your code should print `softwareEngineeringStudents` to the console
// *
// */

 // Solution

 let softwareEngineeringStudents = ['Timothy Patrick', 'Samuel Omolaja', 'Oluwatosin Oluwatoki', 'Stephen Kofoworola', 'Kingsley Ehapa', 'Anthonia Fagbeyiro', 'Kelechukwu Nwaji', 'Blossom Babalola', 'Romeo Omoregie', 'Oreofe Olayemi']

 console.log(softwareEngineeringStudents);

// 2. The space western TV drama Firefly premiered in the United States on September 20, 2002. Although the show only featured fourteen episodes and was canceled during its first season, it continues to remain popular today with a growing fan base. In the show, the captain Mal, played by Nathan Fillion, leads a crew of renegades on the spaceship Serenity.

// Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . You don't need to type out the actual strings, just use the provided variables.

// let captain = "Mal";
// let second = "Zoe";
// let pilot = "Wash";
// let companion = "Inara";
// let mercenary = "Jayne";
// let mechanic = "Kaylee";
// Then, print the crew array to the console.



// /*
// * Programming Quiz: Building the Crew
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a variable `crew`
// * - The variable `crew` should be an array containing the Serenity\'s crew
// * - Your code should print `crew` to the console as an array. Do not iterate over the elements.
// *
// */

// Solution

    // let captain = "Mal";
    // let second = "Zoe";
    // let pilot = "Wash";
    // let companion = "Inara";
    // let mercenary = "Jayne";
    // let mechanic = "Kaylee";

    // crew = [captain, second, pilot, companion, mercenary, mechanic]

    // console.log(crew)

// 3. Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
// const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
// TIP: The 1st element of any array has an index of 0.
// Afterwards, print out the prices array to the console.
// /*
// * Programming Quiz: The Price is Right
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a variable `prices`
// * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
// * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
// */

// Solution

    const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

    prices[0] = 20.00;
    prices[2] = 30.00;
    prices[6] = 60.00;

    console.log(prices)


// 4. James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

// const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

// but James had this:

// const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

// Remove "Blackberry"
// Add "Yellow" and "Green"
// Add "Purple"
// /*
// * Programming Quiz: Colors of the Rainbow
// *
// * Use only the splice() method to modify the rainbow variable:
// *  - remove "Blackberry"
// *  - add "Yellow" and "Green"
// *  - add "Purple"
// */

// Solution

    const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
  
    rainbow.splice(2, 1, 'Yellow', 'Green')
    rainbow.splice(5, 0, 'Purple')

    console.log(rainbow)

// 5. In the Harry Potter novels, children attending the Hogwarts School of Witchcraft and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each year, the houses assemble a Quidditch team of seven players to compete for the coveted Quidditch Cup.
// Consider the following array.

// const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

// Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
// /*
// * Programming Quiz: Quidditch Cup
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a function `hasEnoughPlayers()`
// * - Your function `hasEnoughPlayers()` should accept one parameter
// * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
// * - Return true if the array size is atleast 7, otherwise false.
// */

 // Solution

      const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
      const hasEnoughPlayers = (array) => {
        for (let i = 0; i < array.length; i++) {
          let greaterThanSeven = array.length >= 7;
          if (greaterThanSeven) {
            return true;
          } else {
            return false;
          }
        }
      }

      console.log(hasEnoughPlayers(team));




// 6. In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

// let captain = "Mal";
// let second = "Zoe";
// let pilot = "Wash";
// let companion = "Inara";
// let mercenary = "Jayne";
// let mechanic = "Kaylee";

// const crew = [captain, second, pilot, companion, mercenary, mechanic];

// Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

// let doctor = "Simon";
// let sister = "River";
// let shepherd = "Book";
// /*
// * Programming Quiz: Joining the Crew
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have a variable `crew`
// * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
// * - Your code should use the `push()` method to add new members to the `crew` array
// * - Print the array on the console at the end
// */

    let captain = "Mal";
    let second = "Zoe";
    let pilot = "Wash";
    let companion = "Inara";
    let mercenary = "Jayne";
    let mechanic = "Kaylee";

    let crew = [captain, second, pilot, companion, mercenary, mechanic];

    let doctor = "Simon";
    let sister = "River";
    let shepherd = "Book";

    crew.push(doctor, sister, shepherd);

    console.log(crew);


// 7. Use the MDN Documentation to determine which of these methods would be best for reversing elements in this array:
//A. 

//Solution
 const reverseMe = ["h", "e", "l", "l", "o"];
 // pop()
 // push()
 // reverse()
 // shift()
 // splice()

// // The best method is the reverse method.
 reverseMe.reverse();

 console.log(reverseMe)

//B.
// What would be the best array method to sort the elements in this array:
//Solution
  const sortMe = [2, 1, 10, 7, 6];
//    1.	concat()
//    2. join()
//    3. unshift()
//    4. sort()
//    5. organize()
  //The best way array method to sort elements is the sort method.

    sortMe.sort((a, b) => a - b);
    console.log(sortMe)
//C.
// Consider the following array, removeFirstElement:
var removeFirstElement = ["a", "b", "c"];
// Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. Which method(s) could you use?
//    1.	pop()
//   2. push()
//   3. shift()
//   4. unshift()
//   5. splice()
// slice()

// Solution
//The best way to do this is the shift method.
  removeFirstElement.shift();
 console.log(removeFirstElement) 

//D.  What method would be best for changing this array into a string?
//const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"]
// join()
// concat()
// fill()
// copyWithin()

// Solution

//The method is the join() method
 const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
 console.log(turnMeIntoAString.join(""));

// 8. Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

// const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// /*
// * Programming Quiz: Another Type of Loop
// * QUIZ REQUIREMENTS
// * Use the existing `test` variable and write a `forEach` loop
// * that adds 100 to each number that is divisible by 3.
// *
// * Things to note:
// *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
// *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
// *  - Outside the loop, you can use `console.log` to verify the `test` variable
// */

 // Solution

  var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
 ];  test.forEach(function(item) {

    if(item % 3 === 0) {
      item += 100;
    }
   console.log(item);
  })


// 9. Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

// const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
// Print out the new totals array using console.log.
// TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 2 decimal places. Note, that the method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can cast it or convert it back to a number:
// Number("1"); // returns 1
// /*
// * Programming Quiz: I Got Bills
// *
// * Use the .map() method to take the bills array below and create a second array
// * of numbers called totals. The totals array should contains each amount from the
// * bills array but with a 15% tip added. Log the totals array to the console.
// *
// * For example, the first two entries in the totals array would be:
// *
// * [57.76, 21.99, ... ]
// *
// * Things to note:
// *  - each entry in the totals array must be a number
// *  - each number must have an accuracy of two decimal points
// */
// /*
// * QUIZ REQUIREMENTS
// * - Your code should have the variables `bills` and `totals`
// * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
// * - Your `totals` array should be an array of numbers
// * - Your code should print the `totals` array to the console
// * - The output must be as described above.
// */

// Solution

    const bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
    ];

    const totals = bills.map(item => parseFloat((item * 0.15).toFixed(2)))
    
    console.log(totals)


// 10. Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".


// const numbers = [
//    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];
// /*
//  * Programming Quiz: Nested Numbers (6-10)
//  * QUIZ REQUIREMENTS
//  *   - The `numbers` variable is an array of arrays.
//  *   - Use a nested `for` loop to cycle through `numbers`.
//  *   - Convert each even number to the string "even"
//  *   - Convert each odd number to the string "odd"
//  */

const numbers = [
      [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
      [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
      [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
      [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
      [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
      [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
      [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
      [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
      [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
      [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
      ];

    
        
          for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers[i].length; j++) {
          if (numbers[i][j] % 2 === 0 ) {
            numbers[i][j] = 'even';
          } else {
            numbers[i][j] = 'odd';
          }
        } 
        }
      
    
      console.log(numbers)
