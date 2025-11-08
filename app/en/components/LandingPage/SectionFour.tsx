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
          Greonix Rubber Crumb
        </p>
        <p className="text-gray-600 w-full lg:w-160">
          We produce rubber crumb on next-generation automated production lines, which guarantees consistent quality, precise fraction size, and full compliance with European standards. Our products are in demand in construction, road infrastructure, landscaping, and sports projects.
        </p>
        <Link href="/en/our-products/crumb-rubber">
          <p className="pt-4 pb-4 pl-6 pr-6 bg-[#4CAF4F] text-white rounded-lg w-fit mx-auto lg:mx-0">
            Learn More About the Product
          </p>
        </Link>
      </div>
    </div>
  );
}
