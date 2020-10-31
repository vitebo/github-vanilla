import makeServer from './server';
import defineBButton from './components/b-button';
import defineBText from './components/b-text';
import defineBTtitle from './components/b-title';
import defineBAvatar from './components/b-avatar';
import defineBLink from './components/b-link';

makeServer();
defineBButton();
defineBText();
defineBTtitle();
defineBAvatar();
defineBLink();

function app() {
  fetch('https://api.github.com/users/vitebo/repos')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
  return 'application initialized';
}

export default app();
