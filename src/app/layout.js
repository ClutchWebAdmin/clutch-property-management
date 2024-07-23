import { switzer } from "./styles/fonts";
import "animate.css";
import "./globals.css";
import TheFooter from "@/app/components/TheFooter";
import AOSLoader from "@/app/utils/AOSLoader";
import { Analytics } from "@vercel/analytics/react";
import CookieModal from "./components/CookieModal";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-svh w-screen max-w-full flex flex-col mx-auto relative ${switzer.className} antialiased`}
      >
        {children}
        <TheFooter />
        <AOSLoader />
        <Analytics />
        <CookieModal />
        <GoogleTagManager gtmId="GTM-5K7QF5K4" />
        <GoogleTagManager gtmId="GTM-MHH3MTZ3" />
      </body>
    </html>
  );
}
