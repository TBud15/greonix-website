"use client";

import Image from "next/image";

export default function NotFound() {
  const handleLanguageChange = (lang: string) => {
    // Full page reload to the selected language homepage
    window.location.href = `/${lang}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Сторінку не знайдено
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>

        {/* Language Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6">
            Choose Your Language / Виберіть мову / Выберите язык
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* English */}
            <button
              onClick={() => handleLanguageChange("en")}
              className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-blue-600 transition-colors">
                  EN
                </div>
                <p className="text-lg font-semibold text-gray-800">English</p>
                <p className="text-sm text-gray-600">Go to Home</p>
              </div>
            </button>

            {/* Ukrainian */}
            <button
              onClick={() => handleLanguageChange("ukr")}
              className="group bg-gradient-to-br from-yellow-50 to-blue-100 hover:from-yellow-100 hover:to-blue-200 border-2 border-yellow-300 hover:border-yellow-500 rounded-xl p-6 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-yellow-500 transition-colors">
                  UA
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  Українська
                </p>
                <p className="text-sm text-gray-600">На головну</p>
              </div>
            </button>

            {/* Russian */}
            <button
              onClick={() => handleLanguageChange("ru")}
              className="group bg-gradient-to-br from-red-50 to-blue-100 hover:from-red-100 hover:to-blue-200 border-2 border-red-200 hover:border-red-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-red-600 transition-colors">
                  RU
                </div>
                <p className="text-lg font-semibold text-gray-800">Русский</p>
                <p className="text-sm text-gray-600">На главную</p>
              </div>
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Need Help? / Потрібна допомога? / Нужна помощь?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/Footer/phone-icon.svg"
                width={20}
                height={20}
                alt="Phone"
                unoptimized
              />
              <a
                href="tel:+380676312222"
                className="text-[#4CAF4F] hover:underline font-medium"
              >
                +380 67 631 2222
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Footer/email-icon.svg"
                width={20}
                height={20}
                alt="Email"
                unoptimized
              />
              <a
                href="mailto:info@greonix.com.ua"
                className="text-[#4CAF4F] hover:underline font-medium"
              >
                info@greonix.com.ua
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
