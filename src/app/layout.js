import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Miraz Ahammed | Portfolio",
  description: "Frontend Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Frontend Web Developer Portfolio" />
        <meta property="og:title" content="Miraz Ahammed | Portfolio" />
        <meta property="og:description" content="Frontend Web Developer Portfolio" />
        <meta property="og:image" content="/parvez.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Miraz Ahammed | Portfolio" />
        <meta name="twitter:description" content="Frontend Web Developer Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}