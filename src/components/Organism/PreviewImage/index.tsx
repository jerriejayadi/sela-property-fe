// components/PreviewModal.tsx

import React from "react";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface PreviewModalProps {
  isOpen: boolean;
  imageUrl: string;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  imageUrl,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 py-10"
      onClick={onClose}
    >
      <div
        className="relative bg-white  max-w-full max-h-full md:h-full  p-4 overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-xl z-10"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image */}
        <Image
          src={imageUrl}
          alt="Preview"
          width={1200} // Provide a default width
          height={800} // Provide a default height
          objectFit="contain"
          className="w-full h-full flex shrink object-contain"
          loader={({ src }) => src}
        />

        {/* Image Index */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl z-10"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        disabled={images.length <= 1} // Disable if there's only one image
      >
        <ArrowLeft2 />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl z-10"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={images.length <= 1} // Disable if there's only one image
      >
        <ArrowRight2 />
      </button>
    </div>
  );
};

export default PreviewModal;
