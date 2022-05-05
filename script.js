const email = document.querySelector('#email');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const checkbox = document.querySelector("#agreement")
const submit = document.querySelector("#submit-btn")

login.addEventListener('click', hello);

function hello() {
  const valorEmail = email.value;
  const valorSenha = password.value;
  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

if (checkbox.checked) {
    submit.setAttribute("disabled")
}

function selectHouse() {
  const selectOptions = [
    { text: 'Gitnória', value: 'Gitnória', id: 'gitnoria-house', innerHTML: 'Gitnória' },
    { text: 'Reactpuff', value: 'Reactpuff', id: 'reactpuff-house', innerHTML: 'Reactpuff' },
    { text: 'Corvinode', value: 'Corvinode', id: 'corvinode-house', innerHTML: 'Corvinode' },
    { text: 'Pytherina', value: 'Pytherina', id: 'pytherina-house', innerHTML: 'Pytherina' },
  ];
  const select = document.getElementById('house');
  for (let index = 0; index < selectOptions.length; index += 1) {
    const option = document.createElement('option');
    option.text = selectOptions[index].text;
    option.value = selectOptions[index].value;
    option.id = selectOptions[index].id;
    option.innerHTML = selectOptions[index].innerHTML;
    if (index === 0) {
      option.selected = 'true';
    }
    select.appendChild(option);
  }
}

function selectRate() {
  const arrayRate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rateRadio = document.querySelector('#rate-box');

  for (let index = 0; index < arrayRate.length; index += 1) {
    const divRate = document.createElement('div');
    const inputRate = document.createElement('input');
    inputRate.type = 'radio';
    inputRate.name = 'rate';
    inputRate.id = `ratio-${arrayRate[index]}`;
    inputRate.value = arrayRate[index];

    const label = document.createElement('label');
    label.htmlFor = arrayRate[index];
    label.innerHTML = arrayRate[index];

    if (index === 0) {
      inputRate.checked = true;
    }
    rateRadio.appendChild(divRate);
    divRate.appendChild(inputRate);
    divRate.appendChild(label);
  }
}

window.onload = selectHouse();
window.onload = selectRate();
