import makeServer from './server';

makeServer();

function app() {
  fetch('https://api.github.com/users/vitebo/repos')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
  return 'application initialized';
}

export default app();
