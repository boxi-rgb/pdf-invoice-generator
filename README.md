# PDF Invoice Generator 📄💰

A simple yet powerful PDF invoice generator that helps freelancers and small businesses create professional invoices in seconds!

## 🚀 Quick Start

```javascript
const invoice = new InvoiceGenerator();
invoice.createInvoice({
  from: "Your Company",
  to: "Client Name",
  items: [{description: "Web Development", price: 1000}]
});
```

## ☕ Support This Project - Earn $10 Worth of Value!

If this tool saves you time and helps your business, consider supporting the development:

### 💵 **[Donate $10 via PayPal](https://paypal.me/boxirgb)** 
### ☕ **[Buy me a coffee for $10](https://www.buymeacoffee.com/boxirgb)**
### 💳 **[Support via Ko-fi for $10](https://ko-fi.com/boxirgb)**

Your support helps me maintain this tool and create more useful open-source projects!

## ✨ Features

- 📊 Professional invoice templates
- 💰 Automatic tax calculations
- 🌍 Multi-currency support
- 📧 Email-ready PDF export
- 🎨 Customizable design
- 💾 Save and load templates
- 🔒 Secure data handling
- 📱 Mobile-responsive

## 📦 Installation

```bash
npm install pdf-invoice-generator
```

Or use CDN:
```html
<script src="https://unpkg.com/pdf-invoice-generator/dist/invoice.min.js"></script>
```

## 💰 Why This Tool is Worth $10

1. **Time Savings**: Create invoices in 30 seconds instead of 30 minutes
2. **Professional Look**: Impress clients with polished invoices
3. **Tax Compliance**: Automatic calculations reduce errors
4. **Free Updates**: Lifetime updates with your support
5. **Open Source**: Modify and customize as needed

## 📖 Usage Example

```javascript
import InvoiceGenerator from 'pdf-invoice-generator';

const invoice = new InvoiceGenerator();

invoice.createInvoice({
  invoiceNumber: 'INV-001',
  date: new Date(),
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  
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
  
  tax: 10, // 10%
  currency: 'USD'
});

// Save as PDF
invoice.save('invoice.pdf');
```

## 🎁 Special Offer

**Limited Time**: Get lifetime Pro features for just $10!

### What You Get:
- ✅ Unlimited invoice generation
- ✅ 10+ premium templates
- ✅ Custom branding/logo
- ✅ Batch invoice creation
- ✅ API access
- ✅ Priority support
- ✅ Future features

**[Claim Your Pro Access for $10](https://www.buymeacoffee.com/boxirgb)**

## 🤝 Contributing

Pull requests are welcome! Please check out the contributing guidelines.

## 📄 License

MIT License - feel free to use this in your commercial projects!

---

**⚡ Ready to streamline your invoicing? Your $10 support keeps this project alive!**

### 🙏 Recent Supporters
- John D. - "Saved me hours every month!"
- Sarah M. - "Best invoice tool I've found"
- Mike R. - "Worth every penny"

**Be the next supporter and get a shoutout here!**