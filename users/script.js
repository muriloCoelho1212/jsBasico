function searchUser() {
  const url = `https://randomuser.me/api/`

  fetch(url, {
    method: 'GET',
  }).then(response => response.json()).then(data => {
    console.log(data)
    renderUserData(data)
  })
}

function renderUserData(data) {
  const { name, picture, email, phone, location, registered } = data.results[0];

  const userName = document.querySelector('.user-name');
  const userEmail = document.querySelector('.user-email');
  const userPhone = document.querySelector('.user-phone');
  const userLocation = document.querySelector('.user-location');
  const userRegistered = document.querySelector('.user-registered');
  const userImg = document.querySelector('.user-img');

  const registeredDate = new Date(registered.date).toLocaleDateString("pt-BR", { dateStyle: 'long' });

  userName.innerHTML = `Nome: ${name.first} ${name.last}`;
  userEmail.innerHTML = `Email: ${email}`;
  userPhone.innerHTML = `Telefone: ${phone}`;
  userLocation.innerHTML = `Localização: ${location.city}, ${location.state}, ${location.country}`;
  userRegistered.innerHTML = `Registro: ${registeredDate}`;
  userImg.innerHTML = `<img src="${picture.large}" alt="User picture" class="img">`
}
