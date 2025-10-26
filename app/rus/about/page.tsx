import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Greonix - русская версия",
};

export default function Page() {
  return (
    <div>
      <h1>About Greonix</h1>
      <p>About rus</p>
    </div>
  );
}
