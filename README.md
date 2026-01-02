# Grainular

Professional image editing with film grain effects, right in your browser. No quality loss, no server uploads - everything happens client-side.

![Grainular](logo.png)

## Features

✨ **Film Grain Effects** - Add colored or black & white grain to your images  
🎨 **Full Image Controls** - Adjust brightness, saturation, and convert to B&W  
💾 **Lossless Export** - Download images as PNG with no quality loss  
🌓 **Light/Dark Mode** - Beautiful wheat-grain themed interface  
🚀 **Client-Side Processing** - All editing happens in your browser  
📱 **Responsive Design** - Works on desktop, tablet, and mobile

## Usage

### Web Application

1. Visit the website
2. Upload an image (or drag & drop)
3. Edit using the controls:
   - Black & White toggle
   - Brightness slider (0-100)
   - Saturation slider (0-100)
   - Colored Grain (0-100)
   - B&W Grain (0-100)
4. Download your edited image

### NPM Package (for Discord Bots, etc.)

The JavaScript modules can be used in Node.js projects:

```bash
npm install grainular
```

```javascript
const { addGrain, saturate, adjustBrightness, toBlackWhite } = require('grainular');

// Process image data
imageData = addGrain(imageData, 20, true);      // colored grain
imageData = saturate(imageData, 1.5);           // increase saturation
imageData = adjustBrightness(imageData, 1.2);   // increase brightness
imageData = toBlackWhite(imageData);            // convert to B&W
```

## Project Structure

```
grainular/
├── index.html          # Main web application
├── test.html           # Advanced editor
├── style.css           # Styling with wheat grain theme
├── javascript/         # Modular image processing functions
│   ├── grain.js        # Grain effect (colored/mono)
│   ├── saturate.js     # Saturation adjustment
│   ├── brightness.js   # Brightness adjustment
│   ├── blackwhite.js   # B&W conversion
│   └── index.js        # NPM package entry point
└── logo.png           # Brand logo
```

## Technology Stack

- **Pure JavaScript** - No frameworks, just vanilla JS
- **HTML5 Canvas API** - For image processing
- **CSS3** - Modern, responsive styling
- **Local Storage** - Theme preference persistence

## Development

Open `index.html` in a browser to run the web application. No build process required!

For Discord bot integration or Node.js usage, install via npm:

```bash
npm install grainular
```

```javascript
const grainular = require('grainular');
// Use grainular.addGrain, grainular.saturate, etc.
```

## Browser Compatibility

Works in all modern browsers that support HTML5 Canvas:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contact

- **Instagram**: [@ovwastaken](https://instagram.com/ovwastaken)
- **Discord**: uitgeteld
- **GitHub**: [uitgeteld/grainular](https://github.com/uitgeteld/grainular)

## License

See [LICENSE](LICENSE) file for details.

---

Built with ❤️ for photographers and creators.
