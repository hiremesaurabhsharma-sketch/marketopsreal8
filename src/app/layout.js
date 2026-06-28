import { Be_Vietnam_Pro, Inter, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  title: "MarketOps - Work smarter, achieve faster",
  description: "Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${inter.variable} ${outfit.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased overflow-x-hidden relative">
        {/* Atmospheric Glows */}
        <div className="liquid-glow"></div>
        <div className="liquid-glow-2"></div>
        
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
