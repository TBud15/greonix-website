import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="flex justify-center items-center font-inter bg-[#F5F7FA] pt-10 pb-10">
      {/* Left side */}
      <div className="">
        <p className="text-6xl">Прочность</p>
        <p className="text-6xl mt-4">Экология</p>
        <p className="text-6xl mt-4">Безопасность</p>
        <p className="text-gray-600 mt-6">
          Резиновая крошка от производителя - для покрытий любой сложности.
        </p>

        {/* Button */}
        <div className="inline-flex gap-2 bg-[#4CAF4F] text-white p-3 rounded items-centered pt-4 pb-4 pl-6 pr-6 mt-6">
          <p>Подробнее</p>
        </div>
      </div>

      {/* Right side */}
      <div className="ml-70">
        <Image
          src="/LandingPage/earth-icon.svg"
          width={450}
          height={450}
          alt="Earth Icon"
          unoptimized
        />
      </div>
    </div>
  );
}
