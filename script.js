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

window.onload = selectHouse();
