import clsx from "clsx";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 865 728"
      {...props}
      className={clsx("h-6 w-6 fill-black dark:fill-white", props.className)}
    >
      <rect width="865" height="728" rx="127" fill="white" />
      <path
        d="M279.125 408.25L356.052 274.97L351.625 267.301C345.007 256.198 340.727 243.859 339.049 231.042C337.371 218.225 338.33 205.2 341.867 192.767C345.404 180.334 351.444 168.755 359.617 158.74C367.79 148.725 377.923 140.486 389.394 134.528C400.866 128.571 413.434 125.02 426.327 124.094C439.22 123.169 452.167 124.887 464.372 129.145C476.577 133.403 487.783 140.11 497.303 148.854C506.822 157.599 514.455 168.196 519.732 179.997C521.388 183.599 521.66 187.686 520.498 191.477C519.335 195.268 516.818 198.498 513.426 200.553C511.498 201.672 509.356 202.371 507.138 202.604C504.921 202.837 502.68 202.599 500.561 201.904C498.443 201.21 496.495 200.076 494.846 198.575C493.197 197.075 491.884 195.243 490.992 193.2C487.503 185.313 482.436 178.222 476.105 172.365C469.774 166.507 462.312 162.007 454.178 159.139C446.043 156.272 437.409 155.099 428.804 155.692C420.199 156.285 411.807 158.631 404.143 162.587C396.478 166.542 389.704 172.024 384.236 178.694C378.768 185.364 374.722 193.082 372.347 201.374C369.972 209.665 369.317 218.355 370.424 226.909C371.531 235.463 374.375 243.699 378.783 251.113C378.846 251.192 378.899 251.278 378.941 251.37L406.277 298.689C407.665 301.093 408.395 303.82 408.395 306.595C408.395 309.371 407.665 312.098 406.277 314.502L333.895 439.875C329.646 447.028 322.75 452.219 314.7 454.322C306.651 456.426 298.096 455.272 290.891 451.112C283.686 446.952 278.411 440.12 276.208 432.097C274.006 424.074 275.054 415.506 279.125 408.25ZM557.82 329.187H533.429L460.395 202.687C456.146 195.534 449.25 190.344 441.2 188.24C433.151 186.137 424.596 187.29 417.391 191.451C410.186 195.611 404.911 202.443 402.708 210.466C400.506 218.489 401.554 227.057 405.625 234.312L474.093 352.906C475.479 355.308 477.473 357.302 479.873 358.69C482.274 360.078 484.998 360.81 487.771 360.812H558.195C593.556 360.812 623.323 389.749 622.75 425.11C622.478 441.597 615.777 457.326 604.077 468.945C592.377 480.564 576.601 487.155 560.113 487.312C556.073 487.264 552.159 488.72 549.134 491.398C546.109 494.076 544.188 497.785 543.747 501.801C543.563 503.986 543.836 506.185 544.548 508.259C545.26 510.333 546.396 512.237 547.883 513.848C549.37 515.46 551.176 516.744 553.186 517.621C555.196 518.497 557.366 518.945 559.559 518.937C572.171 518.926 584.654 516.404 596.28 511.517C607.906 506.63 618.443 499.476 627.274 490.473C636.106 481.47 643.056 470.798 647.719 459.081C652.383 447.363 654.665 434.834 654.434 422.224C653.367 370.28 609.863 329.187 557.899 329.187H557.82ZM591.125 422.541C590.334 405.522 575.668 392.437 558.65 392.437H406.929C404.153 392.437 401.425 393.167 399.021 394.555C396.616 395.943 394.62 397.939 393.232 400.344L361.29 455.687C356.979 463.122 351.198 469.599 344.3 474.725C337.402 479.851 329.532 483.517 321.17 485.5C312.808 487.483 304.13 487.741 295.664 486.259C287.199 484.777 279.125 481.585 271.935 476.878C264.744 472.171 258.588 466.049 253.843 458.884C249.097 451.719 245.862 443.662 244.333 435.205C242.805 426.748 243.016 418.069 244.954 409.696C246.892 401.323 250.515 393.433 255.604 386.508C258.061 383.308 259.237 379.306 258.901 375.285C258.564 371.264 256.74 367.513 253.785 364.766C252.151 363.31 250.233 362.209 248.152 361.533C246.071 360.857 243.872 360.62 241.695 360.837C239.517 361.054 237.409 361.721 235.502 362.796C233.596 363.87 231.934 365.328 230.62 367.078C218.423 383.241 211.762 402.905 211.625 423.153C211.437 444.105 218.19 464.529 230.83 481.239C243.47 497.949 261.286 510.005 281.498 515.526C301.709 521.046 323.18 519.721 342.559 511.757C361.939 503.793 378.137 489.638 388.626 471.5L397.758 455.687H559.5C563.784 455.692 568.025 454.827 571.965 453.143C575.904 451.46 579.461 448.993 582.418 445.893C585.375 442.794 587.672 439.125 589.169 435.111C590.666 431.096 591.331 426.82 591.125 422.541Z"
        fill="black"
      />
    </svg>
  );
}