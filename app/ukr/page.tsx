import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Мавпа</p>

      <Link href="/rus">
        <p className="mt-10">
          Go to <span className="text-blue-500">Russian version</span>
        </p>
      </Link>
    </div>
  );
}
