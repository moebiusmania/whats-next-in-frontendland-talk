---
sidebar: false
---

# CSS Shadow Parts - Theme
The `::theme(part)` pseudo selector let you style a Shadow Part in every instance it appers on the document, no matter the depth.

```html
<my-app>
  #shadow-root
    <x-element></x-element>
    <x-element></x-element>
</my-app>
```

```css
my-app::theme(header) { ... }
```

**STATUS:** Working Draft

Explainer [here](https://meowni.ca/posts/part-theme-explainer/).