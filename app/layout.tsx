"use client";

import Footer from "@/components/Footer/Footer";
import HeadingBar from "@/components/HeadingBar/HeadingBar";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#E6E4F6] dark:bg-[#31353F]">
        <ThemeProvider enableSystem={true} attribute="class">
          <HeadingBar />
          <NavBar />
          {children}
          <div className="footer">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
