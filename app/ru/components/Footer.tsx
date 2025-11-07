import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#E6FBEA] p-6 lg:p-10 mt-20">
      <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-center font-inter mb-10 gap-8 lg:gap-0">
        {/* Upper part */}
        <div className="text-center lg:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl w-full lg:w-90 text-[#4CAF4F]">
            Make secure payment & grow your online business
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <Image
              src="/Footer/location-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
              className="flex-shrink-0"
            />
            <p className="text-base lg:text-lg w-full lg:w-60">
              8502 Preston Rd. Inglewood, Maine 98380, USA
            </p>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-center">
            <Image
              src="/Footer/phone-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
              className="flex-shrink-0"
            />
            <p className="text-base lg:text-lg">+380 67 631 2222</p>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <Image
              src="/Footer/email-icon.svg"
              width={25}
              height={25}
              alt="Location"
              unoptimized
              className="flex-shrink-0"
            />
            <p className="text-base lg:text-lg">support@fintech.co</p>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-6 w-full lg:w-260 border-t border-gray-400/70" />

      <div className="flex flex-col lg:flex-row justify-evenly mt-10 font-inter gap-6 lg:gap-0 text-center lg:text-left">
        {/* <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 justify-center lg:justify-start shown sm:hidden lg:visible">
          <p>Главная</p>
          <p>Резиновая Крошка</p>
          <p>Контакт</p>
        </div> */}

        {/* Copyright */}
        <p className="text-gray-500">© Greonix 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
}
