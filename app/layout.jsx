import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-screen">
      <body
        className={`${montserrat.variable} ${marcellus.variable} antialiased`}
        overflow-x-hidden
      >
        {children}
      </body>
    </html>
  );
}
