export default function setupButton({ buttonName }) {
  const button = document.createElement('b-button');
  button.classList.add('card-profile__action-button');
  const text = document.createTextNode(buttonName);
  button.appendChild(text);
  return button;
}
