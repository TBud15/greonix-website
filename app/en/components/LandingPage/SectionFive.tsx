"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SectionFive() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_SUBSCRIBE!,
        {
          email: email,
        },
        process.env.NEXT_PUBLIC_KEY_EMAILJS!
      );

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-7 mb-20 px-6 lg:px-0">
      {/* Icon left side ...Commented out, can be uncommented to switch icon side... */}
      {/* <div className="mr-25">
        <Image
          src="/LandingPage/SectionFive/bulb-icon.svg"
          width={250}
          height={50}
          alt="Light Bulb"
          unoptimized
        />
      </div> */}

      <div className="flex flex-col gap-4 font-inter text-center lg:text-left">
        <p className="text-md text-gray-500 text-lg">Stay Connected</p>
        <p className="text-2xl sm:text-3xl lg:text-3xl w-full lg:w-150">
          Subscribe to receive the latest news and useful materials about
          Greonix products.
        </p>

        {/* Input box */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 sm:gap-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 border border-gray-100 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-8 rounded-2xl sm:rounded-r-none sm:rounded-l-2xl py-4 sm:py-0"
            placeholder="Email"
            required
            disabled={status === "sending"}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#388E3B] p-4 text-white rounded-2xl sm:rounded-l-none sm:rounded-r-2xl text-center cursor-pointer hover:bg-[#2d7a31] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Success!"
              : status === "error"
              ? "Error"
              : "Subscribe"}
          </button>
        </form>
      </div>

      {/* Icon right side */}
      <div className="ml-0 lg:ml-25 hidden lg:block">
        <Image
          src="/LandingPage/SectionFive/bulb-icon.svg"
          width={250}
          height={50}
          alt="Light Bulb"
          unoptimized
        />
      </div>
    </div>
  );
}
