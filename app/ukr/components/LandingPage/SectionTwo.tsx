import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="flex flex-col items-center font-inter mt-5 px-6 lg:px-0">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl sm:text-3xl w-full max-w-2xl lg:w-120 text-center mb-3">
          Гумова крихта для будь-яких завдань та масштабів
        </h1>
        <p className="text-gray-600 text-center">
          Високоякісна гумова крихта Greonix підходить для різних типів покриттів: спортивних об'єктів, будівельних проектів та приватного використання
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10 w-full max-w-6xl">
        <div className="w-full lg:w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center hover:shadow-lg transition-shadow">
          <Image
            src="/LandingPage/build-icon.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-2"
            unoptimized
          />
          <p className="font-bold mb-2 text-xl lg:text-2xl">
            Будівельним компаніям
          </p>
          <p>
            Для створення удароміцних, зносостійких та довговічних покриттів.
          </p>
        </div>

        <div className="w-full lg:w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center hover:shadow-lg transition-shadow">
          <Image
            src="/LandingPage/sport-icon.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-2"
            unoptimized
          />
          <p className="font-bold mb-2 text-xl lg:text-2xl">
            Спортивним об'єктам
          </p>
          <p>
            Ідеальний матеріал для стадіонів, кортів та бігових доріжок. Забезпечує амортизацію та безпеку спортсменів.
          </p>
        </div>

        <div className="w-full lg:w-93 flex flex-col shadow-md p-5 rounded-xl items-center text-center hover:shadow-lg transition-shadow">
          <Image
            src="/LandingPage/private-sales.svg"
            width={50}
            height={50}
            alt="Build Icon"
            className="mb-4 mt-3"
            unoptimized
          />
          <p className="font-bold mb-2 text-xl lg:text-2xl">Приватним особам</p>
          <p>для дитячих майданчиків, дач та декоративних рішень.</p>
        </div>
      </div>
    </div>
  );
}
