import Link from "next/link";
import React from "react";

const Iletisim = () => {
  return (
    <div className="w-full container mx-auto">
      <header className="bg-white text-black dark:!bg-black dark:!text-white text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">
            Bandırma Demir - Adnan Tezol Demir Doğrama
          </h1>
        </div>
      </header>

      <div className="container mx-auto py-8">
        <section id="iletisim" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">İletişim</h2>
          <p className="mb-2">
            Bandırma Demir olarak, Adnan Tezol Demir Doğrama adı altında çeşitli
            demir doğrama ve kaynakçılık hizmetleri sunuyoruz. Kaliteli malzeme
            ve işçilikle müşteri memnuniyetini ön planda tutuyoruz.
          </p>
          <p className="mb-4"></p>
          <Link
            href="https://api.whatsapp.com/send?phone=05325802216"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 2.084.51 4.043 1.486 5.824L0 24l6.407-1.48A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.598 16.217l-.835 2.883a.67.67 0 01-.98.412c-2.987-1.669-5.48-3.276-7.646-6.123-1.81-2.346-2.31-4.362-.58-6.392l.763-1.021c.353-.474.936-.663 1.474-.474l2.384.843a.674.674 0 01.397.975l-1.342 2.032a.674.674 0 00.068.876c.557.578 1.12 1.092 1.734 1.564.695.522 1.458.898 2.199 1.226a.674.674 0 01.352.383l1.076 2.292a.674.674 0 01-.403.895zM12 22.5c-1.455 0-2.837-.264-4.092-.74l-.734.171 1.432-4.95.433-.394c1.02-.927 2.377-1.336 3.867-1.309 3.435.061 6.068-2.59 6.012-6.011-.027-1.49-.382-2.847-1.31-3.868l-.393-.433 4.949-1.433-.171.735A11.978 11.978 0 0122.5 12c0 5.522-4.478 10-10 10z" />
            </svg>
            WhatsApp ile İletişime Geç
          </Link>
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

export default Iletisim;
