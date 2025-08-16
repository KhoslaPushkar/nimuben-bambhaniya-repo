import React, { useState } from "react";
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Calendar, Eye } from "lucide-react"
import Link from "next/link"
import { pressRelease, siteConfig } from "@/lib/config"
import PressGallery from '@/components/press-photo-gallery';

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Press Releases</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official statements, announcements, and media coverage highlighting her work and initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Press release
          </h2>
          {/* <p className="text-lg text-gray-600">
            Visual documentation of official activities and public engagements
          </p> */}
        </div>
        <PressGallery images={pressRelease} />
      </div>
    </section>

    
      <Footer />
    </div>
  )
}
