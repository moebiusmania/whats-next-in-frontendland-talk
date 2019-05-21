---
sidebar: false
---

# Native lazy loading

### Images & iframes
Images are already "async" in loading, but they're loaded even if they're outside the current viewport.

```html
<img src="./my-photo.jpg" loading="lazy" />
<iframe src="./to-embed.html" loading="lazy" ></iframe>
```

Currently behind flag in Chrome, unknown support in other browsers.

Try out the awesome [https://github.com/verlok/lazyload](https://github.com/verlok/lazyload)!