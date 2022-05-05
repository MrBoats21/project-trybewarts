const email = document.querySelector('#email');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const checkbox = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

function hello() {
  const valorEmail = email.value;
  const valorSenha = password.value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

login.addEventListener('click', hello);

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
