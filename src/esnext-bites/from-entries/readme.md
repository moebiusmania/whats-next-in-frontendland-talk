---
sidebar: false
---

# Object.fromEntries
Did you ever wanted to convert a nested array of key/values into an object? There you go...

```javascript
const meetup = [
  ['meetup', 'Milano Frontend'],
  ['building', 'Mikamai' ]
];

Object.fromEntries(meetup);
/* { 
  meetup: 'Milano Frontend', 
  building: 'Mikamai' 
} */
```