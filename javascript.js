const nameInput = document.getElementById('name-input');
const nameErrorMessage = document.getElementById('name-error-message');

const numberInput = document.getElementById('number-input');
const numberErrorMessage = document.getElementById('number-error-message');

const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const dateErrorMessage = document.getElementById('date-error-message');

const cvcInput = document.getElementById('cvc-input');
const cvcErrorMessage = document.getElementById('cvc-error-message');

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    nameErrorMessage.innerText = 'Please enter the cardholder name';
    nameErrorMessage.style.color = 'red';
    nameInput.classList.add('error');
  } else {
    nameErrorMessage.innerText = '';
    nameInput.classList.remove('error');
  }

  if (numberInput.value.trim() === '') {
    numberErrorMessage.innerText = 'Please enter the card number';
    numberErrorMessage.style.color = 'red';
    numberInput.classList.add('error');
  } else {
    numberErrorMessage.innerText = '';
    numberInput.classList.remove('error');
  }

  if (monthInput.value.trim() === '' || yearInput.value.trim() === '') {
    dateErrorMessage.innerText = 'Please enter the expiration date';
    dateErrorMessage.style.color = 'red';
    monthInput.classList.add('error');
    yearInput.classList.add('error');
  } else {
    dateErrorMessage.innerText = '';
    monthInput.classList.remove('error');
    yearInput.classList.remove('error');
  }

  if (cvcInput.value.trim() === '') {
    cvcErrorMessage.innerText = 'Please enter the CVC code';
    cvcErrorMessage.style.color = 'red';
    cvcInput.classList.add('error');
  } else {
    cvcErrorMessage.innerText = '';
    cvcInput.classList.remove('error');
  }
});