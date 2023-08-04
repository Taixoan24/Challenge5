const name_input = document.querySelector('.name-input')
const number_input = document.querySelector('.number-input')
const month_input = document.querySelector('.month-input')
const year_input = document.querySelector('.year-input')
const cvc_input = document.querySelector('.cvc-input')

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

    // Reset error messages
    document.querySelector('.name-error').style.display = 'none';
    document.querySelector('.number-error').style.display = 'none';
    document.querySelector('.month-error-message').style.display = 'none';
    document.querySelector('.year-error-message').style.display = 'none';
    document.querySelector('.cvc-error').style.display = 'none';

    // Check name input
    if (name_input.value === '') {
        document.querySelector('.name-error').style.display = 'initial';
    }
    else {
      document.querySelector('.name-error').style.display = 'none';
    }
    // Check numberber input
    if (number_input.value === '' || number_input.value.length < 16) {
        document.querySelector('.number-error').style.display = 'initial';
    } else {
        // Check if the card numberber is numbereric and has 16 digits
        const cardnumberber = number_input.value.replace(/\s+/g, ''); // Remove any spaces
        if (isNaN(cardnumberber) || cardnumberber.length !== 16) {
            document.querySelector('.number-error').style.display = 'initial';
        }
    }

    // Check month input
    const inputMonth = parseInt(month_input.value);
    if (month_input.value === '' || isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
        document.querySelector('.month-error-message').style.display = 'initial';
    } else {
        document.querySelector('.month-error-message').style.display = 'none';
    }

    const inputYear = parseInt(year_input.value);
    if (year_input.value === '' || isNaN(inputYear) || inputYear < 1) {
        document.querySelector('.year-error-message').style.display = 'initial';
    } else {
        if (document.querySelector('.year-error-message').style.display !== 'initial') {
            document.querySelector('.year-error-message').style.display = 'none';
        }
    }

    // Check CVC input
    if (cvc_input.value === '' || cvc_input.value < 1) {
        document.querySelector('.cvc-error').style.display = 'initial';
    } else if (cvc_input.value.length < 3) {
        document.querySelector('.cvc-error').style.display = 'initial';
    }

    // Check if all inputs are valid, if yes, hide the form and show the completion message
    if (
        name_input.value !== '' &&
        number_input.value.length === 16 &&
        month_input.value !== '' &&
        month_input.value !== '00' &&
        year_input.value !== '' &&
        year_input.value !== '00' &&
        cvc_input.value.length === 3 &&
        cvc_input.value !== '000' &&
        inputMonth >= 1 &&
        inputMonth <= 12 &&
        inputYear > 0
    ) {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.completion').style.display = 'block';

    }
}

name_input.addEventListener('keypress', function (ev) {
    const charCode = ev.charCode;
    if (charCode >= 48 && charCode <= 57) {
        ev.preventDefault();
    }
    const invalidCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?', '`', '~'];
    if (invalidCharacters.includes(ev.key)) {
        ev.preventDefault();
    }
});

cvc_input.addEventListener('input', function (ev) {
    const value = cvc_input.value;
    const numericValue = parseInt(value, 10);

    if (isNaN(numericValue) || numericValue <= 0) {
        document.querySelector('.cvc-error').style.display = 'initial';
    } else {
        document.querySelector('.cvc-error').style.display = 'none';
    }
});

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
    document.querySelector('.completion').style.display = 'none'

    number_input.value = ''
    name_input.value = ''
    month_input.value = ''
    year_input.value = ''
    cvc_input.value = ''

    document.querySelector('.name-error').style.display = 'flex';
    document.querySelector('.number-error').style.display = 'none';
    document.querySelector('.month-error-message').style.display = 'none';
    document.querySelector('.year-error-message').style.display = 'none';
    document.querySelector('.cvc-error').style.display = 'none';
}