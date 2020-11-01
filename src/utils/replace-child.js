export default function replaceChild(parent, child) {
  parent.querySelectorAll('*').forEach((node) => node.remove());
  parent.appendChild(child);
}
