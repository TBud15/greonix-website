import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="flex flex-col items-center font-inter mt-5 px-6 lg:px-0">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl sm:text-3xl w-full max-w-2xl lg:w-120 text-center mb-3">
          Rubber Crumb for Any Task and Scale
        </h1>
        <p className="text-gray-600 text-center">
          High-quality Greonix rubber crumb is suitable for various types of surfaces: sports facilities, construction projects, and private use
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
            Construction Companies
          </p>
          <p>
            For creating impact-resistant, wear-resistant, and durable surfaces.
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
            Sports Facilities
          </p>
          <p>
            Perfect material for stadiums, courts, and running tracks. Provides cushioning and safety for athletes.
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
          <p className="font-bold mb-2 text-xl lg:text-2xl">Private Use</p>
          <p>For playgrounds, cottages, and decorative solutions.</p>
        </div>
      </div>
    </div>
  );
}
