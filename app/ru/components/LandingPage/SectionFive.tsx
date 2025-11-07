import Image from "next/image";

export default function SectionFive() {
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
        <p className="text-md text-gray-500 text-lg">Оставайтесь на связи</p>
        <p className="text-2xl sm:text-3xl lg:text-3xl w-full lg:w-150">
          Подпишитесь, чтобы получать свежие новости и полезные материалы о
          продукции Greonix.
        </p>

        {/* Input box */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <input
            type="text"
            id="first_name"
            className="bg-gray-100 border border-gray-100 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-8 rounded-2xl sm:rounded-r-none sm:rounded-l-2xl py-4 sm:py-0"
            placeholder="Email"
            required
          />
          <p className="bg-[#388E3B] p-4 text-white rounded-2xl sm:rounded-l-none sm:rounded-r-2xl text-center cursor-pointer hover:bg-[#2d7a31] transition-colors">
            Подписаться
          </p>
        </div>
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
