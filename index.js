// PDF Invoice Generator - Professional Invoice Creation Tool
// Support this project: https://www.buymeacoffee.com/boxirgb

class InvoiceGenerator {
  constructor() {
    this.invoice = {
      invoiceNumber: '',
      date: new Date(),
      dueDate: null,
      from: {},
      to: {},
      items: [],
      tax: 0,
      currency: 'USD',
      notes: ''
    };
  }

  createInvoice(data) {
    this.invoice = { ...this.invoice, ...data };
    return this;
  }

  addItem(item) {
    this.invoice.items.push(item);
    return this;
  }

  calculateSubtotal() {
    return this.invoice.items.reduce((sum, item) => {
      return sum + (item.quantity * item.price);
    }, 0);
  }

  calculateTax() {
    const subtotal = this.calculateSubtotal();
    return subtotal * (this.invoice.tax / 100);
  }

  calculateTotal() {
    return this.calculateSubtotal() + this.calculateTax();
  }

  generateHTML() {
    const subtotal = this.calculateSubtotal();
    const tax = this.calculateTax();
    const total = this.calculateTotal();

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${this.invoice.invoiceNumber}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
    .company-info { text-align: right; }
    .invoice-title { font-size: 32px; color: #333; margin-bottom: 20px; }
    .addresses { display: flex; justify-content: space-between; margin-bottom: 40px; }
    .address-block { width: 45%; }
    .address-block h3 { color: #666; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #f5f5f5; font-weight: bold; }
    .totals { text-align: right; }
    .totals p { margin: 5px 0; }
    .total { font-size: 20px; font-weight: bold; color: #333; }
    .footer { margin-top: 50px; text-align: center; color: #888; font-size: 12px; }
    .support { background: #f0f0f0; padding: 20px; margin-top: 40px; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 class="invoice-title">INVOICE</h1>
      <p>Invoice #: ${this.invoice.invoiceNumber}</p>
      <p>Date: ${this.invoice.date.toLocaleDateString()}</p>
      ${this.invoice.dueDate ? `<p>Due Date: ${this.invoice.dueDate.toLocaleDateString()}</p>` : ''}
    </div>
  </div>

  <div class="addresses">
    <div class="address-block">
      <h3>From:</h3>
      <p><strong>${this.invoice.from.name}</strong></p>
      <p>${this.invoice.from.address}</p>
      <p>${this.invoice.from.city}, ${this.invoice.from.country}</p>
    </div>
    <div class="address-block">
      <h3>To:</h3>
      <p><strong>${this.invoice.to.name}</strong></p>
      <p>${this.invoice.to.address}</p>
      <p>${this.invoice.to.city}, ${this.invoice.to.country}</p>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      ${this.invoice.items.map(item => `
        <tr>
          <td>${item.description}</td>
          <td>${item.quantity}</td>
          <td>${this.invoice.currency} ${item.price.toFixed(2)}</td>
          <td>${this.invoice.currency} ${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="totals">
    <p>Subtotal: ${this.invoice.currency} ${subtotal.toFixed(2)}</p>
    <p>Tax (${this.invoice.tax}%): ${this.invoice.currency} ${tax.toFixed(2)}</p>
    <p class="total">Total: ${this.invoice.currency} ${total.toFixed(2)}</p>
  </div>

  ${this.invoice.notes ? `<div class="notes"><h3>Notes:</h3><p>${this.invoice.notes}</p></div>` : ''}

  <div class="support">
    <p><strong>This invoice was generated using PDF Invoice Generator</strong></p>
    <p>If this tool saves you time, consider supporting the project for $10:</p>
    <p><a href="https://www.buymeacoffee.com/boxirgb">☕ Buy me a coffee</a></p>
  </div>

  <div class="footer">
    <p>Generated with PDF Invoice Generator - https://github.com/boxi-rgb/pdf-invoice-generator</p>
  </div>
</body>
</html>
    `;
  }

  save(filename = 'invoice.pdf') {
    // In a real implementation, this would use a PDF library
    console.log(`Invoice would be saved as ${filename}`);
    console.log('Subtotal:', this.calculateSubtotal());
    console.log('Tax:', this.calculateTax());
    console.log('Total:', this.calculateTotal());
    
    // Show support message
    console.log('\n💰 If this tool helped you, consider supporting for $10:');
    console.log('   https://www.buymeacoffee.com/boxirgb');
  }
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InvoiceGenerator;
} else if (typeof window !== 'undefined') {
  window.InvoiceGenerator = InvoiceGenerator;
}
