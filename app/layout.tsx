import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
