---
sidebar: false
---

# HTML Modules - single file

```html
<template id="tmpl">
  <div>Custom element shadow tree content...</div>
</template>

<script type="module">
  const importDoc = import.meta.document;

  class myCustomElement extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      const template = importDoc.getElementById("tmpl");
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define("myCustomElement", myCustomElement);
</script>
```