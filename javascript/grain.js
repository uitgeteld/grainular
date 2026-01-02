function addGrain(imageData, amount = 0, colored = false) {
  if (!imageData || amount <= 0) return imageData;
  const data = imageData.data || imageData;
  for (let i = 0; i < data.length; i += 4) {
    if (colored) {
      data[i] += (Math.random() - 0.5) * amount * 2;
      data[i+1] += (Math.random() - 0.5) * amount * 2;
      data[i+2] += (Math.random() - 0.5) * amount * 2;
    } else {
      const noise = (Math.random() - 0.5) * amount * 2;
      data[i] += noise;
      data[i+1] += noise;
      data[i+2] += noise;
    }
  }
  return imageData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = addGrain;
} else {
  window.addGrain = addGrain;
}
