import "../styles/globals.css";
import "../../env";
import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { withCompanyName } from "@/lib/metadata";
import Header from "@/components/landing-page/header";
import Footer from "@/components/landing-page/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: withCompanyName("Home"),
  description:
    "The fastest way to translate your App Store application metadata and release notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn("bg-neutral-900", fontSans.variable)}>
        <Header />
        <main className="flex min-h-screen flex-col items-center gap-36 px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
