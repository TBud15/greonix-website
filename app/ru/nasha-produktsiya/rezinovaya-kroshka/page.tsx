// Server component for good SEO
// any client components should be imported here to save SEO optimization of this page

import Image from "next/image";
import ProductInfoTabs from "./component/ProductInfoTable";
import FractionSwitcher from "./component/FractionSwitcher";
import ProductDetails from "./component/ProductDetails";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <div className="font-inter">
      <div className="ml-80">
        <p className="text-gray-400">
          Наша продукция /{" "}
          <span className="text-green-400">Резиновая Крошка</span>
        </p>

        {/* Start of page product div */}
        <div className="flex gap-15 mt-5">
          {/* Left side photo and fraction*/}

          <FractionSwitcher />

          <div>
            {/* Produt info right side */}
            <div>
              <h1 className="text-4xl">Резиновая Крошка Greonix</h1>

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

                {/* Size variable */}
                <p className="text-xl mt-1.5 ml-5">0.55 мм</p>
              </div>

              <hr className="my-6 w-145 border-t border-gray-400/70" />

              {/* Product description paragraph */}
              {/* First paragraph */}
              <div className="w-145">
                <p>
                  Vitamin C, also known as ascorbic acid, is a vital nutrient
                  for various bodily functions, including the maintenance of
                  healthy skin, blood vessels, bones, and cartilage. It also
                  helps with wound healing and acts as an antioxidant.
                </p>

                {/* Second paragraph */}
                <p className="mt-5">
                  Vitamin C, also known as ascorbic acid, is a vital nutrient
                  for various bodily functions, including the maintenance of
                  healthy skin, blood vessels, bones, and cartilage. It also
                  helps with wound healing and acts as an antioxidant. Vitamin
                  C, also known as ascorbic acid, is a vital nutrient for
                  various bodily functions, including the maintenance of healthy
                  skin, blood vessels, bones, and cartilage. It also helps with
                  wound healing and acts as an antioxidant. Read more...
                </p>
              </div>

              <hr className="my-6 w-145 border-t border-gray-400/70" />
            </div>
            {/* Make order button */}
            <div>
              <button className="text-white bg-[#4CAF4F] text-center w-full p-3 rounded-3xl">
                Оформить Заказ
              </button>
            </div>
            <div className="mt-6">
              <ProductInfoTabs />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ProductDetails />
      </div>
    </div>
  );
}
