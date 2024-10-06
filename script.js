//---------Chp 12 to 13--------//

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//Answer----

// var char = prompt("Enter a Character");
// document.write(`character is ${char}`);
// if (char == Number.parseInt(char)) {
//     document.write(`Input is a number`);
// } else if (char == char.toUpperCase()) {
//     document.write(`Input is an uppercase letter`);
// } else if (char == char.toLowerCase()) {
//     document.write(`Input is an lowercase letter`);
// } else {
//     document.write(`Invalid Character!`);
// }

// console.log("char");

// let char = prompt("Enter a Character?");

// if(char == Number.parseInt(char)){
//      document.write("Input is a number");
// } else if (char == char.toUpperCase(char)){
//    document.write("Input is a Upper Case");
// } else if (char == char.toLowerCase(char)){
//     document.write("Input is a Lower Case");
// }
//  else{
//     document.write("Invalid Character");
//  };

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//Answer------

// let num1 = prompt("Enter a First Number?")
// let num2 = prompt("Enter a Second Number?")

// if(num1 > num2){
//     document.write(`${num1} is Grether than ${num2}`);
// } else if(num1 < num2){
//     document.write(`${num1} is Less than ${num2}`);
// } else if(num1 == num2){
//   document.write(`Num1 Is Equal To Num2`)
// }
//  else{
//     document.write(`Invalid Number`);
//  };


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//Answer-----

// let user = prompt("Enter a Number?")

// if(user > 0){
//    document.write(`${user} is Positive`);
// } else if(user < 0){
//    document.write(`${user} is Negative`);
// }else if(user = 0){
//    document.write(`${user} is Zero`);
// }
// else{
//     document.write(`Invalid Number`);
// };

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise.

//Answer-----

// let char = prompt("Enter a Character").toLowerCase();
// let vowel = ["a","e","i","o","u"];
// if(vowel.includes(char)){
//     document.write(`${char} is a vowel`);
// } else{
//     document.write(`${char} is not a vowel`);
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

//Answer-----

// let my_pass = "Hina123"
// let user_pass = prompt("Enter a password?")

// if(user_pass === ""){
//     document.write(`Please enter your password`);
// } else if(my_pass == user_pass){
// document.write(`Correct! The Password`);
// } 
// else{
//  document.write(`Incorrect Password`);
// };


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//Answer-----

// let user_hour = prompt("Enter a Greeting")
// user_hour = Number(user_hour);
// var hour = 13;
// if (hour < 18){
//     document.write(`Good Day!`);
// }else if(user_hour > hour){
//     document.write(`Good Evening!`);
// };


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

//Answer----

// let time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");
// time = Number(time); 

// if (time >= 0 && time < 1200) {
//     document.write("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon");
// } else if (time >= 1700 && time <= 2359) {
//     document.write("Good Evening");
// } else {
//     document.write("Invalid time format");
// }


///-----------------------------------------///------------------------------------------------------























