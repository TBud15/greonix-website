import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#E6FBEA] p-10">
      <div className="flex justify-evenly items-center font-inter mb-10">
        {/* Upper part */}
        <div>
          <p className="text-4xl w-90 text-[#4CAF4F]">
            Make secure payment & grow your online business
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Image
              src="/Footer/location-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
            />
            <p className="text-lg w-60">
              8502 Preston Rd. Inglewood, Maine 98380, USA
            </p>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Image
              src="/Footer/phone-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
            />
            <p className="text-lg">+380 67 631 2222</p>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <Image
              src="/Footer/email-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
            />
            <p className="text-lg">support@fintech.co</p>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-6 w-260 border-t border-gray-400/70" />

      <div className="flex justify-evenly mt-10 font-inter">
        <div className="flex gap-10">
          <p>Главная</p>
          <p>Резиновая Крошка</p>
          <p>Контакт</p>
        </div>

        {/* Copyright */}
        <p className="text-gray-500">© Greonix 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
}
