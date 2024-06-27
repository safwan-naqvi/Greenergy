// import FooterComponent from "@/components/footer";
import localFont from "next/font/local";
import { Metadata } from "next/types";
import "./globals.css";
import Header from "@/components/layouts/header/Header";
const myFont = localFont({
  src: "../../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Greenery",
  description: "Portfolio by HashBitStudio (Syed Safwan Abbas)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper">
        <div className="content_container">
          <Header />
          {children}
          {/* <FooterComponent /> */}
        </div>
      </body>
    </html>
  );
}