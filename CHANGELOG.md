# CHANGELOG

## Version 2.0.0 (2025-05-30)

### 🎉 Major Release - Complete Rewrite!

#### ✨ New Features
- **Multi-Language Support**: Full support for English, Japanese (日本語), and Spanish (Español)
- **Real PDF Generation**: Uses browser's print functionality for true PDF output
- **Beautiful Modern Design**: 
  - Gradient header with purple theme
  - Hover effects on table rows
  - Responsive layout
  - Print-optimized styles
- **Live Demo**: Interactive demo at `demo/invoice-demo.html`
- **Smart Calculations**: Automatic subtotal, tax, and total calculations
- **Currency Formatting**: Proper formatting for different currencies using Intl API
- **Date Formatting**: Locale-aware date formatting

#### 🔧 Technical Improvements
- Complete code restructure in `src/invoice-generator.js`
- No external dependencies - pure JavaScript
- Works in all modern browsers
- Mobile-responsive design
- Client-side only - data privacy guaranteed

#### 📁 Project Structure
```
pdf-invoice-generator/
├── src/
│   └── invoice-generator.js    # Core library
├── demo/
│   └── invoice-demo.html       # Interactive demo
├── README.md                   # Updated documentation
├── TEST_INSTRUCTIONS.md        # How to test
└── package.json               # v2.0.0
```

#### 🐛 Bug Fixes
- Fixed: Now actually generates PDFs (not just HTML)
- Fixed: Proper multi-language support
- Fixed: Responsive design issues

#### 💔 Breaking Changes
- Main file moved from `index.js` to `src/invoice-generator.js`
- API slightly changed for better flexibility

---

## Version 1.0.0 (2025-05-29)
- Initial release
- Basic invoice generation
- HTML output only

---

### Support Development
If this tool helps your business, consider supporting:
- [Buy me a coffee](https://www.buymeacoffee.com/boxirgb)
- [Ko-fi](https://ko-fi.com/boxirgb)