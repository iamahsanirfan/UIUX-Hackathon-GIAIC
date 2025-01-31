import Image from "next/image"
import Link from "next/link"

export default function Main() {
    return (
        <main className="relative w-full overflow-hidden">
            {/* Hero Section 2 */}
            <section className="relative bg-[#FAF4F4] py-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Table 1 */}
                    <div className="relative group">
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src="/table1.png"
                                alt="Table 1"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl font-medium mb-4">Side Table</h2>
                            <div className="flex flex-col items-start">
                                <a href="#" className="text-xl font-medium hover:underline">
                                    View More
                                </a>
                                <div className="w-32 border-t-2 border-black mt-2" />
                            </div>
                        </div>
                    </div>

                    {/* Table 2 */}
                    <div className="relative group">
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src="/table2.png"
                                alt="Table 2"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl font-medium mb-4">Side Table</h2>
                            <div className="flex flex-col items-start">
                                <a href="#" className="text-xl font-medium hover:underline">
                                    View More
                                </a>
                                <div className="w-32 border-t-2 border-black mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Picks Section */}
            <section className="py-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-medium mb-4">Top Picks For You</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
                    </p>

                          {/* Related Products Section */}
      <section className="bg-gray-50 px-4 py-12 md:px-8 md:py-24 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-poppins font-medium text-3xl md:text-4xl text-center mb-8 md:mb-12">
            Related Products
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {products
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
                </div>
            </section>

            {/* Asgard Sofa Section */}
<section className="py-24 px-4 md:px-8 lg:px-16 bg-[#FFF9E5]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square">
            <Image
                src="/asgard.png"
                alt="Asgard Sofa"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="text-center lg:text-left">
            <span className="text-2xl mb-4 block">New Arrival</span>
            <h2 className="text-5xl font-bold mb-8">Asgaard Sofa</h2>
            <Link 
                href="/products/14"  // Direct link to product ID 14
                className="px-12 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
                Order Now
            </Link>
        </div>
    </div>
</section>

            {/* Blog Section */}
            <section className="py-24 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-medium mb-4">Our Blogs</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Find a bright ideal to suit your taste with our great selection
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <article key={index} className="group">
                                <div className="relative aspect-square mb-4 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-normal mb-4">{blog.title}</h3>
                                <a href="#" className="text-2xl font-medium hover:underline">
                                    Read More
                                </a>
                                <div className="w-32 border-t-2 border-black mt-2 mx-auto" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="relative h-[450px]">
                <div className="absolute inset-0">
                    <Image
                        src="/rectangle4.png"
                        alt="Instagram"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center bg-black/30">
                    <h2 className="text-5xl font-bold text-white mb-4">Our Instagram</h2>
                    <p className="text-xl text-white mb-8">Follow our store on Instagram</p>
                    <button className="px-12 py-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-300">
                        Follow Us
                    </button>
                </div>
            </section>
        </main>
    )
}

const products = [
        { id: 1, image: "/trenton.png", name: "Trenton modular single sofa 3", price: "25,000.00" },
        { id: 2, image: "/dining_table.png", name: "Granite dining table with chair", price: "25,000.00" },
        { id: 3, image: "/outdoor_bar.png", name: "Outdoor bar table and stool", price: "25,000.00" },
        { id: 4, image: "/console.png", name: "Plain console with teak mirror", price: "25,000.00" },
]

const blogs = [
    { image: "/rectangle.png", title: "Going all-in with millennial design" },
    { image: "/rectangle2.png", title: "Exploring new trends in modern furniture" },
    { image: "/rectangle3.png", title: "Sustainable materials in contemporary design" },
]