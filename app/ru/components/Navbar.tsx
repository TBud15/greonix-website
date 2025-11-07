//Navbar component

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link href="/ru">
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

        {/* Menu options - desktop version (unchanged) */}
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
            <Link href="/ru">
              <p className="hover:text-[#4CAF4F] transition-colors">Главная</p>
            </Link>

            <Link href="/ru/nasha-produktsiya/rezinovaya-kroshka">
              <p className="hover:text-[#4CAF4F] transition-colors">
                Наша Продукция
              </p>
            </Link>

            <Link href="/ru/kontakt">
              <p className="hover:text-[#4CAF4F] transition-colors">Контакт</p>
            </Link>
          </div>

          {/* Submit order button */}
          <div
            className={`flex gap-2 bg-[#4CAF4F] text-white rounded-xl items-centered transition-all duration-300 ${
              isScrolled ? "p-2 pt-3 pb-3 pl-5 pr-5" : "p-3 pt-4 pb-4 pl-6 pr-6"
            }`}
          >
            <Link href="/ru/oformit-zakaz">
              <p>Оформить Заказ</p>
            </Link>
            <Image
              src="/Navbar/right-arrow.svg"
              width={20}
              height={20}
              alt="Right arrow"
              unoptimized
              className="mt-1"
            />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-8 mt-20 font-inter">
            <Link href="/ru" onClick={() => setIsMenuOpen(false)}>
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Главная
              </p>
            </Link>

            <Link
              href="/ru/nasha-produktsiya/rezinovaya-kroshka"
              onClick={() => setIsMenuOpen(false)}
            >
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Наша Продукция
              </p>
            </Link>

            <Link href="/ru/kontakt" onClick={() => setIsMenuOpen(false)}>
              <p className="text-lg hover:text-[#4CAF4F] transition-colors">
                Контакт
              </p>
            </Link>

            <div className="flex gap-2 bg-[#4CAF4F] hover:bg-[#45a049] text-white p-3 rounded-xl items-center justify-center mt-4 transition-colors cursor-pointer">
              <p>Оформить Заказ</p>
              <Image
                src="/Navbar/right-arrow.svg"
                width={20}
                height={20}
                alt="Right arrow"
                unoptimized
                className="mt-1"
              />
            </div>
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
