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
          name: 'aluraframe',
          html_url: 'https://github.com/vitebo/aluraframe',
        },
      ]);
      this.get('users/:username/starred', () => [
        {
          name: 'vue-state-store',
          html_url: 'https://github.com/AhaOfficial/vue-state-store',
        },
      ]);
    },
  });
}
