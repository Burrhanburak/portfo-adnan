import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Next.js Portfolio Starter";

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    // <div
    //   style={{
    //     height: "100%",
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "#fff",
    //     fontSize: 32,
    //     fontWeight: 600,
    //   }}
    // >
    //   <svg
    //     width="75"
    //     viewBox="0 0 75 65"
    //     fill="#000"
    //     style={{ margin: "0 75px" }}
    //   >
    //     <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
    //   </svg>
    //   <div style={{ marginTop: 40 }}>{title}</div>
    // </div>
    {
      width: 1200,
      height: 630,
    }
  );
}
