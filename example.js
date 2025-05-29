// Example usage of PDF Invoice Generator
// Support this project for $10: https://www.buymeacoffee.com/boxirgb

const InvoiceGenerator = require('./index.js');

// Create a new invoice
const invoice = new InvoiceGenerator();

invoice.createInvoice({
  invoiceNumber: 'INV-2025-001',
  date: new Date(),
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  
  from: {
    name: 'Awesome Freelancer Inc.',
    address: '123 Freelance Street',
    city: 'San Francisco',
    country: 'USA'
  },
  
  to: {
    name: 'Client Corporation',
    address: '456 Business Avenue',
    city: 'New York',
    country: 'USA'
  },
  
  items: [
    {
      description: 'Website Development',
      quantity: 1,
      price: 5000
    },
    {
      description: 'Logo Design',
      quantity: 2,
      price: 500
    },
    {
      description: 'SEO Optimization',
      quantity: 1,
      price: 1000
    }
  ],
  
  tax: 10, // 10% tax
  currency: 'USD',
  notes: 'Thank you for your business! Payment is due within 30 days.'
});

// Generate and save the invoice
console.log('Generating invoice...');
console.log('\nInvoice Details:');
console.log('================');
console.log('Invoice Number:', invoice.invoice.invoiceNumber);
console.log('Client:', invoice.invoice.to.name);
console.log('\nItems:');
invoice.invoice.items.forEach(item => {
  console.log(`- ${item.description}: $${item.price} x ${item.quantity}`);
});
console.log('\nFinancials:');
console.log('Subtotal: $' + invoice.calculateSubtotal().toFixed(2));
console.log('Tax (10%): $' + invoice.calculateTax().toFixed(2));
console.log('Total: $' + invoice.calculateTotal().toFixed(2));

// Save the invoice
invoice.save('invoice-example.pdf');

console.log('\n✨ Invoice generated successfully!');
console.log('\n💡 Pro Tip: Get lifetime Pro features for just $10!');
console.log('   Visit: https://www.buymeacoffee.com/boxirgb');
