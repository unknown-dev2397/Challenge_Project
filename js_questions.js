export const jsQuestions = [
  {
    question:
      "What will the following code log to the console? console.log(typeof null);",
    options: ["A) null", "B) object", "C) undefined", "D) boolean"],
    answer: "B) object",
  },
  {
    question: "What is the output of this code? console.log(2 + '2');",
    options: ["A) 4", "B) 22", "C) undefined", "D) NaN"],
    answer: "B) 22",
  },
  {
    question:
      "Which method is used to convert a string to an integer in JavaScript?",
    options: [
      "A) parseInteger()",
      "B) parseInt()",
      "C) convertInt()",
      "D) toInteger()",
    ],
    answer: "B) parseInt()",
  },
  {
    question: "What will be the result of the following expression? [] == ![]",
    options: ["A) true", "B) false", "C) undefined", "D) null"],
    answer: "A) true",
  },
  {
    question: "Which of the following is NOT a falsy value in JavaScript?",
    options: ["A) 0", "B) undefined", "C) ''", "D) 'false'"],
    answer: "D) 'false'",
  },
  {
    question:
      "Which of the following is the correct syntax to create a new object in JavaScript?",
    options: [
      "A) var obj = new Object();",
      "B) var obj = Object();",
      "C) var obj = {};",
    ],
    answer: "C) var obj = {}",
  },
  {
    question: "What is the output of the following code? console.log(1 + '1');",
    options: ["A) 2", "B) 11", "C) '11'", "D) NaN"],
    answer: "C) '11'",
  },
  {
    question: "How can you add a new property to an object in JavaScript?",
    options: [
      "A) obj.add('property')",
      "B) obj.property = value;",
      "C) obj.set('property', value);",
      "D) obj.addProperty('property', value);",
    ],
    answer: "B) obj.property = value;",
  },
  {
    question:
      "Which of the following is used to parse a JSON string in JavaScript?",
    options: [
      "A) JSON.parse()",
      "B) JSON.stringify()",
      "C) JSON.parseJSON()",
      "D) parseJSON()",
    ],
    answer: "A) JSON.parse()",
  },
  {
    question: "What does the following code return? Boolean('0')",
    options: ["A) false", "B) true", "C) undefined", "D) NaN"],
    answer: "B) true",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "A) The global object",
      "B) The function where it is used",
      "C) The object that is executing the current piece of code",
      "D) None of the above",
    ],
    answer: "C) The object that is executing the current piece of code",
  },
  {
    question:
      "Which of the following statements is true about JavaScript functions?",
    options: [
      "A) JavaScript functions are hoisted",
      "B) JavaScript functions cannot be passed as arguments",
      "C) JavaScript functions cannot return values",
      "D) JavaScript functions always return undefined",
    ],
    answer: "A) JavaScript functions are hoisted",
  },
  {
    question: "What is the correct syntax to create a function in JavaScript?",
    options: [
      "A) function myFunction() {}",
      "B) function: myFunction() {}",
      "C) myFunction() => {}",
      "D) createFunction myFunction() {}",
    ],
    answer: "A) function myFunction() {}",
  },
  {
    question: "What is the purpose of the 'bind()' method in JavaScript?",
    options: [
      "A) To bind two functions together",
      "B) To create a new function with a specific context",
      "C) To combine arrays",
      "D) None of the above",
    ],
    answer: "B) To create a new function with a specific context",
  },
  {
    question:
      "Which JavaScript method is used to remove the last item from an array?",
    options: ["A) pop()", "B) shift()", "C) slice()", "D) remove()"],
    answer: "A) pop()",
  },
  {
    question:
      "Which of the following is the correct way to access a value in an object?",
    options: [
      "A) obj['property']",
      "B) obj.property",
      "C) Both A and B",
      "D) None of the above",
    ],
    answer: "C) Both A and B",
  },
  {
    question:
      "What will be the output of the following code? console.log(2 == '2');",
    options: ["A) true", "B) false", "C) undefined", "D) NaN"],
    answer: "A) true",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["A) =", "B) ===", "C) ==", "D) !="],
    answer: "A) =",
  },
  {
    question:
      "Which of the following will create a shallow copy of an array in JavaScript?",
    options: [
      "A) arr.copy()",
      "B) arr.slice()",
      "C) arr.splice()",
      "D) arr.clone()",
    ],
    answer: "B) arr.slice()",
  },
  {
    question: "What does the JavaScript 'setInterval()' method do?",
    options: [
      "A) Runs a function repeatedly at fixed intervals",
      "B) Pauses the execution of a function",
      "C) Stops a running function",
      "D) None of the above",
    ],
    answer: "A) Runs a function repeatedly at fixed intervals",
  },
  {
    question:
      "What does the 'typeof' operator in JavaScript return for an array?",
    options: [
      "A) 'array'",
      "B) 'object'",
      "C) 'undefined'",
      "D) 'array' or 'object'",
    ],
    answer: "B) 'object'",
  },
  {
    question:
      "Which of the following statements is true about JavaScript variables?",
    options: [
      "A) Variables declared with 'let' are hoisted",
      "B) Variables declared with 'var' are hoisted",
      "C) Variables declared with 'const' are hoisted",
      "D) None of the above",
    ],
    answer: "B) Variables declared with 'var' are hoisted",
  },
  {
    question:
      "Which of the following methods is used to concatenate two arrays in JavaScript?",
    options: ["A) concat()", "B) append()", "C) join()", "D) merge()"],
    answer: "A) concat()",
  },
  {
    question:
      "Which of the following will prevent a form from being submitted in JavaScript?",
    options: [
      "A) return false;",
      "B) form.preventDefault();",
      "C) event.stopPropagation();",
      "D) All of the above",
    ],
    answer: "D) All of the above",
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "A) It defines an asynchronous function",
      "B) It executes the function synchronously",
      "C) It makes a function run in the background",
      "D) None of the above",
    ],
    answer: "A) It defines an asynchronous function",
  },
];
