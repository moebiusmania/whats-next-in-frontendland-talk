---
sidebar: false
---

# Portals
Use `iframes` like it's 2020... oh wait!

```javascript
const portal = document.createElement('portal');
portal.src = 'https://www.meetup.com/milano-front-end/';
document.body.appendChild(portal);

// write your own interactions & animations then...
portal.activate();
```

Check out [https://web.dev/hands-on-portals](https://web.dev/hands-on-portals)!

**Chrome Canary only! 😰**