import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Branding Studio | Logo & Cover Photo Ordering Portal",
  description: "Select premium Logo and Cover Photo designs for your business. Custom branding, bilingual Sinhala and English ordering portal with instant WhatsApp order submission.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased ${montserrat.variable}`} suppressHydrationWarning>
      <body className={`min-h-full flex flex-col bg-slate-50 ${montserrat.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
