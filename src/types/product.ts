/**
 * Product category types matching the company's product lines
 */
export type ProductCategory = 
  | "BASIC INDUSTRIAL CHEMICALS"
  | "INDUSTRIAL CHEMICAL CLEANING"
  | "SPECIALTY CHEMICALS"
  | "MAINTENANCE CHEMICALS"
  | "INSTITUTIONAL PRODUCTS"
  | "ION EXCHANGE RESINS"
  | "COAGULANTS/POLYELECTROLYTE"
  | "ANALYTICAL REAGENT";

/**
 * Product interface defining the structure of each product
 */
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  isFeatured?: boolean;
}

/**
 * Cart item interface extending Product with quantity
 */
export interface CartItem extends Product {
  quantity: number;
}
