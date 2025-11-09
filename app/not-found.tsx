// app/not-found.tsx
"use client";
import { useState, CSSProperties } from "react";

type BtnProps = {
  code: "EN" | "UA" | "RU";
  title: string;
  subtitle: string;
  circleBg: string; // e.g. "#3B82F6"
  panelFrom: string; // gradient start
  panelTo: string; // gradient end
  border: string; // default border color
  borderHover: string;
  onClick: () => void;
};

function LanguageButton({
  code,
  title,
  subtitle,
  circleBg,
  panelFrom,
  panelTo,
  border,
  borderHover,
  onClick,
}: BtnProps) {
  const [hovered, setHovered] = useState(false);

  const panelStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${panelFrom}, ${panelTo})`,
    border: `2px solid ${hovered ? borderHover : border}`,
    borderRadius: 12,
    padding: 24,
    cursor: "pointer",
    transition:
      "transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0 10px 20px rgba(0,0,0,0.08)"
      : "0 4px 10px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  };

  const circleStyle: CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: "9999px",
    backgroundColor: circleBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 24,
  };

  const titleStyle: CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    color: "#1F2937", // gray-800
    margin: 0,
  };

  const subStyle: CSSProperties = {
    fontSize: 14,
    color: "#4B5563", // gray-600
    margin: 0,
  };

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={panelStyle}
      aria-label={`Switch to ${title}`}
    >
      <div style={circleStyle}>{code}</div>
      <p style={titleStyle}>{title}</p>
      <p style={subStyle}>{subtitle}</p>
    </button>
  );
}

export default function NotFound() {
  const handleLanguageChange = (lang: string) => {
    window.location.href = `/${lang}`;
  };

  // ---- base layout styles ----
  const outer: CSSProperties = {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom, #F9FAFB, #FFFFFF)", // gray-50 -> white
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px 24px",
  };

  const main: CSSProperties = {
    width: "100%",
    maxWidth: 672, // ~max-w-2xl
    textAlign: "center" as const,
  };

  const iconWrap: CSSProperties = {
    marginBottom: 32,
    display: "flex",
    justifyContent: "center",
  };

  const iconCircle: CSSProperties = {
    width: 128,
    height: 128,
    backgroundColor: "#FEE2E2", // red-100
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const h1: CSSProperties = {
    fontSize: 60,
    lineHeight: 1.1,
    fontWeight: 800,
    color: "#111827", // gray-900
    margin: "0 0 16px 0",
  };

  const h2: CSSProperties = {
    fontSize: 30,
    lineHeight: 1.25,
    fontWeight: 600,
    color: "#1F2937", // gray-800
    margin: "0 0 16px 0",
  };

  const pLead: CSSProperties = {
    fontSize: 20,
    lineHeight: 1.6,
    color: "#4B5563", // gray-600
    margin: "0 0 48px 0",
  };

  const card: CSSProperties = {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)", // soft shadow
    padding: 32,
    marginBottom: 32,
    textAlign: "left" as const,
  };

  const cardTitle: CSSProperties = {
    fontSize: 20,
    fontWeight: 600,
    margin: "0 0 24px 0",
  };

  // button grid: stack on mobile; we’ll keep vertical layout for simplicity
  const btnColumnWrap: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  };

  // contact row
  const contactRow: CSSProperties = {
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  };

  // link style with hover handled via onMouseEnter/Leave
  const [phoneHover, setPhoneHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);

  const linkBase: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#4CAF4F",
    fontWeight: 500,
    textDecoration: phoneHover ? "underline" : "none",
  };

  const linkBaseMail: CSSProperties = {
    ...linkBase,
    textDecoration: mailHover ? "underline" : "none",
  };

  const iconSm: CSSProperties = { width: 20, height: 20 };

  return (
    <div style={outer}>
      <main style={main}>
        {/* 404 Icon */}
        <div style={iconWrap}>
          <div style={iconCircle}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#DC2626" /* red-600 */
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 style={h1}>404</h1>
        <h2 style={h2}>Сторінку не знайдено</h2>
        <p style={pLead}>
          Сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>

        {/* Language Selection */}
        <section style={card} aria-labelledby="language-title">
          <h3 id="language-title" style={cardTitle}>
            Choose Your Language / Виберіть мову / Выберите язык
          </h3>

          <div style={btnColumnWrap}>
            <LanguageButton
              code="EN"
              title="English"
              subtitle="Go to Home"
              circleBg="#3B82F6" // blue-500
              panelFrom="#EFF6FF" // blue-50
              panelTo="#DBEAFE" // blue-100
              border="#BFDBFE" // blue-200
              borderHover="#60A5FA" // blue-400
              onClick={() => handleLanguageChange("en")}
            />

            <LanguageButton
              code="UA"
              title="Українська"
              subtitle="На головну"
              circleBg="#F59E0B" // yellow-500 (close to 400)
              panelFrom="#FEF9C3" // yellow-100
              panelTo="#DBEAFE" // a touch of blue like original
              border="#FDE68A" // yellow-300
              borderHover="#F59E0B" // yellow-500
              onClick={() => handleLanguageChange("ukr")}
            />

            <LanguageButton
              code="RU"
              title="Русский"
              subtitle="На главную"
              circleBg="#EF4444" // red-500
              panelFrom="#FEE2E2" // red-100
              panelTo="#DBEAFE" // blue-100 blend
              border="#FECACA" // red-200
              borderHover="#F87171" // red-400
              onClick={() => handleLanguageChange("ru")}
            />
          </div>
        </section>

        {/* Contact Info */}
        <section style={card} aria-labelledby="contact-title">
          <h3 id="contact-title" style={cardTitle}>
            Need Help? / Потрібна допомога? / Нужна помощь?
          </h3>

          <div style={contactRow}>
            {/* Phone */}
            <a
              href="tel:+380686868700"
              style={linkBase}
              onMouseEnter={() => setPhoneHover(true)}
              onMouseLeave={() => setPhoneHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={iconSm}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h1.28a2 2 0 011.94 1.515l.5 2A2 2 0 018.8 8.2l-.9.9a16 16 0 006 6l.9-.9a2 2 0 011.685-.08l2 .5A2 2 0 0121 15.72V17a2 2 0 01-2 2h-1A16 16 0 013 7V6a2 2 0 012-2z"
                />
              </svg>
              +38 068 68 68 700
            </a>

            {/* Email */}
            <a
              href="mailto:info@greonix.com.ua"
              style={linkBaseMail}
              onMouseEnter={() => setMailHover(true)}
              onMouseLeave={() => setMailHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={iconSm}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.94 6.34A2 2 0 014.6 5h10.8a2 2 0 011.66.94L10 10.882 2.94 6.34z" />
                <path d="M18 8.118l-8 4.764-8-4.764V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@greonix.com.ua
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
