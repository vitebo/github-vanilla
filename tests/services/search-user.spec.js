import searchUser from '../../src/services/search-user';

function mockFetch(data = {}) {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve({
      avatar_url: 'https://avatars2.githubusercontent.com/u/19560693?v=4',
      html_url: 'https://github.com/vitebo',
      public_repos: 25,
      followers: 40,
      following: 43,
      ...data,
    }),
  });
}

describe('search-user', () => {
  it('mount the URL correctly', async () => {
    expect.assertions(1);
    mockFetch();
    await searchUser({ username: 'vitebo' });
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/vitebo');
  });

  it('convert the response correctly', async () => {
    expect.assertions(1);
    mockFetch();
    const data = await searchUser({ username: 'vitebo' });
    expect(data).toStrictEqual({
      avatarUrl: 'https://avatars2.githubusercontent.com/u/19560693?v=4',
      htmlUrl: 'https://github.com/vitebo',
      publicRepos: 25,
      followers: 40,
      following: 43,
    });
  });

  it('reject the promise with correct error when the request fails', async () => {
    expect.assertions(1);
    jest.spyOn(global, 'fetch').mockRejectedValue();
    await searchUser({ username: 'vitebo' }).catch(({ message }) => {
      expect(message).toStrictEqual('error searching user');
    });
  });
});
