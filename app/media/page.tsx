import React, { useState } from "react";
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Calendar, Eye } from "lucide-react"
import Link from "next/link"
import { photoGallery, videoGallery, siteConfig } from "@/lib/config"
import ImageGallery from '@/components/media-photo-gallery';
import VideoGallery from '@/components/media-video-gallery';

export const metadata: Metadata = {
  title: siteConfig.pages.media.title,
  description: siteConfig.pages.media.description,
  keywords: siteConfig.pages.media.keywords,
  openGraph: {
    title: siteConfig.pages.media.title,
    description: siteConfig.pages.media.description,
    url: "/media",
  },
  twitter: {
    title: siteConfig.pages.media.title,
    description: siteConfig.pages.media.description,
  },
}

export default function MediaPage() {

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Official Visit":
        return "bg-red-100 text-red-800"
      case "Ministry":
        return "bg-blue-100 text-blue-800"
      case "Constituency":
        return "bg-green-100 text-green-800"
      case "Program Launch":
        return "bg-orange-100 text-orange-800"
      case "Conference":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media Centre</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive photo gallery and video collection showcasing official activities, public
              engagements, and key initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Visual documentation of official activities and public engagements
          </p>
        </div>
        <ImageGallery images={photoGallery} />
      </div>
    </section>

      {/* Video Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
            <p className="text-lg text-gray-600">Watch key speeches, addresses, and official announcements</p>
          </div>
          <VideoGallery videos={videoGallery} />
        </div>
      </section>

      {/* Media Resources */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access official documents, press kits, and downloadable resources for media professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Press Kit</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Official biography, high-resolution photos, and key information for media use
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Download Kit
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Event Calendar</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Upcoming public events, official visits, and media opportunities
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Media Contact</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact information for media inquiries and interview requests
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
