import type { Metadata } from "next";
import "../styles/globals.css";

import { Manrope } from "next/font/google";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Movie Explorer",
  description:
    "Modern, fast, and visually polished web application that allows users to browse, search, and explore movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className={`antialiased bg-bg`}>
        {children} <Toaster position="top-center" theme="dark" />
      </body>
    </html>
  );
}
