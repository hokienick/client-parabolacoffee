import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Parabola Coffee Roasting Co. | Normal Heights, San Diego",
  description:
    "Specialty Latin American gourmet coffee, roasted in San Diego. Visit us at 3504 Adams Ave, Normal Heights. Open daily 7:30am–3pm.",
  openGraph: {
    title: "Parabola Coffee Roasting Co.",
    description: "Specialty coffee roasted with community in mind. Normal Heights, San Diego.",
    siteName: "Parabola Coffee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
