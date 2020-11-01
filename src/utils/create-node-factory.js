function createSlot(slotName) {
  const slot = document.createElement('slot');
  slot.setAttribute('name', slotName);
  return slot;
}

export default function createNodeFactory({ elementType, cssClass }) {
  return (slotName) => {
    const $element = document.createElement(elementType);
    if (cssClass) $element.classList.add(cssClass);
    $element.appendChild(createSlot(slotName));
    return $element;
  };
}
