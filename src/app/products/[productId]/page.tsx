// app/products/[productId]/page.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export default function ProductPage() {
  const params = useParams();
  const { productId } = params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product = products.find(p => p.id.toString() === productId);
    setSelectedProduct(product || null);
  }, [productId]);

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct.id, quantity);
  };

  return (
    <main className="bg-white">
      {/* Breadcrumb Navigation */}
      <div className="h-24 flex items-center px-4 md:px-8 lg:px-16 border-b border-neutral-100">
        <nav className="flex items-center gap-3 md:gap-4">
          <BreadcrumbLink href="/" label="Home" />
          <BreadcrumbLink href="/shop" label="Shop" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-px bg-black/20" />
            <p className="font-poppins text-black truncate max-w-[160px] md:max-w-none">
              {selectedProduct.name}
            </p>
          </div>
        </nav>
      </div>

      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-8 p-8 md:p-12 lg:p-16">
        {/* Image Section */}
        <div className="flex-1 bg-[#FFF9E5] rounded-xl p-4 md:p-8 flex items-center justify-center aspect-square max-h-[800px]">
          <div className="relative w-full h-full">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center p-4 md:p-8"
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-6 lg:gap-8">
          <div className="space-y-2">
            <h1 className="font-poppins text-3xl md:text-4xl font-light">
              {selectedProduct.name}
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-neutral-400">
              Rs {selectedProduct.price}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
              <HalfStarIcon />
            </div>
            <span className="h-6 w-px bg-neutral-400/20" />
            <p className="font-poppins text-sm text-neutral-400">5 Customer Reviews</p>
          </div>

          <p className="font-poppins text-neutral-600 leading-relaxed text-justify">
            {selectedProduct.description || "Premium quality product with excellent craftsmanship."}
          </p>

          <ProductOptionSection title="Size">
            <div className="flex gap-3 flex-wrap">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <SizeButton key={size} size={size} selected={size === 'L'} />
              ))}
            </div>
          </ProductOptionSection>

          <ProductOptionSection title="Color">
            <div className="flex gap-3 flex-wrap">
              {['#816DFA', '#000000', '#CDBA7B'].map((color) => (
                <ColorButton key={color} color={color} />
              ))}
            </div>
          </ProductOptionSection>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center justify-between w-32 h-16 px-4 border-2 rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl hover:opacity-70"
              >
                -
              </button>
              <span className="font-poppins">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="text-xl hover:opacity-70"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 h-16 border-2 rounded-lg hover:bg-black hover:text-white transition-colors text-lg"
            >
              Add To Cart
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <hr className="border-t border-neutral-200" />
            <ProductSpec label="SKU" value={`PRD${selectedProduct.id.toString().padStart(4, '0')}`} />
            <ProductSpec label="Category" value="Furniture" />
            <ProductSpec label="Tags" value="Modern, Luxury, Comfort" />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="bg-gray-50 px-4 py-12 md:px-8 md:py-24 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins font-medium text-3xl md:text-4xl text-center mb-8 md:mb-12">
            Related Products
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {products
              .filter(p => p.id !== selectedProduct.id)
              .slice(0, 4)
              .map((product) => (
                <Link 
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group block transition-transform hover:scale-[1.02]"
                >
                  <div className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md md:p-6">
                    <div className="relative mb-4 aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <p className="line-clamp-2 text-base font-medium text-gray-800 md:text-lg">
                        {product.name}
                      </p>
                      <p className="text-xl font-bold text-gray-900 md:text-2xl">
                        Rs {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Components
const BreadcrumbLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="flex items-center gap-2 group transition-colors">
    <p className="font-poppins text-neutral-400 group-hover:text-black text-sm md:text-base">
      {label}
    </p>
    <Image
      width={20}
      height={20}
      src="/arrow.png"
      alt="Arrow"
      className="opacity-50 group-hover:opacity-100 transition-opacity"
    />
  </Link>
);

const StarIcon = () => (
  <Image
    width={24}
    height={24}
    src="/filled_star.png"
    alt="Star"
    className="transition-opacity hover:opacity-80"
  />
);

const HalfStarIcon = () => (
  <Image
    width={24}
    height={24}
    src="/half_star.png"
    alt="Half Star"
    className="transition-opacity hover:opacity-80"
  />
);

const ProductOptionSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <p className="font-poppins text-neutral-400 text-lg">{title}</p>
    {children}
  </div>
);

const SizeButton = ({ size, selected }: { size: string; selected: boolean }) => (
  <button
    className={`w-12 h-12 rounded-lg border-2 transition-all ${
      selected
        ? 'border-[#B88E2F] bg-[#FBEBB5] shadow-sm'
        : 'border-[#FFF9E5] bg-[#FFF9E5] hover:bg-[#FBEBB5]'
    }`}
  >
    {size}
  </button>
);

const ColorButton = ({ color }: { color: string }) => (
  <button
    className="w-10 h-10 rounded-full border-2 border-transparent hover:border-gray-200 transition-all shadow-sm"
    style={{ backgroundColor: color }}
  />
);

const ProductSpec = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-4">
    <span className="font-poppins text-neutral-400 w-20">{label}</span>
    <span className="font-poppins text-neutral-600">{value}</span>
  </div>
);