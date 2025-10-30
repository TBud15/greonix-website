import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="flex flex-col items-center font-inter mt-5">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl w-120 text-center mb-3">
          Резиновая крошка для любых задач и масштабов
        </h1>
        <p className="text-gray-600">
          Наша продукция подходит для различных типов покрытий
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center">
          <Image
            src="/LandingPage/build-icon.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-2"
          />
          <p className="font-bold mb-2 text-2xl">Строительным компаниям</p>
          <p>
            Для создания ударопрочных, износостойких и долговечных покрытий.
          </p>
        </div>

        <div className="w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center">
          <Image
            src="/LandingPage/sport-icon.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-2"
          />
          <p className="font-bold mb-2 text-2xl">Спортивным объектам</p>
          <p>
            Идеальный материал для стадионов, кортов и беговых дорожек.
            Обеспечивает амортизацию и безопасность спортсменов.
          </p>
        </div>

        <div className="w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center">
          <Image
            src="/LandingPage/private-sales.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-4 mt-3"
          />
          <p className="font-bold mb-2 text-2xl">Частным лицам</p>
          <p>для детских площадок, дач и декоративных решений.</p>
        </div>
      </div>
    </div>
  );
}
