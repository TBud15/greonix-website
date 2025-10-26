import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Русский</p>

      <Link href="/rus/about">
        <p className="mt-10">
          Go to <span className="text-blue-500">about</span>
        </p>
      </Link>
      
      <Link href="/ukr">
        <p className="mt-5">
          Go to <span className="text-blue-500">Ukrainian version</span>
        </p>
      </Link>
    </div>
  );
}
