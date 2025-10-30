//Navbar component

import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="flex m-8 gap-10 items-center justify-around">
        {/* Logo and title */}
        <div className="flex gap-2 items-center">
          <Image
            src="/Navbar/logo.svg"
            width={40}
            height={40}
            alt="Right arrow"
            unoptimized
            className="mt-1"
          />
          <p className="text-3xl font-inter font-bold">Greonix</p>
        </div>
        {/* Menu options */}
        <div className="flex gap-10 items-center font-inter">
          <div className="flex gap-10">
            <p>Главная</p>
            <p>Наша Продукция</p>
            <p>Контакт</p>
          </div>

          {/* Submit order button */}
          <div className="flex gap-2 bg-[#4CAF4F] text-white p-3 rounded-xl items-centered pt-4 pb-4 pl-6 pr-6">
            <p>Оформить Заказ</p>
            <Image
              src="/Navbar/right-arrow.svg"
              width={20}
              height={20}
              alt="Right arrow"
              unoptimized
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
