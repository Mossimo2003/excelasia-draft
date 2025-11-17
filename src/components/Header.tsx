import { Link } from "react-router-dom";
import { ShoppingCart, Facebook, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

/**
 * Header component with navigation and cart
 * Displays company logo, navigation menu, social icons, and shopping cart with item count
 */
const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const { toast } = useToast();

  /**
   * Copy email to clipboard
   */
  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("info@excelasiatech.com").then(() => {
      toast({
        title: "Email Copied!",
        description: "info@excelasiatech.com copied to clipboard",
      });
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Excel Asia Technologies Inc." className="h-16 w-auto" />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/equipment-services" className="text-sm font-medium transition-colors hover:text-primary">
              Equipment & Services
            </Link>
            <Link to="/achievements" className="text-sm font-medium transition-colors hover:text-primary">
              Achievements
            </Link>
            <Link to="/clients" className="text-sm font-medium transition-colors hover:text-primary">
              Clients
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Social Icons and Cart */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>

            {/* Gmail Icon */}
            <button
              onClick={copyEmail}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Copy Email"
            >
              <Mail className="h-5 w-5" />
            </button>

            {/* Shopping Cart with Count Badge */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center space-x-4 pb-4 overflow-x-auto">
          <Link to="/" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/equipment-services" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Equipment
          </Link>
          <Link to="/achievements" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Achievements
          </Link>
          <Link to="/clients" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Clients
          </Link>
          <Link to="/contact" className="text-xs font-medium whitespace-nowrap transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
