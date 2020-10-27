export default function cloneAttributes(targetToCopy, targetToPaste) {
  const attributes = [...targetToCopy.attributes];
  attributes.forEach((attribute) => {
    targetToPaste.setAttribute(attribute.nodeName, attribute.nodeValue);
  });
}
