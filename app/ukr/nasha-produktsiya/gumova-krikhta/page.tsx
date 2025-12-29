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
          Наша продукція / <span className="text-green-400">Гумова Крихта</span>
        </p>

        {/* Start of page product div */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15 mt-5">
          {/* Mobile title - only visible on mobile */}
          <div className="lg:hidden">
            <h1 className="text-3xl">Гумова Крихта Greonix</h1>

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
              <p className="text-xl mt-1.5 ml-5">Від 0.5мм</p>
            </div>
          </div>

          {/* Left side photo and fraction*/}

          <FractionSwitcher />

          <div>
            {/* Produt info right side */}
            <div>
              {/* Desktop title - only visible on desktop */}
              <h1 className="hidden lg:block text-4xl">
                Гумова Крихта Greonix
              </h1>

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
                <p className="text-xl mt-1.5 ml-5">Від 0.55мм</p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />

              <div className="w-full lg:w-145 mb-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-300/50 bg-black">
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                    preload="metadata"
                  >
                    <source
                      src="/video/tire-recycling-video.mp4"
                      type="video/mp4"
                    />
                    Ваш браузер не підтримує тег відео.
                  </video>
                </div>
              </div>

              {/* Product description paragraph */}
              {/* First paragraph */}
              <div className="w-full lg:w-145">
                <p>
                  Гумова крихта Greonix — це високоякісний матеріал, отриманий
                  шляхом переробки зношених шин на сучасному автоматизованому
                  обладнанні. Вона має відмінні експлуатаційні характеристики:
                  високу зносостійкість, удароміцність та довговічність, що
                  робить її ідеальним вибором для різних типів покриттів.
                </p>

                {/* Second paragraph */}
                <p className="mt-5">
                  Наша продукція широко застосовується в будівництві спортивних
                  майданчиків, дитячих ігрових зон, бігових доріжок, а також для
                  створення безпечних гумових покриттів. Гумова крихта
                  забезпечує відмінну амортизацію, знижує ризик травм і
                  підходить для використання як на відкритому повітрі, так і в
                  приміщеннях.
                </p>
                <p className="mt-5">
                  Екологічно чиста продукція Greonix відповідає європейським
                  стандартам якості та виробляється в Україні. Це надійний вибір
                  для довговічних, безпечних та естетичних покриттів.
                </p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />
            </div>
            {/* Make order button */}
            <div>
              <Link href="/ukr/oformyty-zamovlennya">
                <button className="text-white bg-[#4CAF4F] text-center w-full p-3 rounded-3xl cursor-pointer">
                  Оформити Замовлення
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
