// Task 1

// const texts = {
//   en: {
//     title: "Hello",
//     text: "Welcome to the page!",
//   },
//   ua: {
//     title: "Привіт",
//     text: "Ласкаво просимо на сторінку!",
//   },
// };

// Моя версія

// Default value
// document.getElementById("title").innerHTML = texts.en.title;
// document.getElementById("text").innerHTML = texts.en.text;

// const loadLanguage = function (lang) {
//   // Get a key
//   currentLanguage = Object.keys(texts);

//   if (lang === currentLanguage[0]) {
//     // English
//     lang = texts.en;
//     document.getElementById("title").innerHTML = lang.title;
//     document.getElementById("text").innerHTML = lang.text;
//   } else if (lang === currentLanguage[1]) {
//     // Ukraine
//     lang = texts.ua;
//     document.getElementById("title").innerHTML = lang.title;
//     document.getElementById("text").innerHTML = lang.text;
//   } else {
//     document.getElementById("text").innerHTML = "lenguage not exist";
//   }
// };

// Функція завантаження мови
// function loadLanguage(lang) {
//   const current = texts[lang];

//   if (!current) {
//     document.getElementById("text").innerHTML = "Language not found";
//     return;
//   }

//   document.getElementById("title").innerHTML = current.title;
//   document.getElementById("text").innerHTML = current.text;
// }

// // Мова за замовчуванням
// loadLanguage("en");

// Task 2

// My Code

// const email = "apple.pie@example.com";

// const maskEmail = (email) => {
//   const emailLength = email.indexOf("@") - 1;
//   const emailSlice = email.slice(1, emailLength);
//   const mask = "*".repeat(emailLength - 1);

//   return email.replace(emailSlice, mask);
// };

// console.log(maskEmail(email)); // a*******e@example.com
// console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com
// console.log(maskEmail("info@example.com")); // i**o@example.com
// console.log(maskEmail("user@domain.org")); // u**r@domain.org

// AI Code

// const maskEmail = (email) => {
//   const atIndex = email.indexOf("@");
//   const username = email.slice(0, atIndex);
//   const domain = email.slice(atIndex);

//   if (username.length <= 2) return email; //

//   const maskedPart = "*".repeat(username.length - 2);
//   const maskedEmail =
//     username[0] + maskedPart + username[username.length - 1] + domain;

//   return maskedEmail;
// };

// console.log(maskEmail("apple.pie@example.com")); // a*******e@example.com
// console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com
// console.log(maskEmail("info@test.dev")); // i**o@test.dev
// console.log(maskEmail("user@domain.org")); // u**r@domain.org

// Task 3

// const convertCtoF = (celsius) => {
//   const fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// };

// console.log(convertCtoF(0));
// console.log(convertCtoF(-30));
// console.log(convertCtoF(-10));
// console.log(convertCtoF(20));
// console.log(convertCtoF(30));

// Task 4

// let count = 0;

// const cc = (card) => {
//   if (card >= 2 && card <= 6) {
//     count += 1;
//   } else if (card >= 7 && card <= 9) {
//     count;
//   } else {
//     count -= 1;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// };

// console.log(cc(6));

//task 5

// const isLeapYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return year + " is a leap year";
//   } else {
//     return year + " is not a leap year";
//   }
// };

// let year = 2024;
// let result = isLeapYear(year);
// console.log(result); // 2024 is a leap year.

// year = 2000;
// result = isLeapYear(year);
// console.log(result); // 2000 is a leap year.

// year = 1900;
// result = isLeapYear(year);
// console.log(result); // 1900 is not a leap year.

// task 6

// const truncateString = (string, number) => {
//   if (string.length > number) {
//     return string.slice(0, number) + "...";
//   } else if (string.length <= number) {
//     return string;
//   }
// };

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// );

// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

// console.log(truncateString("A-", 1));

// console.log(truncateString("Absolutely Longer", 2));

// task 7 My code

// const confirmEnding = (checkStr, strCheckAgainst) => {
//   if (checkStr.slice(-strCheckAgainst.length) === strCheckAgainst) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(confirmEnding("Bastian", "n"));

// console.log(confirmEnding("Congratulation", "on"));

// console.log(confirmEnding("Connor", "n"));

// console.log(
//   confirmEnding(
//     "Walking on water and developing software from a specification are easy if both are frozen",
//     "specification"
//   )
// );

// console.log(confirmEnding("He has to give me a new name", "name"));

// console.log(confirmEnding("Open sesame", "same"));

// console.log(confirmEnding("Open sesame", "sage"));

// console.log(confirmEnding("Open sesame", "game"));

// console.log(
//   confirmEnding(
//     "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing",
//     "mountain"
//   )
// );

// console.log(confirmEnding("Abstraction", "action"));

// AI Code

// const confirmEnding = (checkStr, strCheckAgainst) =>
//   checkStr.slice(-strCheckAgainst.length) === strCheckAgainst;

// console.log(confirmEnding("Bastian", "n"));

// console.log(confirmEnding("Congratulation", "on"));

// console.log(confirmEnding("Connor", "n"));

// console.log(
//   confirmEnding(
//     "Walking on water and developing software from a specification are easy if both are frozen",
//     "specification"
//   )
// );

// console.log(confirmEnding("He has to give me a new name", "name"));

// console.log(confirmEnding("Open sesame", "same"));

// console.log(confirmEnding("Open sesame", "sage"));

// console.log(confirmEnding("Open sesame", "game"));

// console.log(
//   confirmEnding(
//     "If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing",
//     "mountain"
//   )
// );

// console.log(confirmEnding("Abstraction", "action"));
