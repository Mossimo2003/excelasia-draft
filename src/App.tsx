import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Achievements from "./pages/Achievements";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import EquipmentServices from "./pages/EquipmentServices";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Main App Component
 * Sets up routing, global providers, and toast notifications
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/equipment-services" element={<EquipmentServices />} />
            
            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
