export default function updateShadowDomAttribute(context, attributeName) {
  const element = context.shadowRoot.firstChild;
  const attributeValue = context[attributeName];
  element.setAttribute(attributeName, attributeValue);
}
