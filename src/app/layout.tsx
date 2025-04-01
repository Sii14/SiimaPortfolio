import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Siima | Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Siima | Portfolio</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header /> {/* Add Header here */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add Footer here */}
      </body>
    </html>
  );
}