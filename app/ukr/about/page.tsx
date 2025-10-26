import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Greonix - українська версія",
};

export default function Page() {
  return (
    <div>
      <h1>About Greonix</h1>
      <p>About UA</p>
    </div>
  );
}
