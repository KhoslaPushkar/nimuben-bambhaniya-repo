import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Building, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { initiatives, siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.pages.initiatives.title,
  description: siteConfig.pages.initiatives.description,
  keywords: siteConfig.pages.initiatives.keywords,
  openGraph: {
    title: siteConfig.pages.initiatives.title,
    description: siteConfig.pages.initiatives.description,
    url: "/initiatives",
  },
  twitter: {
    title: siteConfig.pages.initiatives.title,
    description: siteConfig.pages.initiatives.description,
  },
}

export default function InitiativesPage() {
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Initiatives</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading transformative programs that create lasting impact in communities across India
            </p>
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Initiative</h2>
            <p className="text-lg text-gray-600">Spotlight on our flagship program making a difference nationwide</p>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src="/swachhata-campaign.png"
                  alt="Swachhata Hi Sewa campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-green-100 text-green-800">Featured</Badge>
                  <Badge className="bg-blue-100 text-blue-800">National Program</Badge>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Swachhata Hi Sewa
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The Union Minister of State for Ministry of Consumer Affairs, Food and Public Distribution leads
                  comprehensive cleanliness initiatives across the nation. This flagship program focuses on creating
                  sustainable sanitation practices, community engagement, and environmental awareness at the grassroots
                  level.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Community-driven cleanliness drives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Waste management awareness programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Public-private partnership initiatives</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 w-fit">
                  <Link href="#" className="flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Initiatives Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Initiatives</h2>
            <p className="text-lg text-gray-600">Comprehensive programs driving positive change across sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${getInitiativeColor(initiative.title)} flex items-center justify-center mb-4 text-gray-700 group-hover:scale-110 transition-transform`}
                  >
                    {getInitiativeIcon(initiative.title)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{initiative.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-green-50 group-hover:border-green-200 bg-transparent"
                  >
                    <Link href="#" className="flex items-center gap-2">
                      View Details <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact & Reach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our initiatives across different sectors and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Communities Reached</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Districts Covered</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
                <div className="text-gray-600">Citizens Benefited</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600">Active Programs</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Collaborative Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Working together with various stakeholders to maximize impact and ensure sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Government Agencies</h3>
                <p className="text-gray-600 text-sm">
                  Coordinating with central and state government departments for effective policy implementation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Organizations</h3>
                <p className="text-gray-600 text-sm">
                  Partnering with local NGOs and community groups for grassroots-level implementation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Private Sector</h3>
                <p className="text-gray-600 text-sm">
                  Engaging with businesses and corporations for sustainable development initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
