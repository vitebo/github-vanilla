import searchStarredRepos from '../../src/services/search-starred-repos';

function mockFetch() {
  jest.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify([
    {
      name: 'github-vanilla',
      html_url: 'https://github.com/vitebo/github-vanilla',
    },
  ])));
}

describe('search-starred-repos', () => {
  it('mount the URL correctly', async () => {
    expect.assertions(1);
    mockFetch();
    await searchStarredRepos({ username: 'vitebo' });
    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/vitebo/starred');
  });

  it('convert the response correctly', async () => {
    expect.assertions(1);
    mockFetch();
    const data = await searchStarredRepos({ username: 'vitebo' });
    expect(data).toStrictEqual([
      {
        name: 'github-vanilla',
        htmlUrl: 'https://github.com/vitebo/github-vanilla',
      },
    ]);
  });

  it('reject the promise with correct error when the request fails', async () => {
    expect.assertions(1);
    jest.spyOn(global, 'fetch').mockRejectedValue(new Response());
    await searchStarredRepos({ username: 'vitebo' }).catch(({ message }) => {
      expect(message).toStrictEqual('error searching starred repos');
    });
  });
});
