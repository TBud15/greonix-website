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
            title="HOW TO USE"
            open={openId === "how"}
            onClick={() => toggle("how")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Using vitamin C supplements effectively involves understanding the
              appropriate dosage, the form that best suits your needs, and the
              timing of intake. Here are some guidelines.
            </p>
          </Item>

          <Item
            id="quality"
            title="QUALITY"
            open={openId === "quality"}
            onClick={() => toggle("quality")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Third-party tested, non-GMO, GMP-certified facility, with batch
              traceability.
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
                <span>Buffered form for gentle absorption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>Vegan capsules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4CAF4F] mt-0.5">●</span>
                <span>No artificial colors or flavors</span>
              </li>
            </ul>
          </Item>

          <Item
            id="ingredients"
            title="INGREDIENTS"
            open={openId === "ingredients"}
            onClick={() => toggle("ingredients")}
          >
            <p className="text-sm leading-relaxed text-slate-600">
              Ascorbic acid; capsule: hypromellose (plant-based); rice flour.
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
