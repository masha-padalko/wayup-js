// All answer options

const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

//  All our options

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"); //question
const numberOfQuestions = document.getElementById("number-of-question"); //question number
const numberOfAllQuestion = document.getElementById("number-of-all-questions"); // all questions number

let indexOfQuestion, // index current question
  indexOfPage = 0; // page index

const answersTracker = document.getElementById("answers-tracker");
const btnNext = document.getElementById("btn-next"); // next button

let score = 0; // result of quiz

const correctAnswer = document.getElementById("correct-answer"), //correct answer count
  numberOfAllQuestions2 = document.getElementById("number-of-all-questions-2"),
  btnTryAgain = document.getElementById("btn-try-again");

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    option: ["<script>", "<javascript>", "<js>", "<scripting>"],
    rightAnswer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    option: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    rightAnswer: 3,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    option: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
    ],
    rightAnswer: 4,
  },
];

numberOfAllQuestion.innerText = questions.length; // question count

const load = () => {
  question.innerText = questions[indexOfQuestion].question; //question
  option1.innerText = questions[indexOfQuestion].option[0];
  option2.innerText = questions[indexOfQuestion].option[1];
  option3.innerText = questions[indexOfQuestion].option[2];
  option4.innerText = questions[indexOfQuestion].option[3];

  numberOfQuestions.innerHTML = indexOfPage + 1; //set current page
  indexOfPage++;
};

let completedAnswers = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false; //checking duplicate questions

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach((item) => {
        if (item == randomNumber) {
          hitDuplicate = true;
        }
      });
      if (hitDuplicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (completedAnswers.length == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  completedAnswers.push(indexOfQuestion);
};

const checkAnswer = (el) => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add("correct");
    updateAnswerTracker("correct");
    score++;
  } else {
    el.target.classList.add("wrong");
    updateAnswerTracker("wrong");
  }
  disabledOptions();
};

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const disabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  });
};

//remove all clasess from all options
const enableOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove("disabled", "correct", "wrong");
  });
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement("div");
    answersTracker.appendChild(div);
  });
};

const updateAnswerTracker = (status) => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
  if (!optionElements[0].classList.contains("disabled")) {
    alert("Please choose option");
  } else {
    randomQuestion();
    enableOptions();
  }
};

const quizOver = () => {
  document.querySelector(".quiz-over-modal").classList.add("active");
  correctAnswer.innerHTML = score;
  numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
  window.location.reload();
};

btnNext.addEventListener("click", () => {
  validate();
});

btnTryAgain.addEventListener("click", () => {
  tryAgain();
});

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
