const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('name');/* las variables teninan un $ al inicio  */
const b = document.querySelector('#blog');
const l = document.querySelector('.location');

async function displayUser(username) { //Falta la palabra reservada async
  n.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();//Faltaba esta const (await response.json();)
    console.log(data);
    n.textContent = '${data.name}';
    b.textContent = '${data.blog}';
    l.textContent = '${data.location}';
  }catch (err){
    handleError(err); //Faltaba la alternativa si no se cumplia la promesa 
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);