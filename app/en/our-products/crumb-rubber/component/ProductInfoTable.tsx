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
            title="APPLICATION"
            open={openId === "how"}
            onClick={() => toggle("how")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Crumb rubber is used to create safe surfaces on sports facilities,
              children's play areas, running tracks, and sidewalks. The material
              is laid on a prepared base using a special polyurethane binder.
              Provides excellent cushioning and surface durability.
            </p>
          </Item>

          <Item
            id="quality"
            title="QUALITY"
            open={openId === "quality"}
            onClick={() => toggle("quality")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Production on next-generation automated lines, full compliance with
              European standards, certified product with quality control for each
              batch.
            </p>
          </Item>

          <Item
            id="features"
            title="KEY FEATURES"
            open={openId === "features"}
            onClick={() => toggle("features")}
          >
            <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>High wear resistance and impact resistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Environmentally friendly material</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Resistance to temperature fluctuations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Excellent cushioning and safety</span>
              </li>
            </ul>
          </Item>

          <Item
            id="ingredients"
            title="COMPOSITION AND FRACTIONS"
            open={openId === "ingredients"}
            onClick={() => toggle("ingredients")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              100% recycled rubber from worn tires. Available fractions: 0.5-2mm,
              1-3mm, 2-4mm, 3-5mm. Material is cleaned of metal and textile
              inclusions, uniform in size and composition.
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
