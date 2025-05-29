# PDF Invoice Generator Tutorial

Welcome! This tutorial will help you create your first professional invoice in under 5 minutes.

## 🎯 Why This Tool Will Save You Money

Before we start, let me show you the math:
- Manual invoice creation: **55 minutes** × $50/hour = **$45.83 per invoice**
- With this tool: **30 seconds** = **$0.42 per invoice**
- **You save $45.41 per invoice!**

At just $10, this tool pays for itself after creating just ONE invoice!

## 📚 Tutorial Contents

1. [Basic Invoice](#basic-invoice)
2. [Multi-Currency Invoice](#multi-currency-invoice)
3. [Invoice with Multiple Items](#invoice-with-multiple-items)
4. [Custom Branding](#custom-branding)
5. [Batch Processing](#batch-processing)

## Basic Invoice

Let's create your first invoice:

```javascript
const InvoiceGenerator = require('pdf-invoice-generator');

// Create a new invoice instance
const invoice = new InvoiceGenerator();

// Add your invoice data
invoice.createInvoice({
  invoiceNumber: 'INV-001',
  date: new Date(),
  
  from: {
    name: 'Your Business Name',
    address: '123 Your Street',
    city: 'Your City',
    country: 'Your Country'
  },
  
  to: {
    name: 'Client Name',
    address: '456 Client Street',
    city: 'Client City',
    country: 'Client Country'
  },
  
  items: [{
    description: 'Consulting Services',
    quantity: 10,
    price: 100  // $100 per hour
  }],
  
  tax: 10,  // 10% tax
  currency: 'USD'
});

// Save the invoice
invoice.save('my-first-invoice.pdf');
```

**That's it!** You've just created a $1,000 invoice in seconds.

## Multi-Currency Invoice

Working with international clients? No problem:

```javascript
// Euro invoice
const euroInvoice = new InvoiceGenerator();
euroInvoice.createInvoice({
  invoiceNumber: 'EUR-001',
  currency: 'EUR',
  items: [{
    description: 'Web Development',
    quantity: 1,
    price: 2000
  }],
  tax: 19  // German VAT
});

// Japanese Yen invoice
const yenInvoice = new InvoiceGenerator();
yenInvoice.createInvoice({
  invoiceNumber: 'JPY-001',
  currency: 'JPY',
  items: [{
    description: 'Design Services',
    quantity: 1,
    price: 100000
  }],
  tax: 10  // Japanese consumption tax
});
```

## Invoice with Multiple Items

Real-world example with multiple services:

```javascript
const invoice = new InvoiceGenerator();

invoice.createInvoice({
  invoiceNumber: 'INV-2025-003',
  date: new Date(),
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  
  from: {
    name: 'Creative Agency LLC',
    address: '789 Design Boulevard',
    city: 'San Francisco',
    country: 'USA'
  },
  
  to: {
    name: 'Tech Startup Inc.',
    address: '321 Innovation Way',
    city: 'Austin',
    country: 'USA'
  },
  
  items: [
    {
      description: 'Website Design',
      quantity: 1,
      price: 5000
    },
    {
      description: 'Logo Design (3 concepts)',
      quantity: 1,
      price: 1500
    },
    {
      description: 'Business Card Design',
      quantity: 1000,
      price: 0.50
    },
    {
      description: 'Social Media Templates',
      quantity: 10,
      price: 100
    }
  ],
  
  tax: 8.25,  // Texas sales tax
  currency: 'USD',
  notes: 'Payment due within 30 days. Thank you for your business!'
});

// The invoice total: $8,456.25
invoice.save('design-project-invoice.pdf');
```

## Custom Branding

Add your company logo and customize colors:

```javascript
// Coming in Pro version (just $10!)
// - Custom logo upload
// - Brand colors
// - Custom fonts
// - Watermarks
// - QR codes for payment

// Support the project to unlock these features:
// https://www.buymeacoffee.com/boxirgb
```

## Batch Processing

Process multiple invoices at once:

```javascript
const clients = [
  { name: 'Client A', amount: 1000 },
  { name: 'Client B', amount: 2000 },
  { name: 'Client C', amount: 1500 }
];

clients.forEach((client, index) => {
  const invoice = new InvoiceGenerator();
  invoice.createInvoice({
    invoiceNumber: `BATCH-${index + 1}`,
    to: { name: client.name },
    items: [{ description: 'Services', quantity: 1, price: client.amount }]
  });
  invoice.save(`invoice-${client.name.replace(' ', '-')}.pdf`);
});

// Created 3 invoices in seconds!
// Time saved: 2.75 hours
// Money saved: $137.50
```

## 💡 Pro Tips

1. **Set up templates** - Create a base invoice and reuse it
2. **Automate numbering** - Use timestamps for unique invoice numbers
3. **Track payments** - Add payment status to your notes
4. **Multi-language** - Customize text for international clients

## 🚀 Ready to Save Time and Money?

You've seen how easy it is. Now imagine:
- No more Excel struggles
- No more formatting issues
- No more calculation errors
- Professional invoices every time

**For just $10, you get:**
- ✅ This complete tool
- ✅ Lifetime updates
- ✅ Priority support
- ✅ New features as they're added

### 💳 Support Options:
- [Buy me a coffee - $10](https://www.buymeacoffee.com/boxirgb)
- [PayPal - $10](https://paypal.me/boxirgb)
- [Ko-fi - $10](https://ko-fi.com/boxirgb)

---

**Remember:** Every invoice you create manually costs you ~$45 in time. This tool costs just $10 total. The math is simple!

## 🙋 Questions?

Open an issue on GitHub and I'll help you personally!

---
*Created with ❤️ by an independent developer who believes tools should save time, not waste it.*