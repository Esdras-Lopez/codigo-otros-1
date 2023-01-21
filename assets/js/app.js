const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
var error;



async function displayUser(username) {

  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`).then(res =>res.json());
  var data = JSON.stringify(response);
  console.log(data);
  $n.textContent = response.name;
  $b.textContent = response.blog;
  $l.textContent = response.location;
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  error = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);