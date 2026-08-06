import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Pune | 32Care Dental Clinic",
  description: "Get advanced, comfortable root canal treatment in Pune at 32Care Dental Clinic. Consult experienced dental specialists for personalised care.",
  icons: {
    icon: [
      { url: "/logos.png", sizes: "any", type: "image/webp" },
      { url: "/logos.png", sizes: "512x512", type: "image/webp" },
    ],
    apple: [{ url: "/logos.png", sizes: "180x180", type: "image/webp" }],
  },



};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
