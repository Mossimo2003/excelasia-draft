import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2 } from "lucide-react";

/**
 * Clients Page Component
 * Displays list of companies supplied with industrial chemicals and equipment
 */
const Clients = () => {
  /**
   * List of client companies across various industries
   * These companies are supplied with industrial chemicals, water filtration system & supplies,
   * water treatment solutions, waste water treatment services, and equipment
   */
  const clients = [
    "Amertron, Incorporated",
    "A Tung Chingco Mfg. Corp",
    "Apex Intec Philippines Co.",
    "Balayan Distillery, Inc.",
    "Carmelray Ind'l Park Corp.",
    "Central Azucarera De Don Pedro",
    "Coca-Cola Bottlers Phil., Inc.",
    "Destileria Limtuaco & Co., Inc.",
    "Ebara Benguet, Inc.",
    "Foodsphere (CDO), Inc.",
    "Ginebra San Miguel, Inc.",
    "Hitachi Global GST Phils. Inc.",
    "Honda Cars Phils., Inc.",
    "Ingasco, Inc.",
    "Interphil Laboratories, Inc.",
    "Juken Sangyo Phils., Corp.",
    "Kedica Phils. Corp.",
    "Leslie Corporation",
    "Max's Makati, Inc.",
    "Mitsubishi Motors Phils.",
    "Miyoshi Tech., Phils. Inc.",
    "Multi-Tek Fasteners Inc.",
    "National Power Corporation",
    "Nidec Phils. Corp.",
    "Nidec Precision Phils., Corp",
    "Nidec Subic Phils. Corp",
    "Nidec Copal Phil. Corp.",
    "O.M. Electrolyzing Inc.",
    "Panasonic Mfg. Phils. Corp",
    "Phil., Beverage Corp.",
    "Philippine Auto Components, Inc",
    "Purebev International",
    "Puyat Steel Corporation",
    "RFM Corporation",
    "Sanyo Capacitor Phils., Inc.",
    "Sanyo Semiconductor Mfg., Corp",
    "San Technology, Inc.",
    "Splash Manufacturing Corp.",
    "Sugarland Corporation",
    "Surtec, Phils. Inc.",
    "Takata Philippines Inc.",
    "Team Pacific Corp.",
    "Tong-Hsing Electronics Phils., Inc.",
    "Toyota Motor Phils., Corp.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Building2 className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To name a few of companies we supply with industrial chemicals, 
              water filtration system & supplies, water treatment solutions, 
              waste water treatment services, and equipment
            </p>
          </div>

          {/* Clients Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-md hover:border-primary transition-all duration-300 bg-card"
                >
                  <p className="text-center font-medium">{client}</p>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center p-8 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Excel Asia Technologies Inc. has built strong partnerships with leading companies 
                across various industries including manufacturing, food and beverage, automotive, 
                electronics, and utilities. Our commitment to quality products and reliable service 
                has made us a preferred supplier for industrial chemicals, water filtration system & supplies, 
                water treatment solutions, and waste water treatment services.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
