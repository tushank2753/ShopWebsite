import React from "react";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[#f4f6f5] min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block border border-teal-500 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            CURATED SELECTION
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Discover What <br />
            Defines Modern Living
          </h1>

          <p className="text-gray-500 text-lg leading-9 max-w-xl mb-10">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae. Donec velit neque, auctor sit amet aliquam
            vel.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button className="bg-teal-600 hover:bg-teal-700 transition text-white px-8 py-4 rounded-xl font-semibold">
              Browse Items
            </button>

            <button className="border border-gray-300 hover:bg-white transition px-8 py-4 rounded-xl flex items-center gap-3 text-slate-700 font-semibold">
              <ArrowRight size={20} />
              See All Categories
            </button>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-8 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              Free Shipping
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Verified Quality
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw size={18} />
              Easy Returns
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              24/7 Support
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-[#f7f7f7] p-5 relative flex items-center justify-center">
              <span className="absolute top-4 left-4 border border-gray-300 px-4 py-1 rounded-lg text-sm font-medium text-slate-600 bg-white">
                Best Seller
              </span>

              <img
                src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=600&auto=format&fit=crop"
                alt="bag"
                className="h-48 object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Precision Audio Hub
              </h3>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-teal-600">$219</span>
                <span className="text-gray-400 line-through text-lg">
                  $299
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-teal-300">
            <div className="bg-[#f7f7f7] p-5 relative flex items-center justify-center">
              <span className="absolute top-4 left-4 border border-teal-300 px-4 py-1 rounded-lg text-sm font-medium text-teal-600 bg-[#ecfdf5]">
                Trending Now
              </span>

              <img
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=600&auto=format&fit=crop"
                alt="glasses"
                className="h-40 object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Smart Wearable Pro
              </h3>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-teal-600">$159</span>
                <span className="text-gray-400 line-through text-lg">
                  $229
                </span>
              </div>
            </div>
          </div>

          {/* BIG CARD */}
          <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col md:flex-row">
            
            <div className="bg-[#f7f7f7] relative flex items-center justify-center md:w-[35%] p-6">
              <span className="absolute top-4 left-4 border border-gray-300 px-4 py-1 rounded-lg text-sm font-medium text-slate-600 bg-white">
                Just Launched
              </span>

              <img
                src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=600&auto=format&fit=crop"
                alt="shirt"
                className="h-56 object-contain"
              />
            </div>

            <div className="p-8 flex flex-col justify-center md:w-[65%]">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Essential Daily Companion
              </h2>

              <p className="text-gray-500 leading-8 text-lg mb-6">
                Proin eget tortor risus. Vivamus magna justo, lacinia eget
                consectetur sed, convallis at tellus curabitur.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-teal-600">$99</span>
                <span className="text-gray-400 line-through text-xl">
                  $149
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;