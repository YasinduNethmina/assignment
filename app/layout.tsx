import HeadingBar from "@/components/HeadingBar/HeadingBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <HeadingBar />
        {children}
      </body>
    </html>
  );
}
