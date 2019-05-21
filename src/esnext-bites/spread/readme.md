---
sidebar: false
---

# Rest/spread properties in objects
Faster way to extend/merge objects.

```javascript
const base = {
  meetup: 'Milano Frontend',
  title: 'What\'s next in frontend-land',
  building: 'Mikamai',
  floor: 1
};

const extend = {
  ...base,
  attendees: 100,
  floor: 2
}
```