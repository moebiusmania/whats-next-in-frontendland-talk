---
sidebar: false
---

# CSS Shadow Parts
The first major update to the [Shadow DOM API](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM), it will (*finally*) allow you to expose certain parts of the shadow root to make them "styleable" from the main DOM. 

```html
<!-- PSEUDO CODE -->
<my-element>
  #shadow-root
    <div part="header">...</div>
    <div>...</div> /* not styleable
</my-element>
```

Now we have access to some new pseudo-selectors...