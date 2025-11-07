import Image from "next/image";
import Link from "next/link";

export default function SectionOne() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center font-inter bg-[#F5F7FA] pt-32 pb-10 px-6 lg:px-0">
      {/* Left side */}
      <div className="text-center lg:text-left">
        <p className="text-4xl sm:text-5xl lg:text-6xl">Прочность</p>
        <p className="text-4xl sm:text-5xl lg:text-6xl mt-4">Экология</p>
        <p className="text-4xl sm:text-5xl lg:text-6xl mt-4">Безопасность</p>
        <p className="text-gray-600 mt-6 max-w-md lg:max-w-none">
          Резиновая крошка от производителя - для покрытий любой сложности.
        </p>

        {/* Button */}
        <div className="inline-flex gap-2 bg-[#4CAF4F] hover:bg-[#45a049] text-white p-3 rounded items-centered pt-4 pb-4 pl-6 pr-6 mt-6 transition-colors cursor-pointer">
          <Link href="/ru/nasha-produktsiya/rezinovaya-kroshka">
            <p>Подробнее</p>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="ml-0 lg:ml-70 mt-10 lg:mt-0">
        <Image
          src="/LandingPage/earth-icon.svg"
          width={450}
          height={450}
          alt="Earth Icon"
          unoptimized
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
        />
      </div>
    </div>
  );
}
