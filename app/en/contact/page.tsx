"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center font-inter py-16 px-6 pt-40">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl w-full">
        {/* Left side - Contact Info */}
        <div className="lg:w-1/3 space-y-8">
          {/* Phone */}
          <div className="flex gap-4 items-start bg-[#F5F7FA] p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-[#4CAF4F] p-3 rounded-full">
              <Image
                src="/Footer/phone-icon.svg"
                width={24}
                height={24}
                alt="Phone"
                unoptimized
                className="brightness-0 invert"
              />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Phone</p>
              <a
                href="tel:+380686868700"
                className="text-gray-600 hover:text-[#4CAF4F] transition-colors"
              >
                +38 068 68 68 700
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start bg-[#F5F7FA] p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-[#4CAF4F] p-3 rounded-full">
              <Image
                src="/Footer/email-icon.svg"
                width={24}
                height={24}
                alt="Email"
                unoptimized
                className="brightness-0 invert"
              />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Email</p>
              <a
                href="mailto:info@greonix.com.ua"
                className="text-gray-600 hover:text-[#4CAF4F] transition-colors"
              >
                info@greonix.com.ua
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 items-start bg-[#F5F7FA] p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-[#4CAF4F] p-3 rounded-full">
              <Image
                src="/Footer/location-icon.svg"
                width={24}
                height={24}
                alt="Location"
                unoptimized
                className="brightness-0 invert"
              />
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Address</p>
              <p className="text-gray-600">
                Chornykh Zaporozhtsiv, 16, Dnipro, Dnipropetrovsk Oblast, 49000,
                Ukraine
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex gap-4 items-start bg-[#F5F7FA] p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 bg-[#4CAF4F] p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Working Hours</p>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First and Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder=""
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="your@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="+1 234 567 8900"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4CAF4F] hover:bg-[#45a049] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
