"use client";

import { useState } from "react";

export default function DetailsAccordion() {
  const [openId, setOpenId] = useState<string | null>("how");
  const toggle = (id: string) => setOpenId((v) => (v === id ? null : id));

  return (
    <div className="  flex items-center justify-center">
      <section className="w-145 max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
        <ul className="divide-y divide-slate-100">
          <Item
            id="how"
            title="ПРИМЕНЕНИЕ"
            open={openId === "how"}
            onClick={() => toggle("how")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Резиновая крошка используется для создания безопасных покрытий на
              спортивных площадках, детских игровых зонах, беговых дорожках и
              тротуарах. Материал укладывается на подготовленное основание с
              использованием специального полиуретанового связующего.
              Обеспечивает отличную амортизацию и долговечность покрытия.
            </p>
          </Item>

          <Item
            id="quality"
            title="КАЧЕСТВО"
            open={openId === "quality"}
            onClick={() => toggle("quality")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Производство на автоматизированных линиях нового поколения, полное
              соответствие европейским стандартам, сертифицированный продукт с
              контролем качества каждой партии.
            </p>
          </Item>

          <Item
            id="features"
            title="КЛЮЧЕВЫЕ ХАРАКТЕРИСТИКИ"
            open={openId === "features"}
            onClick={() => toggle("features")}
          >
            <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Высокая износостойкость и ударопрочность</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Экологически чистый материал</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Устойчивость к температурным перепадам</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Отличная амортизация и безопасность</span>
              </li>
            </ul>
          </Item>

          <Item
            id="ingredients"
            title="СОСТАВ И ФРАКЦИИ"
            open={openId === "ingredients"}
            onClick={() => toggle("ingredients")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              100% переработанная резина из изношенных шин. Доступные фракции:
              0.5-2мм, 1-3мм, 2-4мм, 3-5мм. Материал очищен от металлических и
              текстильных включений, однородный по размеру и составу.
            </p>
          </Item>
        </ul>
      </section>
    </div>
  );
}

function Item({
  id,
  title,
  open,
  onClick,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="group">
      <button
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
        aria-expanded={open}
        aria-controls={`content-${id}`}
        onClick={onClick}
      >
        <span className="text-sm font-semibold tracking-wide text-slate-800 transition-colors group-hover:text-[#4CAF4F]">
          {title}
        </span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 text-base font-medium transition-all duration-300 ${
            open
              ? "rotate-180 border-[#4CAF4F] bg-[#4CAF4F] text-white"
              : "border-slate-300 bg-white text-slate-600 group-hover:border-[#4CAF4F] group-hover:text-[#4CAF4F]"
          }`}
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        id={`content-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-1 pr-12">{children}</div>
        </div>
      </div>
    </li>
  );
}
