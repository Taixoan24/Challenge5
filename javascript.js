
const nameInput = document.getElementById('name');
const nameErrorMessage = document.getElementById('name-error-message');

const numberInput = document.getElementById('number');
const numberErrorMessage = document.getElementById('number-error-message');

const monthInput = document.getElementById('MM');
const monthErrorMessage = document.getElementById('month-error-message');

const yearInput = document.getElementById('YY');
const yearErrorMessage = document.getElementById('year-error-message');

const cvcInput = document.getElementById('CVC');
const cvcErrorMessage = document.getElementById('cvc-error-message');

const submitBtn = document.getElementById('submit-btn');

// submitBtn.addEventListener('click', function (event) {
//   event.preventDefault();

//   if (nameInput.value.trim() === '') {
//     nameErrorMessage.innerText = 'Please enter the cardholder name';
//     nameErrorMessage.style.color = 'red';
//     nameInput.classList.add('error');
//   } else {
//     nameErrorMessage.innerText = '';
//     nameInput.classList.remove('error');
//   }

//   if (number_input.value.trim() === '') {
//     numberErrorMessage.innerText = 'Please enter the card number';
//     numberErrorMessage.style.color = 'red';
//     numberInput.classList.add('error');
//   } else {
//     numberErrorMessage.innerText = '';
//     numberInput.classList.remove('error');
//   }
//   const inputMonth = parseInt(monthInput.value.trim(), 10);
//   if (month_input.value === '' || inputMonth < 1 || inputMonth > 12) {
//     monthErrorMessage.innerText = 'month format';
//     monthErrorMessage.style.color = 'red';
//     month_input.classList.add('error');

//   } else {
//     monthErrorMessage.innerText = '';
//     month_input.classList.remove('error');

//   }
//   const inputYear = parseInt(yearInput.value.trim(), 10);
//   if (year_input.value === '' || inputYear <= 0) {
//     yearErrorMessage.innerText = 'year format';
//     yearErrorMessage.style.color = 'red';
//     year_input.classList.add('error');

//   } else {
//     console.log("true")
//     yearErrorMessage.innerText = '';
//     year_input.classList.remove('error');
//   }

//   if (cvcInput.value.trim() === '') {
//     cvcErrorMessage.innerText = 'Please enter the CVC code';
//     cvcErrorMessage.style.color = 'red';
//     cvcInput.classList.add('error');
//   } else {
//     cvcErrorMessage.innerText = '';
//     cvcInput.classList.remove('error');
//   }
// });
var name_input = document.querySelector('.name-input')
var number_input = document.querySelector('.number-input')
var month_input = document.querySelector('.month-input')
var year_input = document.querySelector('.year-input')
var cvc_input = document.querySelector('.cvc-input')

name_input.addEventListener('input', input_change)
number_input.addEventListener('input', input_change)
month_input.addEventListener('input', input_change)
year_input.addEventListener('input', input_change)
cvc_input.addEventListener('input', input_change)

name_input.addEventListener('keypress', ev => {
  if (ev.key === 'Enter') { number_input.focus() }
})
number_input.addEventListener('keypress', inputKeyPress)
month_input.addEventListener('keypress', inputKeyPress)
year_input.addEventListener('keypress', inputKeyPress)
cvc_input.addEventListener('keypress', inputKeyPress)


function confirmBtnClick(ev) {
  // Reset error styles
  name_input.style.borderColor = '#6A5ACD';
  number_input.style.borderColor = '#6A5ACD';
  month_input.style.borderColor = '#6A5ACD';
  year_input.style.borderColor = '#6A5ACD';
  cvc_input.style.borderColor = '#6A5ACD';

  // Reset error messages
  document.getElementById('name-error-message').style.display = 'none';
  document.querySelector('.number-error').style.display = 'none';
  document.querySelector('.month-error-message').style.display = 'none';
  document.querySelector('.year-error-message').style.display = 'none';
  document.querySelector('.cvc-error').style.display = 'none';

  // Check name field
  if (name_input.value === '') {
    nameErrorMessage.innerText = 'name format';
    document.querySelector('.name-error').style.display = 'flex';
    name_input.style.borderColor = 'hsl(0, 100%, 66%)';
    nameErrorMessage.style.color = 'red';
  }
  else{
    document.querySelector('.name-error').style.display = 'none';
  }

  // Check number field
  // if (number_input.value === '' || number_input.value.length < 16) {
  //   document.querySelector('.number-error-message').style.display = 'flex';
  //   number_input.style.borderColor = 'hsl(0, 100%, 66%)';
  //   monthErrorMessage.innerText = 'month format';
  // } else {
  //   return
  //   // Check if the card number is numeric and has 16 digits
  //   const cardNumber = number_input.value.replace(/\s+/g, ''); // Remove any spaces
  //   if (isNaN(cardNumber) || cardNumber.length !== 16) {
  //     document.querySelector('.number-error-message').style.display = 'flex';
  //     number_input.style.borderColor = 'hsl(0, 100%, 66%)';
  //     numberErrorMessage.style.color = 'red';
  //     numberErrorMessage.innerText = 'Card format';
  //   }
  // }


// Mentor kèm
  if (number_input.value === '') {
    document.querySelector('.number-error').style.display = 'flex';
    number_input.style.borderColor = 'hsl(0, 100%, 66%)';
    nameErrorMessage.style.color = 'red';
    numberErrorMessage.innerText = 'Card format';
  } else {
    document.querySelector('.name-error').style.display = 'none';
  }

  if (month_input.value === '') {
    document.querySelector('.month-error-message').style.display = 'flex';
    month_input.style.borderColor = 'hsl(0, 100%, 66%)';
    monthErrorMessage.style.color = 'red';
    monthErrorMessage.innerText = 'Card format';
  } else {
    document.querySelector('.name-error').style.display = 'none';
  }
  if (cvc_input.value === '') {
    document.querySelector('.month-error-message').style.display = 'flex';
    cvc_input.style.borderColor = 'hsl(0, 100%, 66%)';
    cvcErrorMessage.style.color = 'red';
    cvcErrorMessage.innerText = 'Card format';
  } else {
    document.querySelector('.name-error').style.display = 'none';
  }

  // Check month field
  // const inputMonth = parseInt(monthInput.value.trim(), 10);
  // if (month_input.value === '' || inputMonth < 1 || inputMonth > 12) {
  //   document.querySelector('.month-error-message').style.display = 'flex';
  //   month_input.style.borderColor = 'hsl(0, 100%, 66%)';
  //   nameErrorMessage.style.color = 'red';
  //   yearErrorMessage.innerText = 'month format';
  // } else {
  //   return
  // }

  // Check year field

  if (year_input.value === '' || year_input.value === 0) {
    document.querySelector('.year-error-message').style.display = 'flex';
    year_input.style.borderColor = 'hsl(0, 100%, 66%)';
    nameErrorMessage.style.color = 'red';
    yearErrorMessage.innerText = 'year format';
  } else {
    // Check if the year is valid
    return
  }

  // Check CVC field
  if (cvc_input.value === '' || cvc_input.value < 1) {
    document.querySelector('.cvc-error').style.display = 'flex';
    cvc_input.style.borderColor = 'hsl(0, 100%, 66%)';
  } else if (cvc_input.value.length < 3) {
    document.querySelector('.cvc-error').style.display = 'flex';
    cvc_input.style.borderColor = 'hsl(0, 100%, 66%)';
  }

  // Check if all fields are valid, if yes, hide the form and show the completion message
  if (
    name_input.value !== '' &&
    number_input.value.length === 16 &&
    month_input.value !== '' &&
    month_input.value !== '00' &&
    year_input.value !== '' &&
    year_input.value !== '00' &&
    cvc_input.value.length === 3 &&
    cvc_input.value !== '000'
  ) {
    document.querySelector('.form').style.display = 'none';
    document.querySelector('.completion-message').style.display = 'flex';
  }
}
function input_change(ev) {
  if (ev.currentTarget === name_input) {
    document.querySelector('.card_text').innerHTML = name_input.value
  }
  else if (ev.currentTarget === number_input) {
    number_input_process_value()
  }
  else if (ev.currentTarget === month_input) {
    document.querySelector('.YY').innerHTML = month_input.value + '/' + year_input.value
  }
  else if (ev.currentTarget === year_input) {
    document.querySelector('.YY').innerHTML = month_input.value + '/' + year_input.value
  }
  else if (ev.currentTarget === cvc_input) {
    document.querySelector('.cvc').innerHTML = cvc_input.value
  }
}
function inputKeyPress(ev) {
  if (ev.key === '0' || ev.key === '1' || ev.key === '2' || ev.key === '3' || ev.key === '4' ||
    ev.key === '5' || ev.key === '6' || ev.key === '7' || ev.key === '8' || ev.key === '9' || ev.key === '.' || ev.key === 'Enter') {

    if (ev.currentTarget === number_input && number_input.value.length === 16) {
      ev.preventDefault()
    }

    if (ev.currentTarget === month_input && month_input.value.length === 2) {
      ev.preventDefault()
    }

    if (ev.currentTarget === year_input && year_input.value.length === 2) {
      ev.preventDefault()
    }

    if (ev.currentTarget === cvc_input && cvc_input.value.length === 3) {
      ev.preventDefault()
    }

    if (ev.currentTarget === number_input && ev.key === 'Enter') {
      month_input.focus()
    }
    if (ev.currentTarget === month_input && ev.key === 'Enter') {
      year_input.focus()
    }
    if (ev.currentTarget === year_input && ev.key === 'Enter') {
      cvc_input.focus()
    }
    if (ev.currentTarget === cvc_input && ev.key === 'Enter') {
      confirmBtnClick()
    }

  }
  else {
    ev.preventDefault()
  }
}
function number_input_process_value(ev) {
  var value = number_input.value
  var newValue = value

  if (value.length > 4 && value.length <= 8) {
    newValue = value.slice(0, 4) + ' ' + value.slice(4)
  }
  else if (value.length > 8 && value.length <= 12) {
    newValue = value.slice(0, 4) + ' ' + value.slice(4, 8) + ' ' + value.slice(8)
  }

  else if (value.length > 12 && value.length <= 16) {
    newValue = value.slice(0, 4) + ' ' + value.slice(4, 8) + ' ' + value.slice(8, 12) + ' ' + value.slice(12)
  }
  document.querySelector('.card_number').innerHTML = newValue
}


function continueBtn() {
  location.reload();
  document.querySelector('.completion-message').style.display = 'none'
  document.querySelector('.form').style.display = 'flex'

  number_input.value = ''
  name_input.value = ''
  month_input.value = ''
  year_input.value = ''
  cvc_input.value = ''

  number_input.style.borderColor = '#6A5ACD';
  name_input.style.borderColor = '#6A5ACD';
  month_input.style.borderColor = '#6A5ACD';
  year_input.style.borderColor = '#6A5ACD';
  cvc_input.style.borderColor = '#6A5ACD';

  document.querySelector('.name-error').style.display = 'none';
  document.querySelector('.number-error').style.display = 'none';
  document.querySelector('.month-error-message').style.display = 'none';
  document.querySelector('.year-error-message').style.display = 'none';
  document.querySelector('.cvc-error').style.display = 'none';
}


