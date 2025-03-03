import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import SomosBuchivacoa from "./components/SomosBuchivacoa";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camara Municipal de Buchivacoa",
  description: "Llevamos la información de la Cámara Municipal de Buchivacoa a tu alcance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar/>
        <SomosBuchivacoa showDownArrow={true} message="Bienvenidos" />

        {children}
        <SomosBuchivacoa showDownArrow={false}/>
        <Footer/>
      </body>
    </html>
  );
}
