import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

/**
 * Footer component with company information and links
 * Displays address, contact details, and important site links
 */
const Footer = () => {
  return (
    <footer className="bg-secondary border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Excel Asia Technologies Inc.</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Integrated Chemical and Water Technologies for Every Industry
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>8920-9710</p>
                  <p>8986-7149</p>
                  <p>8546-0593</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <p>139 Ground Floor, Congressional Avenue, Project 8, Quezon City, Philippines</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@excelasiatech.com" className="hover:text-primary transition-colors">
                  info@excelasiatech.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/equipment-services" className="hover:text-primary transition-colors">
                  Equipment & Services
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Excel Asia Technologies Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
