function templateSetup(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.cloneNode(true);
}

function styleSheetSetup(css) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  return [sheet];
}

export default function componentSetup(html, css) {
  return {
    template: templateSetup(html),
    styleSheet: styleSheetSetup(css),
  };
}
