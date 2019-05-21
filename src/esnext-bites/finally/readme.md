---
sidebar: false
---

# Promise.prototype.finally
Execute of block of code when a Promise is done, regardless of the result.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/)
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => { 
    console.log(error);
  })
  .finally(() => { 
    console.log('Remove spinners or whatever...');
  });
```