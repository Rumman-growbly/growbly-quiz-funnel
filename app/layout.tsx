import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Readiness Quiz | Growbly",
  description:
    "Find out exactly where your business is leaving time and money on the table. Take our 2-minute diagnostic and get a personalized automation roadmap.",
  openGraph: {
    title: "Is AI Right for Your Business? | Growbly",
    description:
      "Take our free 2-minute quiz and find out exactly where automation can unlock your next stage of growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Calendly popup widget */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
      </head>
      <body className="font-sans antialiased bg-brand-bg text-white">
        {children}
      </body>
    </html>
  );
}
