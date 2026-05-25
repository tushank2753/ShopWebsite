import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Modern Menswear",
    products: "245 products",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Everyday Essentials",
    products: "189 products",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Beauty Rituals",
    products: "112 products",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Travel Gear",
    products: "327 products",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
];

const FashionSection = () => {
  return (
    <div className="bg-[#f7f8f7] py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="fashion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col justify-center">
            
            <span className="inline-block w-fit border border-teal-300 text-teal-600 bg-teal-50 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              NEW SEASON
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Winter Lookbook
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-8 mb-8">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam,
              feugiat vitae ultricies eget.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-teal-600" size={20} />
                Curated seasonal selections
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-teal-600" size={20} />
                Exclusive online availability
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-teal-600" size={20} />
                Complimentary shipping included
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-teal-600 hover:bg-teal-700 transition text-white w-fit px-8 py-4 rounded-xl font-semibold flex items-center gap-3">
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-400 mb-5">
                  {item.products}
                </p>

                <button className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View All
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionSection;