// Get the form elements
const donationForm = document.getElementById('donation-form');
const amountInput = document.getElementById('amount');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

// Add a submit event listener to the form
donationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form values
  const amount = amountInput.value;
  const name = nameInput.value;
  const email = emailInput.value;

  // Check if the name contains at least one capital letter
  if (!/[A-Z]/.test(name)) {
    // Display an error message
    alert('يجب ان يحتوي اسم الداعم على حرف كبير واحد على الاقل');
    return;
  }

  // Add your donation logic here
  console.log(`Donation of ${amount} from ${name} (${email})`);

  // Display a thank you message
  alert('ابطالنا شكرا لك لمساعدتنا');
});