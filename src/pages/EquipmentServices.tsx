import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Droplets, Leaf, Wrench, Sparkles } from "lucide-react";

/**
 * Equipment & Services Page Component
 * Displays water treatment, wastewater treatment, industrial equipment, and services offered
 */
const EquipmentServices = () => {
  /**
   * Industrial equipment categories - Pumps and Motors
   */
  const pumps = [
    "Centrifugal Pump (Direct / Close)",
    "Jet Pump",
    "Submersible Pump",
    "Gear Pump",
    "Process Pump",
    "Fire Pump",
    "Turbine Pump",
  ];

  const motors = [
    "Induction Motor",
    "Explosion Proof Motor",
    "Vertical Hollow Shaft Motor",
    "Gear Motor",
    "Jet Motor",
    "Variable Drive Motor",
    "Vertical Motor",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Equipment & Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive water treatment solutions, equipment supply, and professional services 
              for industrial and municipal applications
            </p>
          </div>

          {/* Water Treatment Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Water Treatment</h2>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground mb-6">
                Design, Fabrication and installation of water treatment facilities such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Activated Carbon Filter</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Chlorinator</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Dealkalizer</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Degasifier</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Demineralizers/Deionizer</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Potable Water System</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Micron Filter</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Multi-Media Filter</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Reverse Osmosis System</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Wastewater Treatment Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Waste Water Treatment</h2>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground mb-6">
                Design Engineering, Fabrication, Supply, equipment and installation of Domestic, 
                Industrial Waste Water Treatment Plant such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Sequential Batch Reactor</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Multimedia Filter</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Dissolved Air Flotation</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Oil and Grease Separator</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Rotating Biological Contactor</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Sludge Separator and Filter Press</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Sand Filter</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">Water Softener</h3>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold mb-2">UV Disinfection Unit</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Industrial Equipment Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Industrial Equipment</h2>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                    <TableHead className="text-primary-foreground font-bold w-1/2">PUMPS</TableHead>
                    <TableHead className="text-primary-foreground font-bold w-1/2">MOTORS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Create rows with pump and motor side by side */}
                  {Math.max(pumps.length, motors.length) > 0 &&
                    Array.from({ length: Math.max(pumps.length, motors.length) }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {pumps[index] || ""}
                        </TableCell>
                        <TableCell className="font-medium">
                          {motors[index] || ""}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Services Offered Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Services Offered</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-primary">Chemical Cleaning</h3>
                <p className="text-muted-foreground">
                  Chemical Cleaning of Process Pipes, Boilers, Heat Exchangers, Power Plants 
                  Oil/Fuel Lines and other equipment
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-primary">Regeneration & Reactivation</h3>
                <p className="text-muted-foreground">
                  Regeneration and Reactivation of Ion Exchange Resins
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-primary">Operation & Maintenance</h3>
                <p className="text-muted-foreground">
                  Operation and Maintenance of Water and Waste Water Treatment Plant
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-primary">Disinfection Services</h3>
                <p className="text-muted-foreground">
                  Disinfections of Potable Water Lines, Reactors and Equipment
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-3 text-primary">Architectural Finishing</h3>
                <p className="text-muted-foreground">
                  Professional architectural finishing services for industrial facilities
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentServices;
