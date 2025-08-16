"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { newsData, achievements, initiatives } from "@/lib/config"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const searchContent = (query: string) => {
    if (!query.trim()) return []

    const results: Array<{
      title: string
      description: string
      url: string
      type: string
    }> = []

    const searchTerm = query.toLowerCase()

    // Search in news
    newsData.forEach((news) => {
      if (news.title.toLowerCase().includes(searchTerm) || news.location.toLowerCase().includes(searchTerm)) {
        results.push({
          title: news.title,
          description: `${news.location} - ${news.date}`,
          url: "/news",
          type: "News",
        })
      }
    })

    // Search in achievements
    achievements.forEach((achievement) => {
      if (
        achievement.title.toLowerCase().includes(searchTerm) ||
        achievement.category.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          title: achievement.title,
          description: `${achievement.year} - ${achievement.category}`,
          url: "/achievements",
          type: "Achievement",
        })
      }
    })

    // Search in initiatives
    initiatives.forEach((initiative) => {
      if (
        initiative.title.toLowerCase().includes(searchTerm) ||
        initiative.description.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          title: initiative.title,
          description: initiative.description,
          url: "/initiatives",
          type: "Initiative",
        })
      }
    })

    // Search in pages
    const pages = [
      { title: "About Minister", description: "Learn about Minister Nimuben Bambhaniya", url: "/about" },
      { title: "Biography", description: "Complete biography and career journey", url: "/biography" },
      { title: "Contact Us", description: "Get in touch with the office", url: "/contact" },
      { title: "Media Gallery", description: "Photo gallery and media coverage", url: "/media" },
    ]

    pages.forEach((page) => {
      if (page.title.toLowerCase().includes(searchTerm) || page.description.toLowerCase().includes(searchTerm)) {
        results.push({
          title: page.title,
          description: page.description,
          url: page.url,
          type: "Page",
        })
      }
    })

    return results
  }

  const results = searchContent(query)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Search Results</h1>
            {query && (
              <p className="text-lg text-gray-600">
                Showing results for: <span className="font-semibold">"{query}"</span>
              </p>
            )}
          </div>

          {!query ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No search query provided</h2>
              <p className="text-gray-600">Please enter a search term to find content.</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Details not found</h2>
              <p className="text-gray-600">No results found for "{query}". Please try different keywords.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-600">
                Found {results.length} result{results.length !== 1 ? "s" : ""}
              </p>

              {results.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {result.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          <a href={result.url} className="hover:text-green-600 transition-colors">
                            {result.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{result.description}</p>
                        <a
                          href={result.url}
                          className="inline-block mt-3 text-green-600 hover:text-green-700 font-medium text-sm"
                        >
                          View Details →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}
