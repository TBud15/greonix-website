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
          Наша продукция /{" "}
          <span className="text-green-400">Резиновая Крошка</span>
        </p>

        {/* Start of page product div */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15 mt-5">
          {/* Mobile title - only visible on mobile */}
          <div className="lg:hidden">
            <h1 className="text-3xl">Резиновая Крошка Greonix</h1>

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
              <p className="text-xl mt-1.5 ml-5">От 0.5мм</p>
            </div>
          </div>

          {/* Left side photo and fraction*/}

          <FractionSwitcher />

          <div>
            {/* Produt info right side */}
            <div>
              {/* Desktop title - only visible on desktop */}
              <h1 className="hidden lg:block text-4xl">
                Резиновая Крошка Greonix
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
                <p className="text-xl mt-1.5 ml-5">От 0.55мм</p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />

              {/* Product description paragraph */}
              {/* First paragraph */}
              <div className="w-full lg:w-145">
                <p>
                  Резиновая крошка Greonix — это высококачественный материал,
                  полученный путем переработки изношенных шин на современном
                  автоматизированном оборудовании. Она обладает отличными
                  эксплуатационными характеристиками: высокой износостойкостью,
                  ударопрочностью и долговечностью, что делает её идеальным
                  выбором для различных типов покрытий.
                </p>

                {/* Second paragraph */}
                <p className="mt-5">
                  Наша продукция широко применяется в строительстве спортивных
                  площадок, детских игровых зон, беговых дорожек, а также для
                  создания безопасных резиновых покрытий. Резиновая крошка
                  обеспечивает отличную амортизацию, снижает риск травм и
                  подходит для использования как на открытом воздухе, так и в
                  помещениях. Экологически чистый продукт, соответствующий всем
                  европейским стандартам качества.
                </p>
              </div>

              <hr className="my-6 w-full lg:w-145 border-t border-gray-400/70" />
            </div>
            {/* Make order button */}
            <div>
              <Link href="/ru/oformit-zakaz">
                <button className="text-white bg-[#4CAF4F] text-center w-full p-3 rounded-3xl cursor-pointer">
                  Оформить Заказ
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
