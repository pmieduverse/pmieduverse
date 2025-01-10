function checkAnswers() {
  let score = 0;
  let totalQuestions = 10;

  // Check answers for each question
  if (document.querySelector('input[name="q1"]:checked')?.value === 'b') {
    score++;
  }
  if (document.querySelector('input[name="q2"]:checked')?.value === 'a') {
    score++;
  }
  // Add more checks for the other questions...

  // Calculate the result
  let result = `You got ${score} out of ${totalQuestions} correct!`;
  document.getElementById("result").innerText = result;
}
