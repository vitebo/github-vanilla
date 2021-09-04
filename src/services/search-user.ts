export default async function searchUser({ username }) {
  try {
    const route = `https://api.github.com/users/${username}`;
    const response = await fetch(route);
    const data = await response.json();
    return {
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
    };
  } catch (error) {
    return Promise.reject(new Error('error searching user'));
  }
}
