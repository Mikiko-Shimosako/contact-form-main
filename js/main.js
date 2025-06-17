const contactForm = document.querySelector('.contact-form');

const fisrstNameInput = document.getElementById('fisrst-name');
const lastNameInput = document.getElementById('last-name');
const messageInput = document.getElementById('message');

const emailInput = document.getElementById('email');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValidForm = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateInput(inputElement) {
    const formError = inputElement.nextElementSibling;
    if (inputElement.value.trim() === "") {
      inputElement.classList.add('error');
      formError.style.display = 'block';
      return false;
    } else {
      inputElement.classList.remove('error');
      formError.style.display = 'none';
      return true;
    }
  }

  const inputs = [fisrstNameInput, lastNameInput, messageInput, emailInput];

  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isValidForm = false;
    }

    if (input === emailInput) {
      const invalidEmailError = emailInput.parentElement.querySelector('[data-type="invalid-email"]');

      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        invalidEmailError.style.display = 'block';
        isValidForm = false;
      } else {
        invalidEmailError.style.display = 'none';
      }
    }
  });

  const selectedRadio = document.querySelector('input[name="query-type"]:checked');
  const radioField = document.querySelector('.form-radio-group').parentElement;
  const radioErrorMessage = radioField.querySelector('.form-error');

  if (selectedRadio === null) {
    radioErrorMessage.style.display = 'block';
    isValidForm = false;
  } else {
    radioErrorMessage.style.display = 'none';
  }

  const consentCheckbox = document.getElementById('consent');
  const formCheckboxField = document.querySelector('.form-checkbox-field');
  const checkboxErrorMessage = formCheckboxField.querySelector('.form-error');

  if (!consentCheckbox.checked) {
    checkboxErrorMessage.style.display = 'block';
  } else {
    checkboxErrorMessage.style.display = 'none';
  }

  if (isValidForm) {
    // 成功メッセージの表示
    document.querySelector('.form-success-message').style.display = 'block';
    // container に submit クラス追加
    document.querySelector('.container').classList.add('submit');
  }
});