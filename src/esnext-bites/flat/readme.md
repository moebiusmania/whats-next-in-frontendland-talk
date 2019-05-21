---
sidebar: false
---

# Array.prototype.flat
Flattening arrays "*like there is no tomorrow*"!

```javascript
[1, 2, [3, 4] ].flat();
// [1, 2, 3, 4]

[1, 2, [3, 4, [5, 6] ] ].flat();
// [1, 2, 3, 4, [5, 6] ] meh 😕

[1, 2, [3, 4, [5, 6] ] ].flat(Infinity);
// [1, 2, 3, 4, 5, 6] 😎
```