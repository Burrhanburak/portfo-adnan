import { BlogPosts } from "app/components/posts";
import Gallery from "./components/gallery";

const images = [
  "/demir-dograma.png",
  "/3.png",
  "/6.jpeg",
  "/4.jpeg",
  "/5.jpeg",
];

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Bandırma Demir
        </h1>
        <p className="mb-4">
          <p className="mb-4">
            Bandırma Demir, Balıkesir ve Bandırma bölgelerinde uzmanlaşmış bir
            firmayız. Bahçe kapılarından çitlere, tentelerden korkuluklara,
            parmaklıklardan çatı sistemlerine kadar geniş bir yelpazede hizmet
            sunuyoruz. Müşteri memnuniyeti bizim için her zaman en önemli
            önceliktir.{" "}
          </p>
        </p>
        <div className="grid min-h-[140px] w-full items-center rounded-lg p-2 lg:overflow-visible">
          <Gallery images={images} />

          {/*<Image*/}
          {/*    src="/demir-dograma.png"*/}
          {/*    width={500}*/}
          {/*    height={500}*/}
          {/*    className="object-cover object-center w-full rounded-lg shadow-lg shadow-gray-900"*/}
          {/*    alt="Picture of the author"*/}
          {/*/>*/}
        </div>

        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
