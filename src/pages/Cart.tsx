import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import jsPDF from "jspdf";
import logo from "@/assets/logo.png";

/**
 * Cart Page Component
 * Displays shopping cart items with quantity controls and total price calculation
 */
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  
  // State for customer information
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");

  /**
   * Generate and download quotation as a PDF document with logo
   */
  const handlePrintQuotation = () => {
    // Validate customer information
    if (!customerName.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!customerContact.trim()) {
      alert("Please enter your contact information");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 20;

    // Add logo
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      // Add logo (centered, scaled to fit)
      const imgWidth = 50;
      const imgHeight = (img.height * imgWidth) / img.width;
      doc.addImage(img, "PNG", (pageWidth - imgWidth) / 2, yPosition, imgWidth, imgHeight);
      yPosition += imgHeight + 10;

      // Company header
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("EXCEL ASIA TECHNOLOGIES INC.", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 6;

      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Sales Office: 139 Ground Floor, Congressional Avenue,", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 4;
      doc.text("Project 8, Quezon City, Philippines", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 4;
      doc.text("Tel: 8920-9710, 8986-7149, 8546-0593", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 4;
      doc.text("Email: info@excelasiatech.com", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 8;

      // Quotation title
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("QUOTATION", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 8;

      // Quotation details
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text(`Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 14, yPosition);
      yPosition += 5;
      doc.text(`Quotation No: Q-${Date.now()}`, 14, yPosition);
      yPosition += 8;

      // Customer information
      doc.setFont("helvetica", "bold");
      doc.text("Customer Information:", 14, yPosition);
      yPosition += 5;
      doc.setFont("helvetica", "normal");
      doc.text(`Name: ${customerName}`, 14, yPosition);
      yPosition += 5;
      doc.text(`Contact: ${customerContact}`, 14, yPosition);
      yPosition += 8;

      // Items header
      doc.setFont("helvetica", "bold");
      doc.text("ITEM DETAILS", 14, yPosition);
      yPosition += 6;

      // Items list
      doc.setFont("helvetica", "normal");
      cart.forEach((item, index) => {
        doc.setFont("helvetica", "bold");
        doc.text(`${index + 1}. ${item.name}`, 14, yPosition);
        yPosition += 4;
        doc.setFont("helvetica", "normal");
        doc.text(`   Category: ${item.category}`, 14, yPosition);
        yPosition += 4;
        doc.text(`   Quantity: ${item.quantity}`, 14, yPosition);
        yPosition += 4;
        doc.text(`   Unit Price: ₱${item.price.toFixed(2)}`, 14, yPosition);
        yPosition += 4;
        doc.text(`   Subtotal: ₱${(item.price * item.quantity).toFixed(2)}`, 14, yPosition);
        yPosition += 6;

        // Add new page if needed
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
      });

      // Summary
      yPosition += 4;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text("SUMMARY", 14, yPosition);
      yPosition += 6;
      doc.setFont("helvetica", "normal");
      doc.text(`Subtotal:`, 14, yPosition);
      doc.text(`₱${getCartTotal().toFixed(2)}`, pageWidth - 14, yPosition, { align: "right" });
      yPosition += 5;
      doc.text(`Shipping:`, 14, yPosition);
      doc.text(`(To be calculated)`, pageWidth - 14, yPosition, { align: "right" });
      yPosition += 8;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(`TOTAL:`, 14, yPosition);
      doc.text(`₱${getCartTotal().toFixed(2)}`, pageWidth - 14, yPosition, { align: "right" });
      yPosition += 8;

      // Footer notes
      doc.setFontSize(7);
      doc.setFont("helvetica", "italic");
      doc.text("This quotation is valid for 30 days from the date of issue.", 14, yPosition);
      yPosition += 4;
      doc.text("Prices are subject to change without prior notice.", 14, yPosition);
      yPosition += 4;
      doc.text("Delivery terms and shipping costs will be confirmed upon order.", 14, yPosition);
      yPosition += 8;

      doc.setFont("helvetica", "normal");
      doc.text("Thank you for choosing Excel Asia Technologies Inc.", 14, yPosition);
      yPosition += 4;
      doc.text("Your Trusted Partner in Industrial Chemicals, Water Filtration", 14, yPosition);
      yPosition += 4;
      doc.text("System & Supplies, Water Treatment Solutions, and Waste Water", 14, yPosition);
      yPosition += 4;
      doc.text("Treatment Services.", 14, yPosition);

      // Save PDF
      doc.save(`Quotation-${Date.now()}.pdf`);
    };
  };

  /**
   * Handle quantity increment
   */
  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  /**
   * Handle quantity decrement (minimum 1)
   */
  const handleDecrement = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  /**
   * Handle manual quantity input change
   */
  const handleQuantityChange = (productId: string, value: string) => {
    const quantity = parseInt(value);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some products to your cart to get started
            </p>
            <Link to="/products">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold mb-1 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <p className="text-lg font-bold text-primary">₱{item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDecrement(item.id, item.quantity)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleIncrement(item.id, item.quantity)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <p className="text-sm font-semibold">
                      Subtotal: ₱{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                {/* Customer Information Fields */}
                <div className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="customerName">Name *</Label>
                    <Input
                      id="customerName"
                      type="text"
                      placeholder="Enter your name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerContact">Contact Number/Email *</Label>
                    <Input
                      id="customerContact"
                      type="text"
                      placeholder="Enter contact number or email"
                      value={customerContact}
                      onChange={(e) => setCustomerContact(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₱{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ₱{getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button className="w-full mb-3" size="lg" onClick={handlePrintQuotation}>
                  Print Quotation
                </Button>

                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
