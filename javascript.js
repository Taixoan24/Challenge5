// const nameInput = document.getElementById('name');
// const nameErrorMessage = document.getElementById('name-error-message');

// const numberInput = document.getElementById('number');
// const numberErrorMessage = document.getElementById('number-error-message');

// const monthInput = document.getElementById('MM');
// const yearInput = document.getElementById('YY');
// const dateErrorMessage = document.getElementById('date-error-message');

// const cvcInput = document.getElementById('CVC');
// const cvcErrorMessage = document.getElementById('cvc-error-message');

// const submitBtn = document.getElementById('submit-btn');

// submitBtn.addEventListener('click', function(event) {
//   event.preventDefault();

//   if (nameInput.value.trim() === '') {
//     nameErrorMessage.innerText = 'Please enter the cardholder name';
//     nameErrorMessage.style.color = 'red';
//     nameInput.classList.add('error');
//   } else {
//     nameErrorMessage.innerText = '';
//     nameInput.classList.remove('error');
//   }

//   if (numberInput.value.trim() === '') {
//     numberErrorMessage.innerText = 'Please enter the card number';
//     numberErrorMessage.style.color = 'red';
//     numberInput.classList.add('error');
//   } else {
//     numberErrorMessage.innerText = '';
//     numberInput.classList.remove('error');
//   }

//   if (monthInput.value.trim() === '' || yearInput.value.trim() === '') {
//     dateErrorMessage.innerText = 'Please enter the expiration date';
//     dateErrorMessage.style.color = 'red';
//     monthInput.classList.add('error');
//     yearInput.classList.add('error');
//   } else {
//     dateErrorMessage.innerText = '';
//     monthInput.classList.remove('error');
//     yearInput.classList.remove('error');
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





const $form = document.querySelector("#card_form");
const $buttonContinue = document.querySelector("#submit-btn");
const $cardNameInput = document.querySelector("#name");
const $cardNumberInput = document.querySelector("#number");
const $cardMonthInput = document.querySelector("#MM");
const $cardYearInput = document.querySelector("#YY");
const $cardCvcInput = document.querySelector("#CVC");

function validateYear() {
  const YY = YY.value;
  const MM = MM.value;
  const CVC = CVC.value;
}
function validateName(userName) {
  if (userName.length === 0) {
    return "This field cannot be blank";
  } else if (userName.length > 50) {
    return "This field cannot contain more than 50 characters";
  } else if (!/^[ a-z]+$/i.test(userName)) {
    return "This field can only contain letters";
  } else {
    return "";
  }
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length === 0) {
    return "This field cannot be blank";
  } else if (!/([0-9]{4}\s?){4}/.test(cardNumber)) {
    return "Invalid credit card number";
  } else {
    return "";
  }
}

function validateYear(YY) {
  if (YY.length === 0) {
    return "This field cannot be blank";
  } else if (!/^[0-9][0-9]$/.test(YY)) {
    return "Invalid year format";
  } else {
    return "";
  }
}

function validateMonth(MM) {
  if (MM.length === 0) {
    return "This field cannot be blank";
  } else if (!/^0[0-9]|1[0-2]$/.test(MM)) {
    return "Invalid month format";
  } else {
    return "";
  }
}

function validateCVC(CVC) {
  if (CVC.length === 0) {
    return "This field cannot be blank";
  } else if (!/^[0-9][0-9][0-9]$/.test(CVC)) {
    return "Invalid CVC format";
  } else {
    return "";
  }
}

function validateForm(event) {
  const $submittedStatus = document.querySelector(".submitted-status");
  const userName = $form.name.value;
  const cardNumber = $form["number"].value;
  const YY = $form["YY"].value;
  const MM = $form["MM"].value;
  const CVC = $form["CVC"].value;

  const errorName = validateName(userName);
  const errorCardNumber = validateCardNumber(cardNumber);
  const errorYear = validateYear(YY);
  const errorMonth = validateMonth(MM);
  const errorCVC = validateCVC(CVC);

  const errors = {
    name: errorName,
    "number": errorCardNumber,
    YY: errorYear,
    MM: errorMonth,
    CVC: errorCVC,
  };

  const numberOfErrors = manageErrors(errors);
  if (numberOfErrors === 0) {
    $form.classList.add("occult");
    $submittedStatus.classList.remove("occult");
  }

  event.preventDefault();
}

function manageErrors(errors){
  const keys = Object.keys(errors);
  let numberOfErrors = 0;
  const $nameErrorText = document.querySelector("#name-error-message");
  const $cardNumberErrorText = document.querySelector("#number-error-message");
  const $MMerrorText = document.querySelector("#date-error-message");
  const $YYerrorText = document.querySelector("#date-error-message");
  const $cvcErrorText = document.querySelector("#cvc-error-message");

  keys.forEach(function (key) {
    const error = errors[key];

    if (error) {
      numberOfErrors++;
      $form[key].className = "error";

      if (key === "name") {
        $nameErrorText.textContent = error;
      } else if (key === "number") {
        $cardNumberErrorText.textContent = error;
      } else if (key === "YY") {
        $YYerrorText.textContent = error;
      } else if (key === "MM") {
        $MMerrorText.textContent = error;
      } else if (key === "CVC") {
        $cvcErrorText.textContent = error;
      }
    } else {
      $form[key].className = "";
    }
  });

  return numberOfErrors;
}

function writeTextCard() {
  const nameFrontCard = document.querySelector(".name-input");
  const numberFrontCard = document.querySelector(".number-input");
  const monthFrontCard = document.querySelector(".month-input");
  const yearFrontCard = document.querySelector(".year-input");
  const numberBackCard = document.querySelector(".cvc-input");

  $cardNameInput.addEventListener("input", () => {
    nameFrontCard.innerText = $cardNameInput.value;

    if ($cardNameInput.value === "") {
      nameFrontCard.innerText = "JANE APPLESEED";
    }
  });

  $cardNumberInput.addEventListener("input", () => {
    numberFrontCard.innerText = $cardNumberInput.value;

    if ($cardNumberInput.value === "") {
      numberFrontCard.innerText = "0000 0000 0000 0000";
    }
  });

  $cardNumberInput.addEventListener("keyup", function(e){
    e.target.value = e.target.value.replace(/[\s]/g, "").replace(/(.{4})/g, "$1 ").trim()
  });

  $cardMonthInput.addEventListener("input", () => {
    monthFrontCard.innerText = $cardMonthInput.value;

    if ($cardMonthInput.value === "") {
      monthFrontCard.innerText = "00";
    }
  });

  $cardYearInput.addEventListener("input", () => {
    yearFrontCard.innerText = $cardYearInput.value;

    if ($cardYearInput.value === "") {
      yearFrontCard.innerText = "00";
    }
  });

  $cardCvcInput.addEventListener("keyup", () => {
    numberBackCard.innerText = $cardCvcInput.value;

    if ($cardCvcInput.value === "") {
      numberBackCard.innerText = "000";
    }
  });
}

writeTextCard();

$form.addEventListener("submit", validateForm);

$buttonContinue.onclick = function() {
  location.reload();
}



