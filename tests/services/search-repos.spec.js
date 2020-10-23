import searchRepos from '../../src/services/search-repos';

function mockFetch() {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve([
      {
        name: 'github-vanilla',
        html_url: 'https://github.com/vitebo/github-vanilla',
      },
    ]),
  });
}

describe('search-repos', () => {
  it('mount the URL correctly', async () => {
    expect.assertions(1);
    mockFetch();
    await searchRepos({ username: 'vitebo' });
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/vitebo/repos');
  });

  it('convert the response correctly', async () => {
    expect.assertions(1);
    mockFetch();
    const data = await searchRepos({ username: 'vitebo' });
    expect(data).toStrictEqual([
      {
        name: 'github-vanilla',
        htmlUrl: 'https://github.com/vitebo/github-vanilla',
      },
    ]);
  });

  it('reject the promise with correct error when the request fails', async () => {
    expect.assertions(1);
    jest.spyOn(global, 'fetch').mockRejectedValue();
    await searchRepos({ username: 'vitebo' }).catch(({ message }) => {
      expect(message).toStrictEqual('error searching repos');
    });
  });
});
