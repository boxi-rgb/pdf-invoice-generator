# PDF Invoice Generator 📄

A simple yet powerful invoice generator that creates professional invoices in seconds. Multi-language support, beautiful templates, and real PDF generation!

## ✨ Features

- 📊 Professional invoice templates
- 💰 Automatic tax calculations
- 🌍 Multi-language support (English, Japanese, Spanish)
- 📧 Email-ready HTML output
- 🎨 Beautiful, modern design
- 💾 Export as HTML or JSON
- 🔒 100% client-side - your data stays private
- 📱 Mobile-responsive

## 🚀 Quick Start

```javascript
const invoice = new InvoiceGenerator();

invoice.createInvoice({
  invoiceNumber: 'INV-001',
  from: {
    name: 'Your Company',
    address: '123 Business St',
    city: 'New York',
    country: 'USA'
  },
  to: {
    name: 'Client Company',
    address: '456 Client Ave',
    city: 'Los Angeles',
    country: 'USA'
  },
  items: [
    {
      description: 'Web Development',
      quantity: 1,
      price: 1000
    },
    {
      description: 'Design Services',
      quantity: 2,
      price: 500
    }
  ],
  tax: 10 // 10% tax
});

// Generate and save
invoice.save('invoice.pdf');
```

## 🌐 Multi-Language Support

```javascript
// Japanese invoice
const invoice = new InvoiceGenerator({ language: 'ja' });

// Spanish invoice
const invoice = new InvoiceGenerator({ language: 'es' });
```

## 📖 Usage

### Basic Example

```javascript
const invoice = new InvoiceGenerator();

invoice
  .createInvoice({
    invoiceNumber: 'INV-2024-001',
    date: new Date(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  })
  .addItem({
    description: 'Consulting Services',
    quantity: 10,
    price: 100
  })
  .addItem({
    description: 'Travel Expenses',
    quantity: 1,
    price: 250
  });

// Preview in browser
document.body.innerHTML = invoice.preview();

// Save as PDF (opens print dialog)
invoice.save();
```

### Export Options

```javascript
// Export as HTML
const html = invoice.export('html');

// Export as JSON
const json = invoice.export('json');
```

## 🎨 Customization

The generated invoices feature:
- Modern gradient header
- Clean, professional layout
- Hover effects on table rows
- Responsive design
- Print-optimized styles

## 💻 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this in your commercial projects!

## ☕ Support

If this project helps you save time and create professional invoices, consider supporting its development:

- [Buy me a coffee](https://www.buymeacoffee.com/boxirgb)
- [Support on Ko-fi](https://ko-fi.com/boxirgb)

---

**Made with ❤️ by developers, for developers**