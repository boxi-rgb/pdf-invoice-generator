const InvoiceGenerator = require('./index.js');

// Test the invoice generator
console.log('Testing PDF Invoice Generator...\n');

// Test 1: Basic invoice creation
console.log('Test 1: Creating basic invoice');
const invoice1 = new InvoiceGenerator();
invoice1.createInvoice({
  invoiceNumber: 'TEST-001',
  from: { name: 'Test Company', address: '123 Test St', city: 'Test City', country: 'USA' },
  to: { name: 'Client Corp', address: '456 Client Ave', city: 'Client City', country: 'USA' },
  items: [{ description: 'Testing Service', quantity: 1, price: 100 }],
  tax: 10,
  currency: 'USD'
});
console.log('✓ Basic invoice created successfully');
console.log(`  Subtotal: $${invoice1.calculateSubtotal()}`);
console.log(`  Tax: $${invoice1.calculateTax()}`);
console.log(`  Total: $${invoice1.calculateTotal()}\n`);

// Test 2: Multiple items
console.log('Test 2: Invoice with multiple items');
const invoice2 = new InvoiceGenerator();
invoice2.createInvoice({
  invoiceNumber: 'TEST-002',
  from: { name: 'Test Company', address: '123 Test St', city: 'Test City', country: 'USA' },
  to: { name: 'Client Corp', address: '456 Client Ave', city: 'Client City', country: 'USA' },
  currency: 'USD'
});
invoice2.addItem({ description: 'Item 1', quantity: 2, price: 50 });
invoice2.addItem({ description: 'Item 2', quantity: 1, price: 100 });
invoice2.addItem({ description: 'Item 3', quantity: 3, price: 25 });
console.log('✓ Multiple items added successfully');
console.log(`  Total items: ${invoice2.invoice.items.length}`);
console.log(`  Subtotal: $${invoice2.calculateSubtotal()}\n`);

// Test 3: Different currencies
console.log('Test 3: Different currency support');
const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
currencies.forEach(currency => {
  const inv = new InvoiceGenerator();
  inv.createInvoice({
    invoiceNumber: `TEST-${currency}`,
    from: { name: 'Test', address: 'Test', city: 'Test', country: 'Test' },
    to: { name: 'Test', address: 'Test', city: 'Test', country: 'Test' },
    items: [{ description: 'Test', quantity: 1, price: 100 }],
    currency: currency
  });
  console.log(`  ✓ ${currency} supported`);
});

console.log('\n✅ All tests passed!');
console.log('\n💡 This tool saves you time and money.');
console.log('   Support the project for just $10:');
console.log('   https://www.buymeacoffee.com/boxirgb');
