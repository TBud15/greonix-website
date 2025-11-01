import Image from "next/image";

export default function SectionFive() {
  return (
    <div className="flex items-center justify-center mt-7 mb-100">
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

      <div className="flex flex-col gap-4 font-inter">
        <p className="text-md text-gray-500 text-lg">Оставайтесь на связи</p>
        <p className="text-3xl w-150">
          Подпишитесь, чтобы получать свежие новости и полезные материалы о
          продукции Greonix.
        </p>

        {/* Input box */}
        <div className="flex">
          <input
            type="text"
            id="first_name"
            className="bg-gray-100 border border-gray-100 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-8"
            placeholder="Email"
            required
          />
          <p className="bg-[#388E3B] p-4 text-white rounded-r-2xl">
            Подписаться
          </p>
        </div>
      </div>

      {/* Icon right side */}
      <div className="ml-25">
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
