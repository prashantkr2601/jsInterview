import React, { useEffect, useRef } from "react";

function ImageGallery({ images }) {
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Assign the real image URL to the src
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "100px 0px", // Load images 100px before they enter the viewport
      }
    );

    imgRefs.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 200px)", gap: "10px" }}>
      {images.map((url, index) => (
        <img
          key={index}
          data-src={url}
          ref={(el) => (imgRefs.current[index] = el)}
          src=""
          alt=""
          width="200"
          height="200"
          style={{ backgroundColor: "#f0f0f0" }} // Placeholder color
        />
      ))}
    </div>
  );
}

export default ImageGallery;
