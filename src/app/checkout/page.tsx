'use client'
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
  "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
  "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

export default function Checkout() {
  const { cartItems } = useCart()
  
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId)
    return sum + (parseFloat(product?.price.replace(/,/g, '') || '0') * item.quantity)
  }, 0)

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[316px] w-full">
        <Image
          fill
          className="object-cover"
          src="/shop1.png"
          alt="Dining Table"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-4 text-center px-4">
          <Image
            width={77}
            height={77}
            src="/logo1.png"
            alt="Logo"
            className="w-12 md:w-16 lg:w-20"
          />
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium">
            Checkout
          </h1>

          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1 sm:gap-2 group">
              <p className="font-poppins text-sm sm:text-[16px] font-normal text-black">
                Home
              </p>
              <Image
                width={20}
                height={20}
                src="/arrow.png"
                alt="Arrow"
                className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-poppins text-sm sm:text-[16px] font-normal text-black ml-2">
              Checkout
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center bg-white p-4 sm:p-6 md:p-8 font-poppins gap-6 md:gap-8">
        {/* Billing Details Section */}
        <div className="w-full lg:w-[55%] xl:w-[608px] space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold">Billing details</h1>
          
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full space-y-2">
              <p className="text-sm sm:text-[16px] font-medium">First Name</p>
              <input 
                className="h-[60px] md:h-[75px] w-full rounded-[10px] border-2 border-[#9F9F9F] px-4 text-sm sm:text-base" 
                type="text" 
                required 
              />
            </div>
            <div className="w-full space-y-2">
              <p className="text-sm sm:text-[16px] font-medium">Last Name</p>
              <input 
                className="h-[60px] md:h-[75px] w-full rounded-[10px] border-2 border-[#9F9F9F] px-4 text-sm sm:text-base" 
                type="text" 
                required 
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 md:space-y-6">
            {[
              { label: 'Company Name (Optional)', type: 'text' },
              { label: 'Country / Region', type: 'select' },
              { label: 'Street address', type: 'text' },
              { label: 'Town / City', type: 'text' },
              { label: 'Province', type: 'text' },
              { label: 'Zip code', type: 'text' },
              { label: 'Phone', type: 'tel' },
              { label: 'Email address', type: 'email' },
              { label: 'Additional information', type: 'text' },
            ].map((field, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm sm:text-[16px] font-medium">{field.label}</p>
                {field.type === 'select' ? (
                  <select
                    className="h-[60px] md:h-[75px] w-full rounded-[10px] border-2 border-[#9F9F9F] px-4 bg-white text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="h-[60px] md:h-[75px] w-full rounded-[10px] border-2 border-[#9F9F9F] px-4 text-sm sm:text-base"
                    type={field.type}
                    required={!field.label.includes('Optional')}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-[45%] xl:w-[608px] space-y-4 md:space-y-6">
          <div className="flex justify-between">
            <p className="text-xl sm:text-2xl md:text-[24px] font-medium">Product</p>
            <p className="text-xl sm:text-2xl md:text-[24px] font-medium">Subtotal</p>
          </div>

          {/* Products List */}
          <div className="space-y-3 md:space-y-4">
            {cartItems.map((cartItem) => {
              const product = products.find(p => p.id === cartItem.productId)
              if (!product) return null
              
              const price = parseFloat(product.price.replace(/,/g, ''))
              const subtotal = price * cartItem.quantity

              return (
                <div key={cartItem.productId} className="flex justify-between">
                  <div className="text-sm sm:text-[16px] font-normal text-[#9F9F9F]">
                    {product.name} <span className="text-xs">(x{cartItem.quantity})</span>
                  </div>
                  <p className="text-sm sm:text-[16px] font-light">
                    Rs {subtotal.toLocaleString('en-IN')}
                  </p>
                </div>
              )
            })}
          </div>

          <hr className="border-2 border-[#D9D9D9]" />

          {/* Pricing Breakdown */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-between">
              <p className="text-sm sm:text-[16px] font-normal">Subtotal</p>
              <p className="text-sm sm:text-[16px] font-light">
                Rs {cartItems.reduce((sum, item) => {
                  const product = products.find(p => p.id === item.productId)
                  return sum + (parseFloat(product?.price.replace(/,/g, '') || '0') * item.quantity)
                }, 0).toLocaleString('en-IN')}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm sm:text-[16px] font-normal">Shipping</p>
              <p className="text-sm sm:text-[16px] font-light">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm sm:text-[16px] font-normal">Total</p>
              <p className="text-xl sm:text-2xl md:text-[24px] font-bold text-[#B88E2F]">
                Rs {totalPrice.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <hr className="border-2 border-[#D9D9D9]" />

          {/* Payment Methods */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl md:text-[20px] font-medium">Payment Methods</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 p-2 sm:p-3 border rounded-lg">
                <input 
                  type="radio" 
                  id="credit-card" 
                  name="payment" 
                  className="h-4 w-4 sm:h-5 sm:w-5" 
                />
                <label htmlFor="credit-card" className="flex items-center gap-2 text-sm sm:text-base">
                  Credit/Debit Card
                  <div className="flex gap-1 sm:gap-2">
                  </div>
                </label>
              </div>
              
              <div className="flex items-center gap-3 p-2 sm:p-3 border rounded-lg">
                <input 
                  type="radio" 
                  id="paypal" 
                  name="payment" 
                  className="h-4 w-4 sm:h-5 sm:w-5" 
                />
                <label htmlFor="paypal" className="flex items-center gap-2 text-sm sm:text-base">
                  PayPal
                  
                </label>
              </div>

              <div className="flex items-center gap-3 p-2 sm:p-3 border rounded-lg">
                <input 
                  type="radio" 
                  id="cod" 
                  name="payment" 
                  className="h-4 w-4 sm:h-5 sm:w-5" 
                />
                <label htmlFor="cod" className="text-sm sm:text-[16px] font-medium">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-center">
            <button className="h-[50px] sm:h-[64px] w-full sm:w-[215px] rounded-[12px] sm:rounded-[15px] border-2 border-black text-sm sm:text-base transition-all hover:bg-black hover:text-white">
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-[#FAF4F4] px-4 sm:px-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid max-w-screen-xl gap-8 grid-cols-1 md:grid-cols-3">
          {[
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
          ].map((item, index) => (
            <div key={index} className="text-center p-4">
              <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-medium">
                {item.title}
              </h2>
              <p className="font-poppins mx-auto mt-2 text-sm md:text-base text-gray-600 max-w-xs md:max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}