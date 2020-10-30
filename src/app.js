import makeServer from './server';
import defineBButton from './components/b-button';
import defineBText from './components/b-text';
import defineBTtitle from './components/b-title';

makeServer();
defineBButton();
defineBText();
defineBTtitle();

function app() {
  fetch('https://api.github.com/users/vitebo/repos')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
  return 'application initialized';
}

export default app();
