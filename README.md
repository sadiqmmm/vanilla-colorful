<div align="center">
  <a href="https://web-padawan.github.io/vanilla-colorful/">
    <img src="https://raw.githubusercontent.com/web-padawan/vanilla-colorful/master/screenshot.png" width="210" height="210" alt="Screenshot of the color picker">
  </a>
</div>

<div align="center">
  <a href="https://npmjs.org/package/vanilla-colorful">
    <img alt="npm" src="https://img.shields.io/npm/v/vanilla-colorful.svg" />
  </a>
 <a href="https://npmjs.org/package/vanilla-colorful">
    <img alt="no dependencies" src="https://img.shields.io/david/web-padawan/vanilla-colorful.svg" />
  </a>
  <a href="https://bundlephobia.com/result?p=vanilla-colorful">
    <img alt="gzip size" src="https://badgen.net/bundlephobia/minzip/vanilla-colorful" />
  </a>
</div>

<div align="center">
  <strong>vanilla-colorful</strong> is a port of <a href="https://github.com/omgovich/react-colorful">react colorful</a> to vanilla Custom Elements.
</div>

## Features

- **Small**: Just 2,2 KB (minified and gzipped). [Size Limit](https://github.com/ai/size-limit) controls the size.
- **Fast**: Built with standards based Custom Elements.
- **Bulletproof**: Written in strict TypeScript and covered by 20+ tests.
- **Simple**: The interface is straight forward and easy to use.
- **Mobile-friendly**: Works well on mobile devices and touch screens.
- **Framework-agnostic**: Can be used [with any framework](https://custom-elements-everywhere.com/).
- **No dependencies**

## Live demo

- [Website](https://web-padawan.github.io/vanilla-colorful/)

## Install

```
npm install vanilla-colorful --save
```

## Usage

```html
<color-picker-hex color="#1e88e5"></color-picker-hex>
<script type="module">
  import 'vanilla-colorful';

  const picker = document.querySelector('color-picker-gex');
  picker.addEventListener('color-changed', event => {
    const newColor = event.detail.value;
  });
</script>
```

## Supported color models

The default **vanilla-colorful**'s input/output format is a HEX string (like `#ffffff`). In case if
you need another color model, we provide 5 additional color picker bundles.

<details>
  <summary>How to use another color model</summary>

#### Available pickers

| File to import                 | HTML element                | Value example                |
| -------------------------------|-----------------------------| ---------------------------- |
| `"color-picker-rgb.js"`        | `<color-picker-rgb>`        | `{ r: 255, g: 255, b: 255 }` |
| `"color-picker-rgb-string.js"` | `<color-picker-rgb-string>` | `"rgb(255, 255, 255)"`       |
| `"color-picker-hsl.js"`        | `<color-picker-hsl>`        | `{ h: 0, s: 0, l: 100 }`     |
| `"color-picker-hsl-string.js"` | `<color-picker-hsl-string>` | `"hsl(0, 0%, 100%)"`         |
| `"color-picker-hsv.js"`        | `<color-picker-hsv>`        | `{ h: 0, s: 0, v: 100 }`     |

#### Code example

```html
<color-picker-rgb></color-picker-rgb>
<script type="module">
  import 'vanilla-colorful/color-picker-rgb.js';

  const picker = document.querySelector('color-picker-rgb');
  picker.color = { r: 50, g: 100, b: 150 };
</script>
```

</details>

## Overriding styles

**vanilla-colorful** exposes [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
allowing to override the default styles:

```css
color-picker-hex {
  height: 250px;
}

color-picker-hex::part(saturation) {
  bottom: 30px;
  border-radius: 3px 3px 0 0;
}

color-picker-hex::part(hue) {
  height: 30px;
  border-radius: 0 0 3px 3px;
}

color-picker-hex::part(saturation-pointer) {
  border-radius: 5px;
}

color-picker-hex::part(hue-pointer) {
  border-radius: 2px;
  width: 15px;
  height: inherit;
}
```

## HEX input

**vanilla-colorful** provides an additional `<hex-input>` element that can be used to type a color:

```html
<hex-input color="#1e88e5"></hex-input>
<script type="module">
  import 'vanilla-colorful/hex-input.js';

  const input = document.querySelector('hex-input');
  input.addEventListener('color-changed', event => {
    const newColor = event.detail.value;
  });
</script>
```

`<hex-input>` does not use Shadow DOM and renders an `input` element without any custom styles. You
can also provide a custom `input` element as a child if you want to configure it.

## TypeScript support

**vanilla-colorful** supports TypeScript and ships with types in the library itself; no need for any other install.

<details>
  <summary>How you can get the most from our TypeScript support</summary><br />

While not only typing its own class methods and variables, it can also help you type yours. Depending on
the element you're using, you can also import the type that is associated with the element.
For example, if you're using our HSL color picker component, you can also import the `HSL` type.

```ts
import type { HSL }  from 'vanilla-colorful/color-picker-hsl';

const myHslValue: HSL = { h: 0, s: 0, l: 0 };
```

All the included custom elements are compatible with [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) and
[lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) extension for Visual
Studio Code, so you can benefit from type checking in lit-html templates.
</details>

## Browser support

**vanilla-colorful** uses [Custom Elements](https://caniuse.com/#feat=custom-elementsv1) and [Shadow DOM](https://caniuse.com/#feat=shadowdomv1),
and does not support IE11 or legacy Edge.

## Why vanilla-colorful?

**vanilla-colorful** has all the benefits of [react-colorful](https://github.com/omgovich/react-colorful#why-react-colorful)
with one important difference.

While `react-colorful` claims to have zero dependencies, it still expects you to use React or [Preact](https://github.com/omgovich/react-colorful#usage-with-preact).
This means that Angular, Vue, Svelte or vanilla JS users would have an **extra** dependency in their apps.

Now when all the evergreen browsers support standards based [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements),
it's perfect time to build such tiny and lightweight UI controls as web components rather than framework components.