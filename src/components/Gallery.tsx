
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  images: { id: string; url: string; alt: string }[];
  columns?: number;
}

const Gallery: React.FC<GalleryProps> = ({ images, columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Distribute images into columns
  const distributeImages = () => {
    const cols: { id: string; url: string; alt: string }[][] = Array.from({ length: columns }, () => []);
    
    images.forEach((image, index) => {
      cols[index % columns].push(image);
    });
    
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageColumns.map((column, colIndex) => (
          <div key={`col-${colIndex}`} className="flex flex-col gap-4">
            {column.map((image, imgIndex) => (
              <div 
                key={image.id} 
                className="image-zoom rounded-lg overflow-hidden shadow-lg hover:shadow-construction cursor-pointer"
                onClick={() => openLightbox(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto"
                  loading={imgIndex > 2 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} className="text-white" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg animate-fade-in" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
