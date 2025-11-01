import Image from "next/image";

export default function SectionThree() {
  return (
    <div className="flex items-center justify-center mt-15 mb-7 bg-[#F5F7FA] p-10">
      {/* Left most text */}
      <div className="font-inter">
        <p className="font-bold text-3xl w-105">
          Нам доверяют сотни компаний по всей Украине и Европе
        </p>
        <p className="text-gray-600 mt-2 w-95">
          Опыт, стабильность и качество - основа нашей работы.
        </p>
      </div>

      {/* Section 1 Start */}
      <div className="ml-20">
        {/* Section 1 top*/}
        <div className="flex items-center mb-8">
          {/* Icon */}
          <div>
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
            <p className="font-bold text-2xl">15 000 тонн</p>
            <p className="text-gray-600 w-50">
              стабильный годовой обьем для любых ваших задач
            </p>
          </div>
        </div>

        {/* Section 1 bottom*/}
        <div className="flex items-center">
          {/* Icon */}
          <div>
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
            <p className="font-bold text-2xl">Доставка</p>
            <p className="text-gray-600 w-50">По всей Украине и Европе</p>
          </div>
        </div>
      </div>

      {/* Section 2 Start */}
      <div className="ml-20">
        {/* Section 2 top*/}
        <div className="flex items-center mb-8">
          {/* Icon */}
          <div>
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
            <p className="font-bold text-2xl">300+ компаний</p>
            <p className="text-gray-600 w-50">выбрали нас своим поставщиком</p>
          </div>
        </div>

        {/* Section 2 bottom*/}
        <div className="flex items-center">
          {/* Icon */}
          <div>
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
            <p className="font-bold text-2xl">Оборудование</p>
            <p className="text-gray-600 w-50">
              обеспечивает идеальную чистоту и однородность крошки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
