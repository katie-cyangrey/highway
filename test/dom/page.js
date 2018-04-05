// Highway
import Highway from '../../src/index';

// Fake HTML.
const HTML = `
<html class="foo">
  <head>
    <title>Page</title>
  </head>
  <body class="bar">
    <main router-wrapper>
      <article router-view="page"></article>
    </main>
  </body>
</html>`;

// We parse the HTML to create a fake DOM.
const DOM = new window.DOMParser().parseFromString(HTML, 'text/html');

// We now get the `[router-view]` from the fake DOM.
const VIEW = DOM.querySelector('[router-view]');

// Create a `Highway.Renderer` class
class Page extends Highway.Renderer {
  //
}

// Export the instance
export default new Page({
  page: DOM,
  view: VIEW,
  transition: Highway.Transition
});