import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import Favicon from "/public/favicon.ico";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bandırma Demir Çelik- Kaynak - Demir ve Çelik Doğrama Hizmetleri",
    template: "%s | Bandırma Demir Çelik",
  },

  icons: {
    icon: "/favicon.ico", // /public path
  },
  other: {
    "google-site-verification": "S5PQSC2OjcdxGl5CIgs_o1kC-bAdVrnJ5ORylDcs6Ik",
  },

  description:
    "Bandırma Demir Çelik, Balıkesir ve Bandırma bölgelerinde uzmanlaşmış bir firmayız. Bahçe kapılarından çitlere, tentelerden korkuluklara, parmaklıklardan çatı sistemlerine kadar geniş bir yelpazede hizmet sunuyoruz. Müşteri memnuniyeti bizim için her zaman en önemli önceliktir.",
  openGraph: {
    title: "Bandırma Demir - Kaynak ve Demir Doğrama Hizmetleri",
    description: "This is Bandırma Demir - Kaynak ve Demir Doğrama Hizmetleri.",
    url: baseUrl,
    siteName: "Bandırma Demir - Kaynak ve Demir Doğrama Hizmetleri",
    locale: "tr-TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white md:px-10 ",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4  mt-8 lg:mx-auto">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <main className="flex-auto min-w-0 mt-6 flex flex-col md:px-2 lg:px-0 tablet:flex-row tablet:justify-center">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
