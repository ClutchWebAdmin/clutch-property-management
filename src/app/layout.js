import { switzer } from "./styles/fonts";
import "animate.css";
import "./globals.css";
import TheFooter from "@/app/components/TheFooter";
import AOSLoader from "@/app/utils/AOSLoader";

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
        className={`min-h-svh max-w-screen flex flex-col mx-auto relative ${switzer.className} antialiased`}
      >
        {children}
        <TheFooter />
        <AOSLoader />
      </body>
    </html>
  );
}
