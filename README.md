## Github Vanilla

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/vitebo/github-vanilla/blob/main/LICENSE)
![Continuous Integration](https://github.com/vitebo/github-vanilla/workflows/Continuous%20Integration/badge.svg?branch=main)
![NPM version](https://img.shields.io/npm/v/@vitebo/github-vanilla?label=npm%20version)

a component of information from a github user

view the [demo for more details](https://vitebo.github.io/github-vanilla/)

## Disclaimer

this is just a repository for studying web components without frameworks.

please do not expect support from the maintainer but feel free to fork or open a PR.

## Usage

just import the package to use it

```js
import '@vitebo/github-vanilla/dist/app.min';
```

then you have the component available

```html
  <card-profile username="vitebo"></card-profile>
```

The card will render the information according to the `username` property

check the [demo file](https://github.com/vitebo/github-vanilla/blob/main/src/index.html) for more details

### Themes

it is possible to define the theme of your card through the css custom properties

```css
card-profile {
  --color-primary: #01a4e9;
  --color-background-primary: #dbf4ff;
}
```

check the [demo style](https://github.com/vitebo/github-vanilla/blob/main/src/styles/global.css) form more details

there are other style variants that you can replace by following the [tokens file](https://github.com/vitebo/github-vanilla/blob/main/src/styles/tokens.css)

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [roadmap](https://github.com/vitebo/github-vanilla/issues) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/vitebo/github-vanilla/blob/main/CONTRIBUTING.md).

## License

[MIT License](https://github.com/vitebo/github-vanilla/blob/main/LICENSE) © [vitebo](https://github.com/vitebo)
