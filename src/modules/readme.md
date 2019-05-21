---
sidebar: false
---

# HTML Modules

**To not be confused with the deprecated HTML Imports!**

This is a counterpart for JS modules, that would allow both to import HTML content in a `.js` file or create a single-file-component* in an `.html` file, much similar to `.vue` files.

```html
<script type="module">
  import { content } from "file.html"
  document.body.appendChild(content);
</script>
```

Explainer [here](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/html-modules-explainer.md).

**STATUS:** proposal.
