---
sidebar: false
---

# CSS Shadow Parts
Styling the Shadow DOM!

```css
/* access the shadow part */
my-element::part(header) { ... }

/* chainable pseudo elements/selectors */
my-element::part(header):hover { ... }
my-element::part(header):placeholder { ... }
```

This will not replace the [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) approach, the idea is to have more choices.