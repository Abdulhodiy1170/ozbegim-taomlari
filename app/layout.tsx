import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "O'zbegim Taomlari — Marg'ilondagi milliy taomlar oshxonasi",
  description:
    "Mazali taom — ko'ngilga malham. Toshkent oshi, qozon kabob, lag'mon, manti va boshqa milliy taomlar. 500 kishilik to'y zali, Express24 orqali yetkazib berish. Marg'ilon, har kuni 08:00–23:00.",
  keywords: ["oshxona", "Marg'ilon", "milliy taomlar", "palov", "qozon kabob", "to'yxona", "banket", "O'zbegim Taomlari"],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "O'zbegim Taomlari",
    description: "Mazali taom — ko'ngilga malham. Marg'ilondagi milliy taomlar oshxonasi.",
    images: ["/logo.png"],
    type: "website",
    locale: "uz_UZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#dc3545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
