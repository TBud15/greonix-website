import Image from "next/image";

export default function SectionFour() {
  return (
    <div className="flex items-center gap-6 justify-center">
      <div>
        <Image
          src="/LandingPage/SectionFour/55-crumb.svg"
          width={500}
          height={500}
          alt="Crumb rubber"
        />
      </div>

      {/* Right side section */}
      <div className="flex flex-col gap-4 font-inter">
        <p className="font-bold text-3xl">Резиновая крошка от Greonix</p>
        <p className="text-gray-600 w-160">
          Мы производим резиновую крошку на автоматизированных линиях нового
          поколения, что гарантирует стабильное качество, точный размер фракции
          и полное соответствие европейским стандартам. Наша продукция
          востребована в строительстве, дорожной инфраструктуре, ландшафтных и
          спортивных проектах.
        </p>
        <p className="pt-4 pb-4 pl-6 pr-6 bg-[#4CAF4F] text-white rounded-lg w-fit">
          Подробнее о продукте
        </p>
      </div>
    </div>
  );
}
