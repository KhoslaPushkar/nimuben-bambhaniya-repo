import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Building, Trophy, Star } from "lucide-react"
import { achievements, siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.pages.achievements.title,
  description: siteConfig.pages.achievements.description,
  keywords: siteConfig.pages.achievements.keywords,
  openGraph: {
    title: siteConfig.pages.achievements.title,
    description: siteConfig.pages.achievements.description,
    url: "/achievements",
  },
  twitter: {
    title: siteConfig.pages.achievements.title,
    description: siteConfig.pages.achievements.description,
  },
}

export default function AchievementsPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "National":
        return <Building className="w-5 h-5" />
      case "Party":
        return <Users className="w-5 h-5" />
      case "Local":
        return <Award className="w-5 h-5" />
      case "State":
        return <Star className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "National":
        return "bg-red-100 text-red-800 border-red-200"
      case "Party":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Local":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "State":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const nationalAchievements = achievements.filter((a) => a.category === "National")
  const stateAchievements = achievements.filter((a) => a.category === "State")
  const localAchievements = achievements.filter((a) => a.category === "Local")
  const partyAchievements = achievements.filter((a) => a.category === "Party")
  const otherAchievements = achievements.filter((a) => a.category === "Community/Other")

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Achievements & Milestones</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive journey of public service spanning over two decades of dedicated leadership and community
              development
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Highlights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key statistics and milestones from a distinguished career in public service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">21+</div>
                <div className="text-gray-600">Years in Politics</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600">Terms as Mayor</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Years as Corporator</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-600">Cabinet Position</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* National Level Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">National Level Service</h2>
            <p className="text-lg text-gray-600">Positions held at the national level serving the entire nation</p>
          </div>

          <div className="space-y-6">
            {nationalAchievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(achievement.category)}
                        <Badge className={`${getCategoryColor(achievement.category)} border`}>
                          {achievement.category}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {achievement.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">{achievement.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State & Local Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* State Level */}
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">State Level Service</h2>
                <p className="text-gray-600">Contributions to Gujarat state development and governance</p>
              </div>

              <div className="space-y-4">
                {stateAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(achievement.category)}
                          <Badge className={`${getCategoryColor(achievement.category)} border text-xs`}>
                            {achievement.category}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 mb-1">{achievement.year}</div>
                          <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Local Level */}
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">Local Leadership</h2>
                <p className="text-gray-600">Grassroots leadership in Bhavnagar Municipal Corporation</p>
              </div>

              <div className="space-y-4">
                {localAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(achievement.category)}
                          <Badge className={`${getCategoryColor(achievement.category)} border text-xs`}>
                            {achievement.category}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 mb-1">{achievement.year}</div>
                          <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party & Community Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Party Positions */}
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">Party Leadership</h2>
                <p className="text-gray-600">Key positions held within the Bharatiya Janata Party</p>
              </div>

              <div className="space-y-4">
                {partyAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(achievement.category)}
                          <Badge className={`${getCategoryColor(achievement.category)} border text-xs`}>
                            {achievement.category}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 mb-1">{achievement.year}</div>
                          <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Service */}
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">Community Service</h2>
                <p className="text-gray-600">Leadership roles in community and social organizations</p>
              </div>

              <div className="space-y-4">
                {otherAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <Badge className="bg-purple-100 text-purple-800 border-purple-200 border text-xs">
                            Community
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-500 mb-1">{achievement.year}</div>
                          <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Recognition & Impact</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            A distinguished career marked by consistent dedication to public service, community development, and
            transparent governance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">2 Decades+</div>
              <div className="text-orange-100">Continuous Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Multiple</div>
              <div className="text-orange-100">Leadership Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Grassroots</div>
              <div className="text-orange-100">to National Level</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
