import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { COMPANY_NAME, DESCRIPTION, PRODUCT_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${PRODUCT_NAME} | ${COMPANY_NAME}`,
    template: `%s | ${PRODUCT_NAME}`,
  },
  description: DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: "#04080f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 font-sans text-slate-200">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
