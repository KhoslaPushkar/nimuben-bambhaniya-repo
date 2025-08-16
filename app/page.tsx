import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { newsData, initiatives, achievements } from "@/lib/config"
import ImageSlideshow from "@/components/image-slideshow"
import { siteConfig } from "@/lib/config"
import { Calendar, Award, Leaf, Users, Building, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const getInitiativeIcon = (title: string) => {
    if (title.includes("Swachhata")) return <Leaf className="w-8 h-8" />
    if (title.includes("Campaign")) return <Building className="w-8 h-8" />
    if (title.includes("Agricultural")) return <Heart className="w-8 h-8" />
    return <Users className="w-8 h-8" />
  }
  const getInitiativeColor = (title: string) => {
    if (title.includes("Swachhata")) return "from-green-100 to-emerald-100"
    if (title.includes("Campaign")) return "from-blue-100 to-cyan-100"
    if (title.includes("Agricultural")) return "from-orange-100 to-amber-100"
    return "from-purple-100 to-pink-100"
  }

  return (
    <div className="min-h-screen">
      <Header />

      <ImageSlideshow />


      {/* Key Highlights Section */}
      {/* <section className="py-16 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering Communities, Ensuring Fair Distribution
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Minister of State - Ministry of Consumer Affairs, Food & Public Distribution, Serving Bhavnagar with
              integrity, transparency, and commitment to every citizen's well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Contact Office</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 ml-[55px]">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Minister</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{siteConfig.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                {siteConfig.name} is a dedicated public servant and Member of Parliament representing Bhavnagar, Gujarat. Currently serving as the Minister of State in the Ministry of Consumer Affairs, Food and Public Distribution, she plays a vital role in ensuring food security, consumer rights, and efficient public distribution across the nation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                With a strong background in education and grassroots development, she brings integrity, compassion, and a people-first approach to governance. Her focus remains on empowering marginalized communities, improving transparency in food supply systems, and promoting equitable access to essential commodities. Through her work in Parliament and her ministry, Smt. Bambhaniya remains committed to building a more inclusive, accountable, and sustainable future for India.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/about" className="flex items-center gap-2">
                  Read Full <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative w-110 mx-auto">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/home-page-images/home-page-image.jpg"
                  alt="Smt. Nimuben Jayantibhai Bambhaniya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
              <p className="text-lg text-gray-600">Stay informed about recent activities and government initiatives</p>
            </div>
            {/* <Button variant="outline" className="hidden md:block bg-transparent">
              <Link href="/news" className="flex items-center gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </Button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 6).map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">{news.date}</div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{news.title}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    <MapPin className="w-4 h-4" />
                    <p className="text-gray-600 text-sm m-0">{news.location}</p>
                  </div>
                  <Link
                    href={news.link}
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              <Link href="/news" className="flex items-center gap-2">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading transformative programs that create lasting impact in communities across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${getInitiativeColor(initiative.title)} flex items-center justify-center mb-4 text-gray-700 shadow-lg border-2 border-white group-hover:scale-110 transition-transform`}
                  >
                    {getInitiativeIcon(initiative.title)}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{initiative.description}</p>
                  <Link
                    href={initiative.link}
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href="/news" className="flex items-center gap-2">
                View All Initiatives <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Journey of Impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-green-50 via-white to-blue-100 border border-green-200 rounded-xl shadow-md hover:shadow-xl hover:border-green-400 transition-all duration-300 p-0"
              >
                {/* Category badge at top-right */}
                <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-blue-200 text-blue-900 text-xs font-semibold ">
                  {achievement.category}
                </span>
                <CardContent className="p-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between mb-1">
                    {/* Year badge */}
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-200 text-green-900 font-bold text-xs shadow">
                      <Calendar className="w-4 h-4" />
                      {achievement.year}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-green-900 mb-2 drop-shadow-sm tracking-wide">
                    {achievement.title}
                  </h3>

                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Guided by the Vision of Hon'ble PM Modi. Inspired by Leadership.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Representing Bhavnagar in Hon'ble PM Modi's team, ensuring local aspirations meet national goals. Empowering
            India through collaboration, compassion, and commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/achievements">View Achievements</Link>
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
