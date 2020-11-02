function createLinkItem(repo, index) {
  const link = document.createElement('b-link');
  link.classList.add('card-profile__list-item');
  link.setAttribute('href', repo.htmlUrl);
  link.setAttribute('slot', index);
  link.setAttribute('target', '_blank');
  const text = document.createTextNode(repo.name);
  link.appendChild(text);
  return link;
}

export default async function createList(repos) {
  const list = document.createElement('b-list');
  repos
    .map(createLinkItem)
    .forEach((linkItem) => list.appendChild(linkItem));
  return list;
}
