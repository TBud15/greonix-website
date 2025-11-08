// Server component for good SEO
// any client components should be imported here to save SEO optimization of this page

import Image from "next/image";
import Link from "next/link";

import ProductInfoTabs from "./component/ProductInfoTable";
import FractionSwitcher from "./component/FractionSwitcher";
import ProductDetails from "./component/ProductDetails";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <div className="font-inter pt-38">
      <div className="ml-0 lg:ml-80 px-6 lg:px-0">
        <p className="text-gray-400">
          Our Products / <span className="text-green-400">Crumb Rubber</span>
        </p>

        {/* Start of page product div */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15 mt-5">
          {/* Mobile title - only visible on mobile */}
          <div className="lg:hidden">
            <h1 className="text-3xl">Greonix Crumb Rubber</h1>

            {/* Crumb rubber size */}
            <div className="flex items-center mt-2 ml-0.5">
              <Image
                src="/CrumbRubberPage/small-vertical-line.svg"
                width={3}
                height={1}
                alt="Small vertical line"
                className="mt-2"
                unoptimized
              />
              <p className="text-xl mt-1.5 ml-5">From 0.5mm</p>
            </div>
          </div>

          {/* Left side photo and fraction*/}

          <FractionSwitcher />

          <div>
            {/* Produt info right side */}
            <div>
              {/* Desktop title - only visible on desktop */}
              <h1 className="hidden lg:block text-4xl">Greonix Crumb Rubber</h1>

              {/* Crumb rubber size - desktop only */}
              <div className="hidden lg:flex items-center mt-2 ml-0.5">
                <Image
                  src="/CrumbRubberPage/small-vertical-line.svg"
                  width={3}
                  height={1}
                  alt="Small vertical line"
                  className="mt-2"
                  unoptimized
                />

                {/* Size variable */}
                <p className="text-xl mt-1.5 ml-5">From 0.55mm</p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />

              {/* Product description paragraph */}
              {/* First paragraph */}
              <div className="w-full lg:w-145">
                <p>
                  Greonix crumb rubber is a high-quality material obtained by
                  processing worn tires on modern automated equipment. It has
                  excellent performance characteristics: high wear resistance,
                  impact resistance, and durability, making it an ideal choice
                  for various types of surfaces.
                </p>

                {/* Second paragraph */}
                <p className="mt-5">
                  Our products are widely used in the construction of sports
                  facilities, children's play areas, running tracks, and for
                  creating safe rubber surfaces. Crumb rubber provides excellent
                  cushioning, reduces the risk of injury, and is suitable for
                  use both outdoors and indoors.
                </p>

                <p className="mt-5">
                  Greonix's environmentally friendly products meet European
                  quality standards and are manufactured in Ukraine. They are a
                  reliable choice for durable, safe, and aesthetically pleasing
                  flooring.
                </p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />
            </div>
            {/* Make order button */}
            <div>
              <Link href="/en/place-an-order">
                <button className="text-white bg-[#4CAF4F] text-center w-full p-3 rounded-3xl cursor-pointer">
                  Place an Order
                </button>
              </Link>
            </div>
            <div className="mt-6">
              <ProductInfoTabs />
            </div>
          </div>
        </div>
      </div>

      {/* Подробнее page */}
      {/* <div className="mt-6">
        <ProductDetails />
      </div> */}
    </div>
  );
}
