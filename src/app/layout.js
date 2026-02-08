import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftBar from "@/components/LeftBar";
import TopNav from "@/components/TopNav";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import RightBar from "@/components/RightBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stray Kids Fandom",
  description: "Stray kids everywhere around the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <Banner />
        <Hero />
        <div className="flex">
          <LeftBar />
          <main className="flex-1 px-20"> {children}</main>
          <RightBar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
