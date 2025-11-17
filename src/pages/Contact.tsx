import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Contact Page Component
 * Displays company contact information with click-to-copy functionality
 */
const Contact = () => {
  const { toast } = useToast();

  /**
   * Copy text to clipboard and show toast notification
   */
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for inquiries about our products and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                  onClick={() => copyToClipboard("139 Ground Floor, Congressional Avenue, Project 8, Quezon City, Philippines", "Address")}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sales Office</h3>
                    <p className="text-muted-foreground">
                      139 Ground Floor, Congressional Avenue,<br />
                      Project 8, Quezon City, Philippines
                    </p>
                    <p className="text-xs text-primary mt-2">Click to copy</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p 
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors p-2 rounded hover:bg-secondary/50"
                      onClick={() => copyToClipboard("8920-9710", "Phone number")}
                    >
                      8920-9710 <span className="text-xs text-primary ml-2">(click to copy)</span>
                    </p>
                    <p 
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors p-2 rounded hover:bg-secondary/50"
                      onClick={() => copyToClipboard("8986-7149", "Phone number")}
                    >
                      8986-7149 <span className="text-xs text-primary ml-2">(click to copy)</span>
                    </p>
                    <p 
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors p-2 rounded hover:bg-secondary/50"
                      onClick={() => copyToClipboard("8546-0593", "Phone number")}
                    >
                      8546-0593 <span className="text-xs text-primary ml-2">(click to copy)</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                  onClick={() => copyToClipboard("info@excelasiatech.com", "Email")}
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@excelasiatech.com
                    </p>
                    <p className="text-xs text-primary mt-2">Click to copy</p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Facebook</h3>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Visit our Facebook page
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
