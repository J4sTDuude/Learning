const questions = [
  {
    category: "Math",
    question: "What is 40 + 2?",
    choices: ["25", "42", "228"],
    answer: "42",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington",
  },
  {
    category: "Programming",
    question: "Which of these is a JavaScript data type?",
    choices: ["Boolean", "Triangle", "Document"],
    answer: "Boolean",
  },
];

const getRandomQuestion = (questionsArr) => {
  const rand = Math.round(Math.random() * (questionsArr.length - 1));

  return questionsArr[rand];
};

const getRandomComputerChoice = (choicesArr) => {
  const rand = Math.round(Math.random() * (choicesArr.length - 1));
  return choicesArr[rand];
};

const getResults = (question, compChoice) => {
  if (compChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

console.log(getRandomComputerChoice(questions[0].choices));

console.log(getResults(questions[0], "42"));

// console.log(getRandomQuestion(questions[0].choices));
