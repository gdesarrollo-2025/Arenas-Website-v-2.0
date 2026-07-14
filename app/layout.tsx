import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Geist } from "next/font/google";


import LayoutHeader from "@/shared/layout/header/LayoutHeader";
import LayoutFooter from "@/shared/layout/footer/LayoutFooter";
import { cn } from "@/shared/lib/utils";
import Script from "next/script";

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
      className={cn("h-full scroll-smooth", "antialiased", montserrat.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col justify-between">
        <LayoutHeader self-start/>
        {children}
        <LayoutFooter />
      </body>
      <Script id="hs-script-loader" strategy="afterInteractive" src="//js-na1.hs-scripts.com/8765689.js" />
    </html>
  );
}
