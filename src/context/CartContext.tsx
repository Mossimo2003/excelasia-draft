import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types/product";
import { toast } from "sonner";

/**
 * Cart context interface defining available cart operations
 */
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Create context with undefined default value
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * CartProvider component manages shopping cart state and operations
 * Persists cart data to localStorage
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("excel-asia-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("excel-asia-cart", JSON.stringify(cart));
  }, [cart]);

  /**
   * Add product to cart or increment quantity if already exists
   */
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        toast.success("Updated cart quantity");
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      toast.success("Added to cart");
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  /**
   * Remove product from cart completely
   */
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Removed from cart");
  };

  /**
   * Update quantity of a specific product in cart
   */
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear all items from cart
   */
  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };

  /**
   * Calculate total price of all items in cart
   */
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /**
   * Get total number of items in cart
   */
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/**
 * Custom hook to access cart context
 * Throws error if used outside CartProvider
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
