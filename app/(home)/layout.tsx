import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

import Newskills from "../Components/NewSkills";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import About from "../Components/About";
import Newmain from "../Components/Newmain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Aliaj",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header collapse={true} setCollapse={true} />
        <Newmain/>
        <About />

        {children}

        <Newskills />
        <Contact />
      </body>
    </html>
  );
}