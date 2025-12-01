// const lunches = [];

// const addLunchToEnd = (arr, str) => {
//   arr.push(str);

//   console.log(`${str} added to the end of the lunch menu.`);

//   return arr;
// };

// const addLunchToStart = (arr, str) => {
//   arr.unshift(str);

//   console.log(`${str} added to the start of the lunch menu.`);

//   return arr;
// };

// const removeLastLunch = (arr) => {
//   const itemRemove = arr.pop();

//   if (itemRemove != undefined) {
//     console.log(`${itemRemove} removed from the end of the lunch menu.`);
//   } else {
//     console.log("No lunches to remove.");
//   }

//   return arr;
// };

// const removeFirstLunch = (arr) => {
//   const itemRemove = arr.shift();

//   if (itemRemove != undefined) {
//     console.log(`${itemRemove} removed from the start of the lunch menu.`);
//   } else {
//     console.log("No lunches to remove.");
//   }

//   return arr;
// };

// const getRandomLunch = (arr) => {
//   const itemNum = arr.length;

//   const randNum = Math.round(Math.random() * itemNum);
//   if (itemNum === 0) {
//     console.log("No lunches available.");
//   } else {
//     console.log(`Randomly selected lunch: ${arr[randNum]}`);
//   }
// };

// const showLunchMenu = (arr) => {
//   if (arr.length === 0) {
//     console.log("The menu is empty.");
//   } else {
//     console.log(`Menu items: ${arr.join(", ")}`);
//   }
// };

// addLunchToEnd(lunches, "Tacos");

// console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

// addLunchToStart(lunches, "Sushi");

// console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

// removeLastLunch(lunches);

// removeLastLunch(["Stew", "Soup", "Toast"]);

// console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

// removeFirstLunch(lunches);

// removeFirstLunch(["Salad", "Eggs", "Cheese"]);

// console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

// getRandomLunch(lunches);

// getRandomLunch(["Greens", "Corns", "Beans"]);

// showLunchMenu(lunches);

// console.log(showLunchMenu(["Greens", "Corns", "Beans"]));

// console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));

// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// const golfScore = (par, strokes) => {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// };

// console.log(golfScore(4, 2));

// const reverseString = (string) => string.split("").reverse().join("");

// console.log(reverseString("Greetings from Earth"));
