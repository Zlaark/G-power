import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "G-Power | Advanced BESS & Energy Storage Sustainability",
  description: "G-Power provides high-performance battery energy storage systems (BESS) and turnkey energy solutions for a sustainable future.",
  icons: {
    icon: "/logo.png", // Using the logo as favicon
    apple: "/logo.png", // For iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased overflow-x-clip w-full max-w-[100vw] relative`}
      >
        {children}
      </body>
    </html>
  );
}
