import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft, ShoppingCart } from "lucide-react";

/**
 * ProductDetail Page Component
 * Displays detailed product information including images, description, and recommendations
 */
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  // Find the current product by ID
  const product = products.find((p) => p.id === id);

  // If product not found, show error message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /**
   * Get related/recommended products from the same category
   * Exclude current product and limit to 4 items
   */
  const recommendedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  /**
   * Handle add to cart button click
   */
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>

          {/* Product Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col">
              {/* Category Badge */}
              <span className="inline-block text-sm text-muted-foreground mb-4">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Price */}
              <p className="text-3xl font-bold text-primary mb-6">
                ₱{product.price.toFixed(2)}
              </p>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Button */}
              <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              {/* Company Address */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-2">Sales Office</h3>
                <p className="text-sm text-muted-foreground">
                  139 Ground Floor, Congressional Avenue, Project 8, Quezon City, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Products Section */}
          {recommendedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
