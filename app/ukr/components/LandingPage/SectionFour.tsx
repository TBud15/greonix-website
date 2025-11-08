import Image from "next/image";
import Link from "next/link";

export default function SectionFour() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 justify-center px-6 lg:px-0 py-10 lg:py-0">
      <div>
        <Image
          src="/product/2-4mm.png"
          width={500}
          height={500}
          alt="Crumb rubber"
          className="w-70 h-94 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[500px]"
        />
      </div>

      {/* Right side section */}
      <div className="flex flex-col gap-4 font-inter text-center lg:text-left">
        <p className="font-bold text-2xl sm:text-3xl lg:text-3xl">
          Гумова крихта від Greonix
        </p>
        <p className="text-gray-600 w-full lg:w-160">
          Ми виробляємо гумову крихту на автоматизованих лініях нового покоління, що гарантує стабільну якість, точний розмір фракції та повну відповідність європейським стандартам. Наша продукція затребувана в будівництві, дорожній інфраструктурі, ландшафтних та спортивних проектах.
        </p>
        <Link href="/ukr/nasha-produktsiya/gumova-krikhta">
          <p className="pt-4 pb-4 pl-6 pr-6 bg-[#4CAF4F] text-white rounded-lg w-fit mx-auto lg:mx-0">
            Детальніше про продукт
          </p>
        </Link>
      </div>
    </div>
  );
}
