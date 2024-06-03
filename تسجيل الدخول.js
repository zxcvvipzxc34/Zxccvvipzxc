// Get the username and password input fields and the submit button
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// Add a click event listener to the submit button
submitButton.addEventListener('click', (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the values of the username and password input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the username is at least 8 characters long
  if (username.length < 8) {
    // Display an error message using SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'يجب ان يكون اسم المستخدم اكثر من 8 حروف',

    });
    return;
  }

  // Check if the password contains at least one capital letter
  if (!/[A-Z]/.test(password)) {
    // Display an error message using SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'كلمه المرور تتطلب حرف كبير واحد على الاقل',

    });
    return;
  }

  // If both conditions are met, log a success message to the console
  // (replace this with your own login logic)
  Swal.fire({
    icon: 'uccess',
    title: 'تم تسجيل الدخول!',
    text: 'You have successfully logged in!'
  });
});