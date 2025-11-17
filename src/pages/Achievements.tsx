import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award } from "lucide-react";

/**
 * Achievements Page Component
 * Displays accomplished chemical cleaning projects in a table format
 */
const Achievements = () => {
  /**
   * List of accomplished chemical cleaning projects
   * Each project includes company name and location
   */
  const accomplishedProjects = [
    {
      company: "UHDE Petrocorp Project",
      location: "Mariveles, Bataan",
    },
    {
      company: "Manila Bulletin Publishing Corp.",
      location: "Intramuros, Manila",
    },
    {
      company: "Noah's Paper Mills",
      location: "Calumpang, Marikina",
    },
    {
      company: "San Isidro Municipal Water",
      location: "San Isidro, Nueva Ecija",
    },
    {
      company: "Splash Corporation",
      location: "Valenzuela City",
    },
    {
      company: "Air Liquide Phils. Inc.",
      location: "Pasig City",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Award className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excel Asia Technologies Inc. has successfully completed numerous chemical cleaning projects 
              for leading companies across various industries.
            </p>
          </div>

          {/* Accomplished Projects Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Accomplished Chemical Cleaning Projects</h2>
            
            {/* Projects Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                    <TableHead className="text-primary-foreground font-bold">Company/Project</TableHead>
                    <TableHead className="text-primary-foreground font-bold">Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accomplishedProjects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{project.company}</TableCell>
                      <TableCell>{project.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Additional Information */}
            <div className="mt-12 p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold mb-4">Services Provided</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Chemical Cleaning of Process Pipes, Boilers, and Heat Exchangers</li>
                <li>• Power Plants Oil/Fuel Lines Cleaning</li>
                <li>• Equipment Maintenance and Restoration</li>
                <li>• Industrial Scale Removal and Prevention</li>
                <li>• Professional Technical Support and Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
