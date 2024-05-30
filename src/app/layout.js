import { Inter } from "next/font/google";
import "animate.css";
import "./globals.css";
import TheHeader from "@/app/components/TheHeader";
import TheFooter from "@/app/components/TheFooter";
import AOSLoader from "@/app/utils/AOSLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clutch Property Management",
  description: "",
  keywords: "",
  openGraph: {
    title: "Clutch Property Management",
    description: "",
    siteName: "Clutch Property Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchpropertymanagement.com",
    images: [
      {
        url: "https://clutchpropertymanagement.com/images/og-image.png",
        alt: "Clutch Property Management",
      },
    ],
  },
  images: [
    {
      url: "https://clutchpropertymanagement.com/images/og-image.png",
      alt: "Clutch Property Management",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`min-h-svh max-w-screen flex flex-col mx-auto relative ${inter.className} antialiased`}
      >
        <TheHeader />
        {children}
        <TheFooter />
        <AOSLoader />
      </body>
    </html>
  );
}
