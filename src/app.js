import makeServer from './server';
import defineBButton from './components/b-button';
import defineBText from './components/b-text';
import defineBTtitle from './components/b-title';
import defineBAvatar from './components/b-avatar';
import defineBLink from './components/b-link';
import defineBCard from './components/b-card';
import defineBList from './components/b-list';
import defineCardProfile from './features/card-profile';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function app() {
  defineBButton();
  defineBText();
  defineBTtitle();
  defineBAvatar();
  defineBLink();
  defineBCard();
  defineBList();
  defineCardProfile();
}

export default app();
