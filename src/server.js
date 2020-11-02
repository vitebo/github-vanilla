import { createServer } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    routes() {
      this.urlPrefix = 'https://api.github.com';
      this.get('users/:username', () => ({
        avatar_url: 'https://avatars2.githubusercontent.com/u/19560693?v=4',
        html_url: 'https://github.com/vitebo',
        public_repos: 25,
        followers: 40,
        following: 43,
      }));
      this.get('users/:username/repos', () => [
        {
          name: 'github-explorer',
          html_url: 'https://github.com/vitebo/github-explorer',
        },
        {
          name: 'dotfiles',
          html_url: 'https://github.com/vitebo/dotfiles',
        },
        {
          name: 'scholarships',
          html_url: 'https://github.com/vitebo/scholarships',
        },
        {
          name: 'quero-education-backend-challenge',
          html_url: 'https://github.com/vitebo/quero-education-backend-challenge',
        },
        {
          name: 'k8s',
          html_url: 'https://github.com/vitebo/k8s',
        },
        {
          name: 'quero-education-front-end-challenge',
          html_url: 'https://github.com/vitebo/quero-education-front-end-challenge',
        },
        {
          name: 'aluraframe',
          html_url: 'https://github.com/vitebo/aluraframe',
        },
      ]);
      this.get('users/:username/starred', () => [
        {
          name: 'vue-state-store',
          html_url: 'https://github.com/AhaOfficial/vue-state-store',
        },
        {
          name: 'cz-cli',
          html_url: 'https://github.com/commitizen/cz-cli',
        },
        {
          name: 'faker.js',
          html_url: 'https://github.com/Marak/faker.js',
        },
        {
          name: 'miragejs',
          html_url: 'https://github.com/miragejs/miragejs',
        },
        {
          name: 'vuems',
          html_url: 'https://github.com/ergonode/vuems',
        },
        {
          name: 'regolith-desktop',
          html_url: 'https://github.com/regolith-linux/regolith-desktop',
        },
        {
          name: 'polybar',
          html_url: 'https://github.com/polybar/polybar',
        },
      ]);
    },
  });
}
