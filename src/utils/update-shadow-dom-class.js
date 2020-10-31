export default function updateShadowDomClass(context, { className, state }) {
  const element = context.shadowRoot.firstChild;
  return state
    ? element.classList.add(className)
    : element.classList.remove(className);
}
