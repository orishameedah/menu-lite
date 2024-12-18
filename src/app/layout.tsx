import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const productSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-productSans",
});

export const metadata: Metadata = {
  title: "Bountip Lite",
  description: "Bountip Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${productSans.variable}`}
        style={{ maxWidth: "2000px" }}
      >
        {children}
      </body>
    </html>
  );
}
