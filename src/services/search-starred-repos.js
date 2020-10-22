export default async function searchStarredRepos({ username }) {
  try {
    const route = `https://api.github.com/users/${username}/starred`;
    const response = await fetch(route);
    const data = await response.json();
    return data.map((repo) => ({
      name: repo.name,
      htmlUrl: repo.html_url,
    }));
  } catch (error) {
    return Promise.reject(new Error('error searching starred repos'));
  }
}
