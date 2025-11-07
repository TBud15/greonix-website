import Image from "next/image";

export default function SectionThree() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-15 mb-7 bg-[#F5F7FA] p-6 lg:p-10 gap-10 lg:gap-0">
      {/* Left most text */}
      <div className="font-inter text-center lg:text-left">
        <p className="font-bold text-2xl sm:text-3xl w-full lg:w-105">
          Нам доверяют сотни компаний по всей Украине и Европе
        </p>
        <p className="text-gray-600 mt-2 w-full lg:w-95">
          Опыт, стабильность и качество - основа нашей работы.
        </p>
      </div>

      {/* Section 1 Start */}
      <div className="ml-0 lg:ml-20 w-full lg:w-auto">
        {/* Section 1 top*/}
        <div className="flex items-center mb-6 lg:mb-8 bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none hover:bg-white/80 lg:hover:bg-transparent transition-all">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/LandingPage/SectionThree/tonns-icon.svg"
              width={70}
              height={50}
              alt="Tonns Icon"
              className="mr-5"
              unoptimized
            />
          </div>
          <div className="font-inter">
            <p className="font-bold text-xl lg:text-2xl">15 000 тонн</p>
            <p className="text-gray-600 w-full lg:w-50">
              стабильный годовой обьем для любых ваших задач
            </p>
          </div>
        </div>

        {/* Section 1 bottom*/}
        <div className="flex items-center bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none hover:bg-white/80 lg:hover:bg-transparent transition-all">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/LandingPage/SectionThree/delivery-icon.svg"
              width={70}
              height={50}
              alt="Tonns Icon"
              className="mr-5"
              unoptimized
            />
          </div>
          <div className="font-inter">
            <p className="font-bold text-xl lg:text-2xl">Доставка</p>
            <p className="text-gray-600 w-full lg:w-50">
              По всей Украине и Европе
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 Start */}
      <div className="ml-0 lg:ml-20 w-full lg:w-auto mt-0 lg:mt-0">
        {/* Section 2 top*/}
        <div className="flex items-center mb-6 lg:mb-8 bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none hover:bg-white/80 lg:hover:bg-transparent transition-all">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/LandingPage/SectionThree/companies-icon.svg"
              width={70}
              height={50}
              alt="Tonns Icon"
              className="mr-5"
              unoptimized
            />
          </div>
          <div className="font-inter">
            <p className="font-bold text-xl lg:text-2xl">300+ компаний</p>
            <p className="text-gray-600 w-full lg:w-50">
              выбрали нас своим поставщиком
            </p>
          </div>
        </div>

        {/* Section 2 bottom*/}
        <div className="flex items-center bg-white/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none hover:bg-white/80 lg:hover:bg-transparent transition-all">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Image
              src="/LandingPage/SectionThree/factory-icon.svg"
              width={70}
              height={50}
              alt="Tonns Icon"
              className="mr-5"
              unoptimized
            />
          </div>
          <div className="font-inter">
            <p className="font-bold text-xl lg:text-2xl">Оборудование</p>
            <p className="text-gray-600 w-full lg:w-50">
              обеспечивает идеальную чистоту и однородность крошки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
