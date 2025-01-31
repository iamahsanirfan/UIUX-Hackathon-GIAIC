'use client'
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getSubtotal 
  } = useCart();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[316px] w-full">
                <Image
                    fill
                    className="object-cover"
                    src="/shop1.png"
                    alt="Dining Table"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                    <Image
                        width={77}
                        height={77}
                        src="/logo1.png"
                        alt="Logo"
                        className="h-auto w-16 md:w-20"
                    />
                    <h1 className="font-poppins text-3xl font-medium md:text-4xl lg:text-[48px]">Cart</h1>

                    <div className="flex">
                    <Link href="/" className="flex items-center gap-2 group">
          <p className="font-poppins font-normal text-[16px] text-black transition-colors group-hover:text-black">
            Home
          </p>
          <Image
            width={20}
            height={20}
            src="/arrow.png"
            alt="Arrow"
            className="opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        
          <p className="font-poppins font-normal text-[16px] text-black transition-colors group-hover:text-black">
            Cart
          </p>
          
                    </div>
                </div>
            </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 space-y-6">
            <p className="font-poppins text-xl md:text-2xl text-gray-600">
              Your cart is empty
            </p>
            <Link
              href="/shop"
              className="inline-block bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {/* Desktop Table Header */}
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-[#FFF9E5] rounded-lg">
                <p className="font-poppins font-medium">Product</p>
                <p className="font-poppins font-medium text-center">Price</p>
                <p className="font-poppins font-medium text-center">Quantity</p>
                <p className="font-poppins font-medium text-center">Subtotal</p>
                <p className="font-poppins font-medium text-center">Action</p>
              </div>

              {cartItems.map((item) => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;

                return (
                  <div 
                    key={product.id}
                    className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center p-4 border rounded-lg bg-white"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-4 col-span-2 md:col-span-1">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FBEBB5] flex items-center justify-center rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <p className="font-poppins text-sm md:text-base">{product.name}</p>
                    </div>

                    {/* Price */}
                    <p className="font-poppins text-center text-sm md:text-base">
                      Rs {product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.id, item.quantity - 1)}
                        className="w-8 h-8 md:w-10 md:h-10 rounded border flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-poppins text-sm md:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, item.quantity + 1)}
                        className="w-8 h-8 md:w-10 md:h-10 rounded border flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p className="font-poppins text-center text-sm md:text-base">
                      Rs {(parseFloat(product.price.replace(/,/g, '')) * item.quantity).toLocaleString('en-IN')}
                    </p>

                    {/* Remove Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-500 hover:text-red-700 text-sm md:text-base"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Summary */}
            <div className="flex justify-end mt-8 md:mt-12">
              <div className="w-full md:w-[393px] p-4 md:p-6 bg-[#FFF9E5] rounded-lg">
                <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-4 text-center">
                  Cart Totals
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-sm md:text-base font-medium">Subtotal</span>
                    <span className="font-poppins text-sm md:text-base text-[#9F9F9F]">
                      {getSubtotal()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-poppins text-sm md:text-base font-medium">Shipping</span>
                    <span className="font-poppins text-sm md:text-base text-[#9F9F9F]">Free</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-poppins text-sm md:text-base font-medium">Total</span>
                    <span className="font-poppins text-lg md:text-xl font-medium text-[#B88E2F]">
                       {getSubtotal()}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                <Link href="/checkout" className="w-full max-w-[222px]">
      <button className="w-full py-3 md:py-4 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-colors text-sm md:text-base">
        Proceed to Checkout
      </button>
    </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Policy Section */}
      <div className="bg-[#FAF4F4] px-4 py-12 md:py-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {policyItems.map((item, index) => (
            <div key={index} className="text-center px-4">
              <h2 className="font-poppins text-xl md:text-2xl font-medium mb-2 md:mb-4">
                {item.title}
              </h2>
              <p className="font-poppins text-sm md:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const policyItems = [
  {
    title: "Free Delivery",
    description: "For all orders over $50, consectetur adipim scing elit."
  },
  {
    title: "90 Days Return",
    description: "If goods have problems, consectetur adipim scing elit."
  },
  {
    title: "Secure Payment",
    description: "100% secure payment, consectetur adipim scing elit."
  }
];