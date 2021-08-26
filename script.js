const buttonLogin = document.getElementById('login-button');
const inputEmail = document.getElementById('email-login');
const inputPassword = document.getElementById('input-password');
const login = 'tryber@teste.com';
const password = '123456';
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function verifyLogin() {
  if (inputEmail.value === login && inputPassword.value === password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verifyLogin);

function verifySumbit() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', verifySumbit);

function decrement() {
  const startCount = 500;
  const currentValue = startCount - textArea.value.length;
  counter.innerText = currentValue;
}

textArea.addEventListener('keyup', decrement);

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('input[name="family"]');
const checkBox = document.querySelectorAll('.content');
const rate = document.querySelectorAll('input[name="rate"]');
const text = document.querySelector('textarea');
const forms = document.getElementById('evaluation-form');
const main = document.querySelector('main');

function getName() {
  const fullName = `Nome: ${firstName.value} ${lastName.value}`;
  return fullName;
}

function getEmail() {
  const emailForm = `Email: ${email.value}`;
  return emailForm;
}

function getHouse() {
  const houseForm = `Casa: ${house.value}`;
  return houseForm;
}

function getFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      const familyForm = `Família: ${family[index].value}`;
      return familyForm;
    }
  }
}

function getCheckBox() {
  let checkBoxForm = 'Matérias:';
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      checkBoxForm += ' ';
      checkBoxForm += `${checkBox[index].value}`;
    }
  }
  return checkBoxForm;
}

function getRate() {
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      const rateForm = `Avaliação: ${rate[index].value}`;
      return rateForm;
    }
  }
}

function getText() {
  const textForm = `<p>Observações: ${text.value}</p>`;
  return textForm;
}

function createDiv() {
  const allFunctions = [getName(),
    getEmail(),
    getHouse(),
    getFamily(),
    getCheckBox(),
    getRate(),
    getText()];

  const div = document.createElement('div');
  for (let index = 0; allFunctions.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = allFunctions[index];
    div.appendChild(paragraph);
  }
  forms.innerHTML = '';
  forms.appendChild(div);
}
