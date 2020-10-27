import cloneAttributes from './clone-node-attributes';

export default function updateNodeName(node, nodeName) {
  const newNode = document.createElement(nodeName);
  newNode.innerHTML = node.innerHTML;
  cloneAttributes(node, newNode);
  node.parentNode.replaceChildren(newNode);
}
