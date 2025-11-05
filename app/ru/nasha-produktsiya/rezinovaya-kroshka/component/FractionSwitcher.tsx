// app/crumb-rubber/component/FractionSwitcher.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

type Fraction = {
  id: string;
  label: string;
  src: string;
};

const FRACTIONS: Fraction[] = [
  { id: "f-0-55", label: "0.55мм", src: "/CrumbRubberPage/ex-1.png" },
  { id: "f-1-3", label: "1–3мм", src: "/CrumbRubberPage/ex-2.png" },
  { id: "f-3-5", label: "3–5мм", src: "/CrumbRubberPage/ex-3.png" },
];

export default function FractionSwitcher() {
  const [selected, setSelected] = useState<Fraction>(FRACTIONS[0]);

  return (
    <div>
      {/* Main image changes with selection */}
      <Image
        src={selected.src}
        width={550}
        height={550}
        alt={`Резиновая крошка — фракция ${selected.label}`}
        className="rounded-xl object-cover"
        priority
      />

      {/* Picker */}
      <div className="flex items-center gap-7 mt-5 justify-center">
        <div>
          <p className="text-xl">Фракция</p>
          <p className="text-gray-400 mt-2">{selected.label}</p>
        </div>

        {FRACTIONS.map((f) => {
          const active = f.id === selected.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setSelected(f)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setSelected(f)
              }
              className={[
                "p-4 rounded-xl focus:outline-none focus:ring-2 transition",
                active
                  ? "border border-[#4CAF4F] ring-[#4CAF4F]"
                  : "border border-transparent hover:border-gray-300",
              ].join(" ")}
              aria-pressed={active}
              aria-label={`Выбрать фракцию ${f.label}`}
            >
              <Image
                src={f.src}
                width={60}
                height={60}
                alt={`Фракция ${f.label}`}
                className="rounded-md"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
