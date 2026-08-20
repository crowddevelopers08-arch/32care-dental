import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Pune | 32Care Dental Clinic",
  description: "Get advanced, comfortable root canal treatment in Pune at 32Care Dental Clinic. Consult experienced dental specialists for personalised care.",
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png", sizes: "any", type: "image/webp" },
      { url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png", sizes: "512x512", type: "image/webp" },
    ],
    apple: [{ url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786960421/logo-32.png", sizes: "180x180", type: "image/webp" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P3WW3NS8');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3WW3NS8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}