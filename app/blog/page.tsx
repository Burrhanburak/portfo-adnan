import { BlogPosts } from "app/components/posts";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata = {
  title:
    "Bandırma Demir Blog: Kaynak ve Demir Doğrama Hizmetleri Hakkında Güncel Bilgiler",
  description:
    "Bandırma Demir Blog, kaynak ve demir doğrama hizmetleriyle ilgili güncel bilgiler ve ipuçları sunar. Uzmanlığımızı paylaşıyoruz!",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Bandırma Demir Blog
      </h1>
      <Breadcrumbs
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <BlogPosts />
    </section>
  );
}
