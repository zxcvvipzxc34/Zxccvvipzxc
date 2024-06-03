// Select all elements with the class "question" and add a click event listener to each one
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Get the next sibling element (which should be the answer)
    const answer = question.nextElementSibling;
    // Toggle the display style of the answer between "block" and "none"
    answer.style.display = answer.style.display === 'block'? 'none' : 'block';
  });
});

// Select the form with the id "question-form" and add a submit event listener to it
const questionForm = document.getElementById('question-form');
questionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the value of the input with the id "question-input"
  const questionInput = document.getElementById('question-input');
  // Create new "question" and "answer" elements
  const newQuestion = document.createElement('div');
  newQuestion.classList.add('question');
  newQuestion.textContent = questionInput.value;
  const newAnswer = document.createElement('div');
  newAnswer.classList.add('answer');
  newAnswer.textContent = 'Your answer here...';
  // Insert the new "question" and "answer" elements before the "question-form" element in the FAQ section
  const faq = document.getElementById('faq');
  faq.insertBefore(newQuestion, questionForm);
  faq.insertBefore(newAnswer, questionForm);
  // Reset the value of the input element
  questionInput.value = '';
});