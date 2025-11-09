"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderSuccess() {
  const [countdown, setCountdown] = useState(60);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/ukr");
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-6 py-16 mt-22">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Замовлення успішно відправлено!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Дякуємо за ваше замовлення. Ми зв'яжемося з вами найближчим часом.
        </p>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">
            Потрібна термінова допомога?
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/Footer/phone-icon.svg"
                width={24}
                height={24}
                alt="Phone"
                unoptimized
              />
              <a
                href="tel:+380686868700"
                className="text-lg text-[#4CAF4F] hover:underline"
              >
                +38 068 68 68 700
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/Footer/email-icon.svg"
                width={24}
                height={24}
                alt="Email"
                unoptimized
              />
              <a
                href="mailto:info@greonix.com.ua"
                className="text-lg text-[#4CAF4F] hover:underline"
              >
                sales@greonix.com.ua
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/ukr"
            className="bg-[#4CAF4F] hover:bg-[#45a049] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Повернутися на головну
          </Link>
          <Link
            href="/ukr/nasha-produktsiya/gumova-krikhta"
            className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 transition-colors"
          >
            Дізнатися більше про продукцію
          </Link>
        </div>

        {/* Auto-redirect notice */}
        <p className="text-sm text-gray-500">
          Автоматичний перехід на головну сторінку через {countdown} секунд...
        </p>
      </div>
    </div>
  );
}
