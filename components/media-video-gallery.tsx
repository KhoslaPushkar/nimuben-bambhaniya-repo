"use client";

import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GalleryVideo {
  id: number;
  title: string;
  duration: string;
  date: string;
  url: string;
}

const VIDEOS_PER_PAGE = 9;

export default function VideoGallery({ videos = [] }: { videos?: GalleryVideo[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((videos || []).length / VIDEOS_PER_PAGE);

  const currentVideos = (videos || []).slice(
    (currentPage - 1) * VIDEOS_PER_PAGE,
    currentPage * VIDEOS_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const getYouTubeThumbnail = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = (match && match[2].length === 11) ? match[2] : null;
      return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/placeholder.svg";
    } catch {
      return "/placeholder.svg";
    }
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No videos available</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentVideos.map((video) => {
          const thumbnailUrl = getYouTubeThumbnail(video.url);
          
          return (
            <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Clickable Video Thumbnail */}
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/90 text-gray-900 hover:bg-white group-hover:scale-110 transition-transform pointer-events-none"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
              </a>

              {/* Non-clickable Title and Metadata */}
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {video.date}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                  {video.title}
                </h3>
              </CardContent>
            </Card>
          );
        })}
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
    </>
  );
}