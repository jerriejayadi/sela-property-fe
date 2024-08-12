// components/PictureGrid.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import PreviewModal from "../PreviewImage";

interface PictureGridProps {
  images: string[];
}

const PictureGrid: React.FC<PictureGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };
  return (
    <div
      className="grid grid-cols-2 gap-4"
      style={{
        gridAutoRows: "min-content", // Let rows adjust based on content
        gridAutoFlow: "dense", // Fill gaps with items
      }}
    >
      {images.map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={500} // Provide a default width
            height={750} // Provide a default height (adjust as needed)
            objectFit="cover"
            className="w-full h-auto" // Ensure image maintains aspect ratio
            loader={({ src }) => src}
            onClick={() => handleImageClick(src, index)}
          />
        </div>
      ))}
      <PreviewModal
        isOpen={isModalOpen}
        imageUrl={selectedImage || ""}
        images={images}
        currentIndex={currentIndex}
        onClose={handleCloseModal}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default PictureGrid;
