import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import { Beaker, Wrench, Sparkles, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Index/Home Page Component
 * Main landing page displaying hero section, featured products, and service categories
 */
const Index = () => {
  // Get top 4 featured products for display
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Banner Image and CTA */}
        <section className="relative h-[600px] flex items-center justify-center text-center text-white">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBanner})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Integrated Chemical and Water Technologies for Every Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
              Excel Asia Technologies Inc. delivers high-quality industrial and specialty chemicals, 
              water filtration system & supplies, water treatment solutions, waste water treatment services,
              and advanced environmental engineering tailored for diverse industries.
            </p>
            <Link to="/about">
              <Button size="lg" variant="default" className="shadow-xl">
                Know More
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our top-quality industrial chemicals and specialty products
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* View All Button - Links to Best Selling Category */}
            <div className="text-center">
              <Link to="/products">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Product Section - 4 Service Panels */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Chemical Product Panel */}
              <div className="bg-primary border-2 border-primary-foreground/20 p-8 rounded-lg text-center hover:bg-primary/90 transition-colors">
                <Beaker className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Chemical Product</h3>
                <p className="text-primary-foreground/80">
                  High-quality industrial and specialty chemicals
                </p>
              </div>

              {/* Equipment & Services Panel */}
              <div className="bg-primary border-2 border-primary-foreground/20 p-8 rounded-lg text-center hover:bg-primary/90 transition-colors">
                <Wrench className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Equipment & Services</h3>
                <p className="text-primary-foreground/80">
                  Complete water treatment solutions and equipment
                </p>
              </div>

              {/* Chemical Cleaning Panel */}
              <div className="bg-primary border-2 border-primary-foreground/20 p-8 rounded-lg text-center hover:bg-primary/90 transition-colors">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Chemical Cleaning</h3>
                <p className="text-primary-foreground/80">
                  Professional industrial cleaning services
                </p>
              </div>

              {/* Project & Initialization Panel */}
              <div className="bg-primary border-2 border-primary-foreground/20 p-8 rounded-lg text-center hover:bg-primary/90 transition-colors">
                <Shield className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Project & Initialization</h3>
                <p className="text-primary-foreground/80">
                  Complete project management and implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
              </div>
              
              <div className="space-y-12">
                <p className="text-lg text-center leading-relaxed px-4">
                  Excel Asia Technologies Inc. is a trusted leader in industrial chemicals, 
                  environmental engineering, and water treatment solutions. We provide reliable 
                  products and services designed to meet the complex needs of industries across 
                  the Philippines.
                </p>

                <div className="grid md:grid-cols-3 gap-10 mt-12">
                  {/* Our Mission */}
                  <div className="bg-background p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide environmental practical solutions to real world problems through 
                      innovative engineering, technology and services.
                    </p>
                  </div>

                  {/* Our Pledge */}
                  <div className="bg-background p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-primary">Our Pledge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide you honest professional services, prompt deliveries, high quality 
                      materials, best idea that will reduce production cost and technical services 
                      that increase productivity.
                    </p>
                  </div>

                  {/* Our Commitment */}
                  <div className="bg-background p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-primary">Our Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To continuously introduce updated engineering industrial products and services, 
                      to help customers achieve greater efficiency and productivity.
                    </p>
                  </div>
                </div>

                <p className="text-center text-muted-foreground italic px-4 mt-10 leading-relaxed">
                  Through the guidance of God Almighty, we commit to attain and maintain market 
                  leadership by harnessing product and services development in order to meet the 
                  challenge of the times.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
