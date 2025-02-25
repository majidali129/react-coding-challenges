const quizData = {
  quizType: "objective",
  subject: "JavaScript",
  teacher: "John Doe",
  duration: "30 minutes",
  passingMarks: 7,
  questions: [
    {
      id: 1,
      question: "What is the output of `console.log(typeof null);`?",
      options: ["null", "object", "undefined", "number"],
      correctOption: 1,
    },
    {
      id: 2,
      question:
        "Which method is used to convert a JSON string into a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "parseJSON()",
        "toObject()",
      ],
      correctOption: 0,
    },
    {
      id: 3,
      question: "What will `console.log(2 + '2' - 1)` output?",
      options: ["3", "21", "NaN", "22"],
      correctOption: 1,
    },
    {
      id: 4,
      question:
        "Which keyword is used to declare a constant variable in JavaScript?",
      options: ["var", "let", "const", "static"],
      correctOption: 2,
    },
    {
      id: 5,
      question: "What does the `map()` method return?",
      options: [
        "A modified array",
        "The first element of the array",
        "A new function",
        "undefined",
      ],
      correctOption: 0,
    },
    {
      id: 6,
      question: "Which of the following is a JavaScript framework/library?",
      options: ["Angular", "Laravel", "Django", "Flask"],
      correctOption: 0,
    },
    {
      id: 7,
      question: "What is the default value of `this` inside an arrow function?",
      options: ["window", "undefined", "null", "it depends on the caller"],
      correctOption: 0,
    },
    {
      id: 8,
      question: "What will be logged? `console.log(!!'false');`",
      options: ["false", "true", "undefined", "NaN"],
      correctOption: 1,
    },
    {
      id: 9,
      question: "What is the purpose of `useEffect` in React?",
      options: [
        "To handle HTTP requests",
        "To perform side effects",
        "To declare states",
        "To manage routing",
      ],
      correctOption: 1,
    },
    {
      id: 10,
      question: "How do you prevent an event from propagating in JavaScript?",
      options: [
        "event.stopPropagation();",
        "event.preventDefault();",
        "event.stop();",
        "event.preventBubble();",
      ],
      correctOption: 0,
    },
  ],
};

export { quizData };
