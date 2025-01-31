import Image from "next/image"
import Link from "next/link"


export default function Shop(){
    return (
        <main>
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
                    <h1 className="font-poppins text-3xl font-medium md:text-4xl lg:text-[48px]">Shop</h1>

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
            Shop
          </p>
          
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="w-full bg-[#FAF4F4]">
                <div className="mx-auto flex h-auto flex-col justify-between gap-4 px-4 py-4 md:h-[100px] md:flex-row md:items-center md:px-8 lg:px-16">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Image width={25} height={25} src="/filter.png" alt="Filter" />
                            <p className="font-poppins text-base md:text-[20px]">Filter</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <Image width={28} height={28} src="/grid.png" alt="Grid view" />
                            <Image width={24} height={24} src="/view.png" alt="List view" />
                        </div>

                        <div className="hidden h-6 w-px bg-[#000000] md:block" />

                        <p className="font-poppins text-sm md:text-base">
                            Showing 1–16 of 32 results
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <p className="font-poppins text-base md:text-[20px]">Show</p>
                            <div className="flex h-8 w-12 items-center justify-center rounded border border-[#D9D9D9] bg-white md:h-10">
                                <span className="text-[#9F9F9F]">16</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <p className="font-poppins text-base md:text-[20px]">Sort by</p>
                            <div className="flex h-8 w-32 items-center rounded border border-[#D9D9D9] bg-white px-3 md:h-10 md:w-48">
                                <span className="text-[#9F9F9F]">Default</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="bg-gray-50 px-4 py-12 md:px-8 md:py-24 lg:px-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
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
              <div className="text-center">
                <p className="mb-2 line-clamp-2 text-base font-medium text-gray-800 md:text-lg">
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
    </section>

            {/* Pagination */}
            <section className="px-4 py-8 md:px-8 lg:px-16">
                <div className="flex justify-center">
                    <nav className="flex flex-wrap items-center justify-center gap-2">
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                className={`flex h-8 w-8 items-center justify-center rounded-md border-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] md:h-10 md:w-10 md:text-base ${
                                    page === 1
                                        ? 'border-[#B88E2F] bg-[#FBEBB5] text-gray-800'
                                        : 'border-[#FFF9E5] bg-[#FFF9E5] text-gray-600 hover:bg-[#FBEBB5]'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="flex h-8 items-center justify-center gap-1 rounded-md border-2 border-[#FFF9E5] bg-[#FFF9E5] px-3 text-sm text-gray-600 transition-colors duration-200 hover:bg-[#FBEBB5] focus:outline-none focus:ring-2 focus:ring-[#B88E2F] md:h-10 md:px-4 md:text-base">
                            Next
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </nav>
                </div>
            </section>

            {/* Policy Section */}
            <div className="bg-[#FAF4F4] px-4 py-12 md:py-24">
                <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-3">
                    {policyItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <h2 className="font-poppins text-2xl font-medium md:text-3xl">
                                {item.title}
                            </h2>
                            <p className="font-poppins mx-auto mt-2 max-w-md text-base text-gray-600 md:text-lg">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

const products = [
  { id: 1, image: "/trenton.png", name: "Trenton modular single sofa 3", price: "25,000.00" },
  { id: 2, image: "/dining_table.png", name: "Granite dining table with chair", price: "25,000.00" },
  { id: 3, image: "/outdoor_bar.png", name: "Outdoor bar table and stool", price: "25,000.00" },
  { id: 4, image: "/console.png", name: "Plain console with teak mirror", price: "25,000.00" },
  { id: 5, image: "/grain.png", name: "Grain coffee table", price: "15,000.00" },
  { id: 6, image: "/Kent.png", name: "Kent coffee table", price: "251,000.00" },
  { id: 7, image: "/round.png", name: "Round coffee table", price: "255,000.00" },
  { id: 8, image: "/teak.png", name: "Teak coffee table", price: "25,200.00" },
  { id: 9, image: "/plain.png", name: "Plain console", price: "258,200.00" },
  { id: 10, image: "/sjp.png", name: "SJP", price: "200,000.00" },
  { id: 11, image: "/sideboard.png", name: "Teak sideboard", price: "20,000.00" },
  { id: 12, image: "/bella.png", name: "Chair & table", price: "100,000.00" },
  { id: 13, image: "/table1.png", name: "Side table", price: "258,000.00" },
  { id: 14, image: "/asgard.png", name: "Asgard sofa", price: "250,000.00" },
  { id: 15, image: "/maya.png", name: "Maya sofa", price: "115,000.00" },
  { id: 16, image: "/outdoor.png", name: "Outdoor sofa", price: "244,000.00" },]

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
]