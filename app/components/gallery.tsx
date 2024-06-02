"use client";

import { useState } from "react";

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={activeImage}
          alt="Active"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} onClick={() => setActiveImage(img)}>
            <img
              src={img}
              width={400}
              height={400}
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt={`gallery-image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
