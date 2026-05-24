import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag, UserCircle2, Heart, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const authRef = useRef(null);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (authRef.current && !authRef.current.contains(e.target)) {
        setShowAuthBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white border-b border-gray-200">
      {/* ================= TOP NAVBAR ================= */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 lg:px-10 xl:px-20 py-4 gap-4">
        {/* ========== TOP ROW ========== */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-teal-600" size={30} />

            <h1 className="text-2xl font-semibold text-gray-800">ShopWise</h1>
          </div>

          {/* MOBILE ICONS */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* SEARCH ICON */}
            <button
              onClick={() => setShowSearchBar(!showSearchBar)}
              className="border-2 border-teal-100 rounded-xl p-2"
            >
              <Search size={24} className="text-teal-600" />
            </button>

            {/* USER ICON */}
            <div className="relative" ref={authRef}>
              <button onClick={() => setShowAuthBox(!showAuthBox)}>
                <UserCircle2 size={24} className="text-gray-600" />
              </button>

              {/* LOGIN BOX */}
              {showAuthBox && (
                <div className="absolute right-0 top-12 w-[280px] bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Welcome Back
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Login for better experience
                    </p>
                  </div>

                  <div className="flex gap-3 p-4">
                    <Link
                      to="/login"
                      className="bg-teal-600 text-white py-3 rounded-lg text-center w-full font-semibold hover:bg-teal-700 transition"
                    >
                      Log In
                    </Link>

                    <Link
                      to="/register"
                      className="border border-gray-300 py-3 rounded-lg text-center w-full font-semibold text-gray-700 hover:bg-gray-100 transition"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Heart */}
            <div className="relative cursor-pointer">
              <Heart size={24} className="text-gray-700" />
              <span className="count">4</span>
            </div>

            {/* CART */}
            <div className="relative cursor-pointer">
              <ShoppingBag size={24} className="text-gray-600" />

              <span className="count">3</span>
            </div>

            {/* MENU BUTTON */}
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <X size={30} className="text-gray-700" />
              ) : (
                <Menu size={30} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* ========== MOBILE SEARCH BAR ========== */}
        {showSearchBar && (
          <div className="w-full lg:hidden">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden px-3">
              <Search size={20} className="text-gray-400" />

              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full py-3 px-3 outline-none text-gray-700"
              />
            </div>
          </div>
        )}

        {/* ========== DESKTOP SEARCH BAR ========== */}
        <div className="hidden lg:block w-[450px] xl:w-[650px]">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden px-3">
            <Search size={20} className="text-gray-400" />

            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 px-3 outline-none text-gray-700"
            />

            <button className="bg-teal-600 text-white px-8 py-3 my-2 rounded-lg font-medium hover:bg-teal-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* ========== DESKTOP ICONS ========== */}
        <div className="hidden lg:flex items-center gap-6">
          {/* USER */}
          <div className="relative" ref={authRef}>
            <button
              onClick={() => setShowAuthBox(!showAuthBox)}
              className="border border-gray-200 rounded-xl p-3 hover:bg-gray-100 transition"
            >
              <UserCircle2 size={28} className="text-gray-700" />
            </button>

            {/* LOGIN BOX */}
            {showAuthBox && (
              <div className="absolute right-0 top-16 w-[320px] bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                <div className="p-5 border-b border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Welcome Back
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Login for better experience
                  </p>
                </div>

                <div className="flex gap-3 p-5">
                  <Link
                    to="/login"
                    className="bg-teal-600 text-white py-3 rounded-lg text-center w-full font-semibold hover:bg-teal-700 transition"
                  >
                    Log In
                  </Link>

                  <Link
                    to="/register"
                    className="border border-gray-300 py-3 rounded-lg text-center w-full font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Heart */}
          <div className="relative cursor-pointer">
            <Heart size={24} className="text-gray-700" />
            <span className="count">4</span>
          </div>

          {/* CART */}
          <div className="relative cursor-pointer">
            <ShoppingBag size={28} className="text-gray-700" />

            <span className="count">3</span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden lg:flex items-center gap-10 px-20 py-5 border-t border-gray-200 font-medium text-gray-700">
        <Link to="/" className="text-teal-600">
          Home
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          About
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          Category
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          Product Details
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          Cart
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          Checkout
        </Link>

        <Link to="" className="hover:text-teal-600 transition">
          Contact
        </Link>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {showMenu && (
        <div className="lg:hidden flex flex-col gap-5 px-5 py-5 border-t border-gray-200 text-lg font-medium text-gray-700 bg-white">
          <Link to="" className="text-teal-600">
            Home
          </Link>

          <Link to="" className="hover:text-teal-600">About</Link>

          <Link to="" className="hover:text-teal-600">Category</Link>

          <Link to="" className="hover:text-teal-600">Product Details</Link>

          <Link to="" className="hover:text-teal-600">Cart</Link>

          <Link to="" className="hover:text-teal-600">Checkout</Link>

          <Link to="" className="hover:text-teal-600">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
