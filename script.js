const buttonLogin = document.getElementById('login-button');
const inputEmail = document.getElementById('email-login');
const inputPassword = document.getElementById('input-password');
const login = 'tryber@teste.com';
const password = '123456';
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

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
