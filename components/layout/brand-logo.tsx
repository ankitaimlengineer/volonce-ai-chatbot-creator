import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5 rounded-md">
      <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-md" priority />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-wide text-white">VOLONCE AI</span>
        <span className="block text-[11px] text-slate-400">Chatbot Creator</span>
      </span>
    </Link>
  );
}
