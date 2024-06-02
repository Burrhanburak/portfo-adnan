import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import Image from "next/image";
export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
            <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
            >
              <div
                  className="relative flex flex-col mt-6 text-white bg-black border shadow-md bg-clip-border rounded-xl">
                <div className="p-6"><h5
                    className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {post.metadata.title}
                </h5><p
                    className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {
                    post.metadata.summary.length < 20 ? post.metadata.summary : post.metadata.summary.slice(0, 100) + "..."
                  }
                </p></div>
                {/*<div className="p-6 pt-0">*/}
                {/*  <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-white">*/}
                {/*    {formatDate(post.metadata.publishedAt, false)}*/}
                {/*  </p>*/}
                {/*</div>*/}

                <div className="p-6 pt-0">
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-white text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  >
                      Read More
                  </Link>
                </div>
              </div>
              {/*<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 border rounded-lg">*/}
              {/*  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">*/}
              {/*    {formatDate(post.metadata.publishedAt, false)}*/}
              {/*  </p>*/}
              {/*  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">*/}
              {/*    {post.metadata.title}*/}
              {/*  </p>*/}
              {/*</div>*/}


              {post.metadata.image &&
                  <Image src={post.metadata.image} width={500} height={500} alt={post.metadata.title}/>}

            </Link>
        ))}
    </div>
  );
}
