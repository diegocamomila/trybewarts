const buttonLogin = document.getElementById('login-button');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const login = 'tryber@teste.com';
const password = '123456';

function verifyLogin() {
  if (inputEmail.value === login && inputPassword.value === password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', verifyLogin);
