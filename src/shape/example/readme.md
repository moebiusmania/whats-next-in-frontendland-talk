---
sidebar: false
---

# Shape dection API - Reading QR codes
```javascript
const barcodeDetector = new BarcodeDetector({
  formats: [ 'qr_code']
});

try {
  const barcodes = await barcodeDetector.detect(image);
  barcodes.forEach(barcode => console.log(barcode));
} catch (e) {
  console.error('Barcode detection failed:', e);
}
```

Explainer [here](https://developers.google.com/web/updates/2019/01/shape-detection).

**STATUS:** early draft