import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Midea",
   description: "Midea asia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="ru">
         <body className={inter.className}>
            <div className="wrapper">
               <Header />
               <main className="main">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
