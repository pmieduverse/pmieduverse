// script.js

const questions = [
  {
    question: "Who is known as ‘the Darwin of the 20th century’?",
    options: ["Lamarck", "Ernst Mayr", "Carolus Linneaus", "Robert May"],
    correctAnswer: "Ernst Mayr"
  },
  {
    question: "The number of known and described species that are in the range of, (approximately)",
    options: ["1.3 to 1.4 million", "1.4 to 1.5 million", "1.7 to 1.8 million", "1.9 to 2.2 million"],
    correctAnswer: "1.3 to 1.4 million"
  },
  {
    question: "Twin characteristics of growth are",
    options: ["Increase in mass", "Increase in number", "Both (a) and (b)", "Increase in length and volume"],
    correctAnswer: "Both (a) and (b)"
  },
  {
    question: "Growth in living organism",
    options: ["Is from outside", "Is from inside", "Both (a) and (b)", "Does not take place"],
    correctAnswer: "Both (a) and (b)"
  },
  {
    question: "Which of the following does not grow?",
    options: ["Amoeba", "Yeast", "Dead body", "Planaria"],
    correctAnswer: "Dead body"
  }
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;

// Function to display the current question
function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <div class="question">${question.question}</div>
    <div class="options">
      ${question.options.map((option, index) => `
        <div class="option" onclick="selectAnswer('${option}')">${option}</div>
      `).join('')}
    </div>
  `;
}

// Function to handle answer selection
function selectAnswer(answer) {
  // Deselect all options
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.style.backgroundColor = ''; // Reset background color
  });

  // Highlight the selected option
  const selectedOption = [...options].find(option => option.textContent === answer);
  selectedOption.style.backgroundColor = '#ff00ff'; // Highlight selected option
  
  selectedAnswer = answer; // Store the selected answer
}

// Function to handle the submit button click
document.getElementById('submit-btn').addEventListener('click', () => {
  if (!selectedAnswer) {
    alert("Please select an option before submitting!");
    return; // Don't proceed if no answer is selected
  }

  // Check if the selected answer is correct
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++; // Increment score if answer is correct
  }

  currentQuestionIndex++; // Move to the next question

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    displayQuestion(); // Display next question
  } else {
    showResult(); // Display result if quiz is completed
  }

  // Reset selected answer
  selectedAnswer = null;
});

// Function to display the final result
function showResult() {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
    <div class="result">
      <h2>Quiz Completed!</h2>
      <p>Your score is: ${score}/${questions.length}</p>
      <button onclick="restartQuiz()">Play Again</button>
    </div>
  `;
  document.getElementById('submit-btn').style.display = 'none'; // Hide the submit button after quiz completion
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion(); // Display the first question again
  document.getElementById('submit-btn').style.display = 'block'; // Show the submit button again
}

window.onload = displayQuestion; // Display the first question when the page loads
