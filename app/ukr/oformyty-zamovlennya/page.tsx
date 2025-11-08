"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateIDOrder = process.env.NEXT_PUBLIC_TEMPLATE_ID_ORDER as string;
  const publicKEY = process.env.NEXT_PUBLIC_KEY_EMAILJS as string;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null || isSubmitting) return;

    setIsSubmitting(true);

    emailjs.sendForm(serviceID, templateIDOrder, form.current, publicKEY).then(
      (result) => {
        console.log(`${result.text}, order sent. Thank you.`);
        // Redirect to success page
        router.push("/ukr/order-success");
      },
      (error) => {
        console.log(`${error.text}, error occurred.`);
        setIsSubmitting(false);
        alert(
          "Сталася помилка при відправці замовлення. Будь ласка, спробуйте ще раз або зв'яжіться з нами по телефону."
        );
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
      "Чорних Запорожців, 16, Дніпро, Дніпропетровська Область, 49000"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-inter pt-40 pb-16 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 uppercase tracking-tight">
          Оформлення замовлення
        </h1>
        <p className="text-gray-500 text-lg mb-12">Гумова крихта Greonix</p>

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
                  Ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Ваше ім'я"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email{" "}
                  <span className="text-gray-400 text-xs">(необов'язково)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Телефон{" "}
                  <span className="text-gray-400 text-xs">(необов'язково)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="+380 67 123 4567"
                  disabled={isSubmitting}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Компанія{" "}
                  <span className="text-gray-400 text-xs">(необов'язково)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Назва компанії"
                  disabled={isSubmitting}
                />
              </div>

              {/* Volume */}
              <div>
                <label
                  htmlFor="volume"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Цікавий обсяг{" "}
                  <span className="text-gray-400 text-xs">(необов'язково)</span>
                </label>
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all"
                  placeholder="Наприклад: 10 тонн"
                  disabled={isSubmitting}
                />
              </div>

              {/* Additional Comments */}
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Додаткові коментарі
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF4F] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Напишіть додаткову інформацію..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4CAF4F] hover:bg-[#45a049] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Відправка..." : "Відправити Замовлення"}
              </button>
            </form>
          </div>

          {/* Right side - Office, Quick Inquiries, and Product Box */}
          <div className="lg:w-1/3 space-y-8">
            {/* Office Address */}
            <div>
              <h3 className="font-bold text-xl mb-4">Офіс</h3>
              <p
                onClick={copyAddress}
                className="text-gray-600 cursor-pointer hover:text-[#4CAF4F] transition-colors relative"
              >
                Адреса офісу: Чорних Запорожців, 16, Дніпро, Дніпропетровська
                Область, 49000
              </p>
              {copied && (
                <span className="text-[#4CAF4F] text-sm mt-1 block">
                  ✓ Адресу скопійовано!
                </span>
              )}
            </div>

            {/* Quick Inquiries */}
            <div>
              <h3 className="font-bold text-xl mb-4">Для швидких запитів</h3>
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
                    href="mailto:info@greonix.com.ua"
                    className="hover:text-[#4CAF4F] transition-colors underline"
                  >
                    info@greonix.com.ua
                  </a>
                </p>
              </div>
            </div>

            {/* Product Box */}
            <Link href="/ukr/nasha-produktsiya/gumova-krikhta">
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
                  Гумова крихта Greonix
                </h3>
                <p className="text-gray-600 text-center mt-2">0.55-5mm</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
