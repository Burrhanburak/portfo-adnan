import Link from "next/link";
import React from "react";
import { baseUrl } from "../sitemap";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bandırma Demir - Bandırma Demir Çelik - Hakkımızda",
    template: "%s | Bandırma Demir sistemleri",
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

const Hakkımızda = () => {
  return (
    <div className="w-full container mx-auto">
      <header className="bg-white text-black py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">
            Bandırma Demir - Bandırma Demir Çelik - Hakkımızda{" "}
          </h1>
        </div>
      </header>

      <div className="container mx-auto py-8">
        <section id="iletisim" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {" "}
            Bandırma Demir Hakkımızda
          </h2>
          <p className="mb-2">
            Bandırma Demir olarak, Adnan Tezol Demir Doğrama adı altında çeşitli
            demir doğrama ve kaynakçılık hizmetleri sunuyoruz. Kaliteli malzeme
            ve işçilikle müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </section>
      </div>

      <footer className="text-white py-4">
        <div className="container mx-auto text-center">
          {/* <p>&copy; 2024 Bandırma Demir - Adnan Tezol Demir Doğrama</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Hakkımızda;
