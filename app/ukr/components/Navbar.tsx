//Navbar component

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div
        className={`flex items-center justify-around transition-all duration-300 ${
          isScrolled ? "m-4 gap-6" : "m-8 gap-10"
        }`}
      >
        {/* Logo and title */}
        <div className="flex gap-2 items-center">
          <Image
            src="/Navbar/logo.svg"
            width={isScrolled ? 32 : 40}
            height={isScrolled ? 32 : 40}
            alt="Right arrow"
            unoptimized
            className={`mt-1 transition-all duration-300 ${
              isScrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
          />
          <Link href="/ukr">
            <p
              className={`font-inter font-bold transition-all duration-300 ${
                isScrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              Greonix
            </p>
          </Link>
        </div>

        {/* Hamburger menu button - only visible on mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#4CAF4F] transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#4CAF4F] transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#4CAF4F] transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Menu options - desktop version */}
        <div
          className={`hidden lg:flex items-center font-inter transition-all duration-300 ${
            isScrolled ? "gap-6" : "gap-10"
          }`}
        >
          <div
            className={`flex transition-all duration-300 ${
              isScrolled ? "gap-6" : "gap-10"
            }`}
          >
            <Link href="/ukr">
              <p className="hover:text-[#4CAF4F] transition-colors">Головна</p>
            </Link>

            <Link href="/ukr/nasha-produktsiya/gumova-krikhta">
              <p className="hover:text-[#4CAF4F] transition-colors">
                Гумова Крихта
              </p>
            </Link>

            <Link href="/ukr/kontakty">
              <p className="hover:text-[#4CAF4F] transition-colors">Контакти</p>
            </Link>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="hover:text-[#4CAF4F] transition-colors flex items-center gap-1"
              >
                UA
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[80px]">
                  <Link
                    href="/en"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => setIsLangOpen(false)}
                  >
                    EN
                  </Link>
                  <Link
                    href="/ukr"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => setIsLangOpen(false)}
                  >
                    UA
                  </Link>
                  <Link
                    href="/ru"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => setIsLangOpen(false)}
                  >
                    RU
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Submit order button */}
          <Link href="/ukr/oformyty-zamovlennya">
            <div
              className={`flex gap-2 bg-[#4CAF4F] text-white rounded-xl items-centered transition-all duration-300 ${
                isScrolled
                  ? "p-2 pt-3 pb-3 pl-5 pr-5"
                  : "p-3 pt-4 pb-4 pl-6 pr-6"
              }`}
            >
              <p>Оформити Замовлення</p>

              <Image
                src="/Navbar/right-arrow.svg"
                width={20}
                height={20}
                alt="Right arrow"
                unoptimized
                className="mt-1"
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-8 mt-20 font-inter">
            <Link href="/ukr" onClick={() => setIsMenuOpen(false)}>
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Головна
              </p>
            </Link>

            <Link
              href="/ukr/nasha-produktsiya/gumova-krikhta"
              onClick={() => setIsMenuOpen(false)}
            >
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Гумова Крихта
              </p>
            </Link>

            <Link href="/ukr/kontakty" onClick={() => setIsMenuOpen(false)}>
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Контакти
              </p>
            </Link>

            {/* Language Dropdown Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-lg hover:text-[#4CAF4F] transition-colors flex items-center gap-1"
              >
                UA
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg py-2 pl-4">
                  <Link
                    href="/en"
                    className="block py-2 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => {
                      setIsLangOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    EN
                  </Link>
                  <Link
                    href="/ukr"
                    className="block py-2 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => {
                      setIsLangOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    UA
                  </Link>
                  <Link
                    href="/ru"
                    className="block py-2 hover:text-[#4CAF4F] transition-colors"
                    onClick={() => {
                      setIsLangOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    RU
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/ukr/oformyty-zamovlennya"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2 bg-[#4CAF4F] hover:bg-[#45a049] text-white p-3 rounded-xl items-center justify-center mt-4 transition-colors cursor-pointer">
                <p>Оформити Замовлення</p>
                <Image
                  src="/Navbar/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="Right arrow"
                  unoptimized
                  className="mt-1"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
}
