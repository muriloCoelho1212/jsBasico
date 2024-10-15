const cepForm = document.querySelector('.cep-form')
const addressForm = document.querySelector('.address-form')

cepForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  searchCep()
})

addressForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  searchAddress()
})

function searchCep() {
  const cep = document.getElementById('cep').value;

  if (cep.length !== 8) {
    alert('CEP inválido');
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url, {
    method: 'GET',
  }).then(response => response.json()).then(data => {
    renderCepData(data)
  })
}

function searchAddress() {
  const address = {
    logradouro: document.getElementById('logradouro').value,
    cidade: document.getElementById('cidade').value,
    uf: document.getElementById('uf').value,
  }

  if (!address.logradouro || !address.cidade || !address.uf) {
    alert('Preencha todos os campos');
    return;
  }

  const cidade = address.cidade.replace(' ', '%20');
  const logradouro = address.logradouro.replace(' ', '+');

  const url = `https://viacep.com.br/ws/${address.uf}/${cidade}/${logradouro}/json/`;

  console.log(url)

  fetch(url, {
    method: 'GET',
  }).then(response => response.json()).then(data => {
    renderAddressData(data)
    console.log(data)
  })
}

function renderCepData(data) {
  const { logradouro, bairro, localidade, estado } = data;

  document.getElementById('result-logradouro').innerHTML = logradouro;
  document.getElementById('result-bairro').innerHTML = bairro;
  document.getElementById('result-cidade').innerHTML = localidade;
  document.getElementById('result-estado').innerHTML = estado;
}

function renderAddressData(data) {
  const ul = document.querySelector('.address-list');

  for (const address of data) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(document.createElement('p').innerHTML = address.cep));
    li.appendChild(document.createTextNode(document.createElement('p').innerHTML = address.logradouro));
    li.appendChild(document.createTextNode(document.createElement('p').innerHTML = address.bairro));
    li.appendChild(document.createTextNode(document.createElement('p').innerHTML = address.localidade));
    li.appendChild(document.createTextNode(document.createElement('p').innerHTML = address.uf));
    ul.appendChild(li);
  }
}