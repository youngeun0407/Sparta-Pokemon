import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "스파르타 포켓몬 도감",
  description: "영은쓰의 포켓몬 도감",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-white	text-center pt-[1rem] border-double border-b-4 border-red-500">
          <h2 className="font-bold text-3xl">영은쓰의 포켓몬 도감!</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
