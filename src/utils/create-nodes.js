export default function createNodes(factory, items) {
  const $fragment = document.createDocumentFragment();
  items.forEach((textNode) => {
    $fragment.appendChild(factory(textNode));
  });
  return $fragment;
}
