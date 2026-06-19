import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Geist } from "next/font/google";


import LayoutHeader from "@/shared/layout/header/LayoutHeader";
import LayoutFooter from "@/shared/layout/footer/LayoutFooter";
import { cn } from "@/shared/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Arenas Inmobiliaria",
  description: "Sitio web oficial de Arenas inmobiliaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col justify-between gap-5">
        <LayoutHeader self-start/>
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}
