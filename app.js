// toss game

// let player1 = prompt("Please enter name of player1");
// let player2 = prompt("Please enter name of player2");

// let toss = Math.random() * 2;

// let change = Math.floor(toss);

// if (change == 0) {
//   console.log(`${player1} you have won the toss`);
// } else {
//   console.log(`${player2} you have won the toss`);
// }

// ========================================================

// password generator

let randomvalues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";
for (let i = 0; i < 10; i++) {
  let randomnumber = Math.floor(Math.random() * randomvalues.length);
  password += randomvalues[randomnumber];
}
console.log(password);

// ========================================================

//  Age Calculator
// let birthday = prompt("Enter a date (YYYY-MM-DD format):");

// let inputDate = new Date(birthday);

// let today = new Date();

// let diff =  today.getTime() - inputDate.getTime()

// let age = diff / (1000 * 3600 * 24 * 30 * 12);

// console.log(age);

// ========================================================