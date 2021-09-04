export default async function searchRepos({ username }) {
  try {
    const route = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(route);
    const data = await response.json();
    return data.map((repo) => ({
      name: repo.name,
      htmlUrl: repo.html_url,
    }));
  } catch (error) {
    return Promise.reject(new Error('error searching repos'));
  }
}
