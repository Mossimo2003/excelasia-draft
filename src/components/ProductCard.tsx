import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

/**
 * ProductCard component displays individual product information
 * Includes product image, name, price, category and add to cart button
 */
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  /**
   * Handle add to cart action
   */
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          {/* Product Image Placeholder */}
          <div className="aspect-square bg-secondary rounded-t-lg flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          {/* Product Category */}
          <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
          
          {/* Product Name */}
          <CardTitle className="text-base mb-2 line-clamp-2">{product.name}</CardTitle>
          
          {/* Product Price */}
          <p className="text-lg font-bold text-primary">₱{product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full"
            variant="default"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
