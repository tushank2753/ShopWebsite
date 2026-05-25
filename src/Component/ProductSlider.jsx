import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Portable Power Station",
    desc: "Donec sollicitudin molestie malesuada cras.",
    price: "$175",
    oldPrice: "$240",
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    tag: "",
  },
  {
    id: 2,
    title: "Urban Tech Backpack",
    desc: "Nulla porttitor accumsan tincidunt sed lectus.",
    price: "$89",
    oldPrice: "$120",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 3,
    title: "Ergonomic Desk Lamp",
    desc: "Curabitur aliquet quam id dui posuere blandit.",
    price: "$64",
    oldPrice: "$85",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    id: 4,
    title: "Ceramic Aroma Diffuser",
    desc: "Pellentesque in ipsum id orci porta dapibus.",
    price: "$42",
    oldPrice: "$58",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop",
    tag: "",
  },
  {
    id: 5,
    title: "Minimal Smart Watch",
    desc: "Vestibulum ac diam sit amet quam vehicula.",
    price: "$129",
    oldPrice: "$170",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    id: 6,
    title: "Wireless Headphones",
    desc: "Praesent sapien massa convallis a pellentesque.",
    price: "$99",
    oldPrice: "$149",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    tag: "",
  },
  {
    id: 7,
    title: "Classic Sneakers",
    desc: "Mauris blandit aliquet elit eget tincidunt.",
    price: "$75",
    oldPrice: "$110",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
    tag: "Sale",
  },
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  // RESPONSIVE ITEMS
  const getItemsPerView = () => {
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const itemsPerView = getItemsPerView();

  const nextSlide = () => {
    if (current < products.length - itemsPerView) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="bg-[#f5f7f6] py-14 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-gray-200 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center hover:bg-gray-100"
        >
          <ChevronLeft className="text-gray-600" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-gray-200 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center hover:bg-gray-100"
        >
          <ChevronRight className="text-gray-600" />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                current * (100 / itemsPerView)
              }%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="
                  min-w-full
                  md:min-w-[48%]
                  lg:min-w-[24%]
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-sm
                "
              >
                {/* IMAGE */}
                <div className="bg-[#f8f8f8] h-[240px] md:h-[260px] flex items-center justify-center relative">
                  
                  {item.tag && (
                    <span className="absolute top-4 left-4 border border-teal-300 text-teal-600 bg-teal-50 px-4 py-1 rounded-lg text-sm font-medium">
                      {item.tag}
                    </span>
                  )}

                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-40 md:h-44 object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm md:text-lg mb-5">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-bold text-teal-600">
                      {item.price}
                    </span>

                    <span className="text-gray-400 line-through text-lg md:text-xl">
                      {item.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({
            length: products.length - itemsPerView + 1,
          }).map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-teal-600"
                  : "w-3 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;