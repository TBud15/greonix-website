"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "",
    comments: "",
  });

  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIDOrder = process.env.NEXT_PUBLIC_TEMPLATE_ID_ORDER as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null || isDisabled) return;

    setIsDisabled(true);

    emailjs.sendForm(serviceID, templateIDOrder, form.current, publicKEY).then(
      (result) => {
        setMessageSent(true);
        setShowModal(true);
        console.log(`${result.text}, order sent. Thank you.`);
      },
      (error) => {
        setErrorMessage(true);
        setShowModal(true);
        console.log(`${error.text}, error occurred.`);
      }
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "8502 Preston Rd. Inglewood, Maine 98380, USA"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-inter pt-40 pb-16 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 uppercase tracking-tight">
          Оформление заказа
        </h1>
        <p className="text-gray-500 text-lg mb-12">Резиновая крошка Greonix</p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Form */}
          <div className="lg:w-2/3">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Ваше имя"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email{" "}
                  <span className="text-gray-400 text-xs">(необязательно)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Телефон{" "}
                  <span className="text-gray-400 text-xs">(необязательно)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="+380 67 123 4567"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Компания{" "}
                  <span className="text-gray-400 text-xs">(необязательно)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Название компании"
                />
              </div>

              {/* Volume */}
              <div>
                <label
                  htmlFor="volume"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Интересующий объём{" "}
                  <span className="text-gray-400 text-xs">(необязательно)</span>
                </label>
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Например: 10 тонн"
                />
              </div>

              {/* Additional Comments */}
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Дополнительные комментарии
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Напишите дополнительную информацию..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isDisabled}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ${
                  isDisabled && messageSent
                    ? "bg-green-600 cursor-not-allowed text-white"
                    : ""
                }
                ${
                  isDisabled && errorMessage
                    ? "bg-red-600 cursor-not-allowed text-white"
                    : ""
                }
                ${
                  !isDisabled
                    ? "bg-[#4CAF4F] hover:bg-[#45a049] text-white cursor-pointer"
                    : ""
                }`}
              >
                {isDisabled && messageSent && "Заказ отправлен!"}
                {isDisabled && errorMessage && "Ошибка отправки"}
                {!isDisabled && "Отправить Заказ"}
              </button>
            </form>
          </div>

          {/* Right side - Office, Quick Inquiries, and Product Box */}
          <div className="lg:w-1/3 space-y-8">
            {/* Office Address */}
            <div>
              <h3 className="font-bold text-xl mb-4">Офис</h3>
              <p
                onClick={copyAddress}
                className="text-gray-600 cursor-pointer hover:text-[#4CAF4F] transition-colors relative"
              >
                Адрес офиса: 8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
              {copied && (
                <span className="text-[#4CAF4F] text-sm mt-1 block">
                  ✓ Адрес скопирован!
                </span>
              )}
            </div>

            {/* Quick Inquiries */}
            <div>
              <h3 className="font-bold text-xl mb-4">For Quick Inquiries</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Телефон:</span>{" "}
                  <a
                    href="tel:+380676312222"
                    className="hover:text-[#4CAF4F] transition-colors underline"
                  >
                    +380 67 631 2222
                  </a>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:support@greonix.com"
                    className="hover:text-[#4CAF4F] transition-colors underline"
                  >
                    support@greonix.com
                  </a>
                </p>
              </div>
            </div>

            {/* Product Box */}
            <Link href="/ru/nasha-produktsiya/rezinovaya-kroshka">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#4CAF4F] transition-all cursor-pointer">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/LandingPage/SectionFour/55-crumb.svg"
                    width={200}
                    height={200}
                    alt="Rubber Crumb"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  Резиновая крошка Greonix
                </h3>
                <p className="text-gray-600 text-center mt-2">0.55-5mm</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showModal && (
        <div className="fixed top-24 right-6 z-50 animate-slide-in">
          <div
            className={`rounded-lg shadow-2xl p-4 max-w-sm border-l-4 ${
              messageSent
                ? "bg-white border-green-500"
                : "bg-white border-red-500"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  messageSent ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {messageSent ? (
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`font-semibold text-sm ${
                    messageSent ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {messageSent
                    ? "Заказ успешно отправлен!"
                    : "Ошибка при отправке"}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {messageSent
                    ? "Мы свяжемся с вами в ближайшее время."
                    : "Пожалуйста, попробуйте еще раз."}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
