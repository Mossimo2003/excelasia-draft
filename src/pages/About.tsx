import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Award, Users } from "lucide-react";

/**
 * About Page Component
 * Displays company information, mission, vision, and values
 */
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Excel Asia Technologies Inc.</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your Trusted Partner in Industrial Chemicals, Water Filtration System & Supplies, 
              Water Treatment Solutions, and Waste Water Treatment Services
            </p>
          </div>

          {/* Company Overview */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Excel Asia Technologies Inc. is a leading provider of high-quality industrial chemicals, 
                specialty chemicals, water filtration system & supplies, water treatment solutions, 
                and waste water treatment services in the Philippines.
                With years of experience in the industry, we have established ourselves as a reliable 
                partner for companies across various sectors including manufacturing, food and beverage, 
                automotive, electronics, and utilities.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide superior quality industrial chemicals, water filtration system & supplies, 
                  water treatment solutions, and waste water treatment services that meet the evolving 
                  needs of our clients, while maintaining the highest standards of safety, reliability, 
                  and environmental responsibility.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred supplier of industrial chemicals and 
                  water treatment solutions in the Philippines, recognized for our commitment 
                  to quality, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Excel Asia Technologies Inc.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on the quality of our products and services
                </p>
              </div>

              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent delivery and dependable solutions you can count on
                </p>
              </div>

              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our products and processes
                </p>
              </div>

              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Prioritizing the safety of our clients, employees, and environment
                </p>
              </div>

              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Customer Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding and exceeding customer expectations
                </p>
              </div>

              <div className="p-6 border rounded-lg text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Conducting business with honesty and transparency
                </p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16 bg-secondary rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-bold text-lg mb-3 text-primary">Chemical Products</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basic Industrial Chemicals</li>
                  <li>• Specialty Chemicals</li>
                  <li>• Industrial Chemical Cleaning Products</li>
                  <li>• Maintenance Chemicals</li>
                  <li>• Ion Exchange Resins</li>
                  <li>• Analytical Reagents</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-primary">Equipment & Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Water Treatment Systems</li>
                  <li>• Wastewater Treatment Plants</li>
                  <li>• Industrial Equipment Supply</li>
                  <li>• Chemical Cleaning Services</li>
                  <li>• System Design & Installation</li>
                  <li>• Operation & Maintenance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our products and services, 
              or to discuss your specific requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">View Products</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
