"use client";

import { useState } from "react";
import { Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const IMAGES_PER_PAGE = 9;

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const currentImages = images.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const openImage = (photo: GalleryImage) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentImages.map((photo) => (
          <div key={photo.id} className="group overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <button 
                  onClick={() => openImage(photo)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100 px-3 py-1 rounded text-sm flex items-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold">{photo.title}</h3>
              <p className="text-sm text-gray-600">
                {photo.date}
                {photo.category && ` • ${photo.category}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Full-size Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={closeImage}
            aria-label="Close image viewer"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-lg font-bold">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300">
                {selectedImage.date}
                {selectedImage.category && ` • ${selectedImage.category}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}