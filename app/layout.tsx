import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#E19C3E" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
