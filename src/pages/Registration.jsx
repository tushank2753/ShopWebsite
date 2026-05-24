import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    password: "",
    confirmpassword: "",
  });

  // Input Handle
  const registerform = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Input Submit
  const submitform = (e) => {
    e.preventDefault();

    // Password Match Check
    if (formData.password !== formData.confirmpassword) {
      alert("Password does not match");
      return;
    }

    // Local storage
    localStorage.setItem("username", JSON.stringify(formData));
    alert("YOur registration is Successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Register your new account
        </p>

        <form className="space-y-5" onSubmit={submitform}>
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="username"
              onChange={registerform}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="useremail"
              onChange={registerform}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={registerform}
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmpassword"
              onChange={registerform}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-700  font-semibold cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
