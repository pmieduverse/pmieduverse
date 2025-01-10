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

function selectAnswer(answer) {
  const selectedOption = document.querySelectorAll('.option');
  selectedOption.forEach(option => {
    option.style.backgroundColor = option.textContent === answer ? '#ff00ff' : '';
  });
}

document.getElementById('submit-btn').addEventListener('click', () => {
  const selectedOption = document.querySelector('.option[style*="background-color"]');
  if (selectedOption) {
    alert(`You selected: ${selectedOption.textContent}`);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      alert('Quiz Completed!');
    }
  } else {
    alert("Please select an option!");
  }
});

window.onload = displayQuestion;
