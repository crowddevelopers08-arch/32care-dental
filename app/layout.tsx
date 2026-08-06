import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosmo Dental Clinic | Zero-Pain Root Canal",
  description: "Advanced, judgement-free root canal treatment in Hyderabad.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
