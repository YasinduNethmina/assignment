import Footer from "@/components/Footer/Footer";
import HeadingBar from "@/components/HeadingBar/HeadingBar";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="z-50">
        <HeadingBar />
        <NavBar />

        {children}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
