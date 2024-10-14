const form = document.querySelector('.form')

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  searchCep()
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
    renderData(data)
  })
}

function renderData(data) {
  const { logradouro, bairro, localidade, estado } = data;

  document.getElementById('logradouro').innerHTML = logradouro;
  document.getElementById('bairro').innerHTML = bairro;
  document.getElementById('cidade').innerHTML = localidade;
  document.getElementById('estado').innerHTML = estado;
}