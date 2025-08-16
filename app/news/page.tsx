import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { newsData, siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.pages.news.title,
  description: siteConfig.pages.news.description,
  keywords: siteConfig.pages.news.keywords,
  openGraph: {
    title: siteConfig.pages.news.title,
    description: siteConfig.pages.news.description,
    url: "/news",
  },
  twitter: {
    title: siteConfig.pages.news.title,
    description: siteConfig.pages.news.description,
  },
}

export default function NewsPage() {
  const featuredNews = newsData[0]
  const recentNews = newsData.slice(1)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest activities, government initiatives, and public engagements
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured News</h2>
            <p className="text-lg text-gray-600">Latest highlight from recent activities</p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-blue-100 to-green-100">
                <img
                  src={featuredNews.image}
                  alt="Presidential delegation visit"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-green-100 text-green-800">Featured</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </div>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredNews.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-600 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{featuredNews.location}</span>
                </div>
                {/* <p className="text-gray-600 mb-6 leading-relaxed">
                  A significant diplomatic engagement where Minister Smt. Bambhaniya accompanied the Hon'ble President
                  of India on official state visits, strengthening bilateral relations and engaging with the Indian
                  diaspora and business communities abroad.
                </p> */}
                <Button className="bg-green-600 hover:bg-green-700 w-fit">
                  <Link
                    href={featuredNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Full Article <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Updates</h2>
            <p className="text-lg text-gray-600">Latest news and press releases from official activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow group">
                <div className="aspect-[16/10] bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden">
                  <img
                    src={news.image}
                    alt={`News ${news.id}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{news.location}</span>
                  </div>
                  <Link
                    href={news.link}
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Official Press Releases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Official statements and press releases from the Ministry of Consumer Affairs, Food & Public Distribution
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-100 text-blue-800">Ministry Update</Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Launched Depot Darpan, Anna Mitra and Anna Sahayata schemes with Hon'ble Union Minister
                    </h3>
                    <p className="text-gray-600 mb-3">
                      New initiatives launched to strengthen food distribution systems and enhance transparency in
                      public distribution operations across the nation.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Recent</span>
                      </div>
                      <Link
                        href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2129981"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Full Release <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-green-100 text-green-800">Policy Update</Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Special Campaign 4.0 Successfully Completed by Department of Food and Public Distribution
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Administrative efficiency drive completed with significant improvements in service delivery and
                      operational transparency across all departmental units.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Recent</span>
                      </div>
                      <Link
                        href="#"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                      >
                        Read Full Release <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-orange-100 text-orange-800">Parliamentary</Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Parliamentary Questions and Responses on Food Security Measures
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Detailed responses to parliamentary questions regarding food security initiatives, PDS
                      modernization, and consumer protection measures implemented nationwide.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Ongoing</span>
                      </div>
                      <Link
                        href="#"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                      >
                        View Responses <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get the latest news and updates directly from the office of Smt. Nimuben Jayantibhai Bambhaniya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
