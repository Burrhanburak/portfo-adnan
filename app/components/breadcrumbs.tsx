import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex flex-wrap items-center w-full mb-4 py-1 text-sm rounded-md bg-blue-gray-50 bg-opacity-60">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.url}
            className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500"
          >
            <Link href={breadcrumb.url}>
              <span
                className={
                  index === breadcrumbs.length - 1
                    ? "opacity-100"
                    : "opacity-60"
                }
              >
                {breadcrumb.name}
              </span>
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
