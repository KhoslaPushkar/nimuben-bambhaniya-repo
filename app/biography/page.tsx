import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Building } from "lucide-react"
import { achievements, siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.pages.biography.title,
  description: siteConfig.pages.biography.description,
  keywords: siteConfig.pages.biography.keywords,
  openGraph: {
    title: siteConfig.pages.biography.title,
    description: siteConfig.pages.biography.description,
    url: "/biography",
  },
  twitter: {
    title: siteConfig.pages.biography.title,
    description: siteConfig.pages.biography.description,
  },
}

export default function BiographyPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "National":
        return <Building className="w-4 h-4" />
      case "Party":
        return <Users className="w-4 h-4" />
      case "Local":
        return <Award className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "National":
        return "bg-red-100 text-red-800"
      case "Party":
        return "bg-orange-100 text-orange-800"
      case "Local":
        return "bg-blue-100 text-blue-800"
      case "State":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Biography</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of dedicated public service, grassroots leadership, and commitment to community development
            </p>
          </div>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">From Classroom to Parliament: The Journey of {siteConfig.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  Smt. Nimuben Jayantibhai Bambhaniya is an Indian politician, social worker, educator, and agriculturist. Born on 8 September 1966 in Bhavnagar, Gujarat, she earned degrees in B.Sc. and B.Ed. from Sir P. P. Institute of Science under Bhavnagar University. With her roots in the Koli community, she began her career in education and grassroots civic work before transitioning into public office.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                  In the 2024 general elections, she was elected to the 18th Lok Sabha from Bhavnagar, representing the BJP. She defeated AAP candidate Umeshbhai Makwana by a margin of 455,289 votes. Following her win, she was appointed Minister of State for Consumer Affairs, Food and Public Distribution in June 2024. Her journey reflects a blend of educational commitment, agricultural grounding, and political experience, all underscored by her dedication to community development and public service.
                </p>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Ministerial Portfolio</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  Minister: Ensuring food grain supply, consumer protection, commodity regulation and price stabilization across India.
                </p>
                <h5 className="font-serif text-xl font-bold text-gray-900 mb-4">Role of the Minister of State</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                  <li className="text-justify">Oversees Food Corporation of India operations—procurement, storage management and retail & fair.</li>
                  <li className="text-justify">Supervises National Food Security Scheme and public stock policy.</li>
                  <li className="text-justify">Engages in consumer awareness and grievance redressal (e.g., National Consumer Helpline).</li>
                  <li className="text-justify">Promotes modern warehousing through NISM and perishable vegetable supply chain analysis.</li>
                </ul>
                <h5 className="font-serif text-xl font-bold text-gray-900 mb-4">Landmark Task</h5>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    Co-draft of the new 2024 State Food Security Scheme for a more equitable food distribution system by May 2024.
                  </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="about-page-images/image1.png"
                        alt={siteConfig.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900">Quick Facts</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Full Name</p>
                      <p className="text-gray-600">{siteConfig.name}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Date & Place of Birth:</p>
                      <p className="text-gray-600">September 8, 1966 – Dhrangadhra, Gujarat</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Education:</p>
                      <p className="text-gray-600">B.Sc. B.Ed. (Maths/Science)</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Profession:</p>
                      <p className="text-gray-600">Former Science Teacher | Public Servant</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Languages Known:</p>
                      <p className="text-gray-600">Gujarati, Hindi, English.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Years in Politics</p>
                      <p className="text-gray-600">21+ years (since 2004)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Political Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card key="2005"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    2005
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Dhrangdhra Circle Ward 13, Dhrangdhra MC
                </h2>
              </CardContent>
            </Card>

            <Card key="2009-10"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    2009-10
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Mayor, Dhrangdhra (1st term)
                </h2>
              </CardContent>
            </Card>

            <Card key="2005"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    2013-21
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Vice-President, BJP Gujarat Mahila Morcha
                </h2>
              </CardContent>
            </Card>

            <Card key="2015-18"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    2015-18
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Mayor, Dhrangdhra (2nd term)
                </h2>
              </CardContent>
            </Card>

            <Card key="Jun 2024"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    Jun 2024
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Elected to Lok Sabha (Dhrangdhra)
                </h2>
              </CardContent>
            </Card>

            <Card key="11 Jun 2024"
              className="bg-gradient-to-br from-green-100 via-white to-blue-100 border-2 border-green-200 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-600 text-white">Year</Badge>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-900 font-bold text-sm shadow"><Calendar className="w-4 h-4" />
                    11 Jun 2024
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-green-900 mb-2 drop-shadow">
                  Sworn-in as Minister of State, CAFPD
                </h2>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Career Timeline */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Journey of Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive timeline of positions held and contributions made to public service
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(achievement.category)}
                        <Badge className={getCategoryColor(achievement.category)}>{achievement.category}</Badge>
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
      </section> */}

      <Footer />
    </div>
  )
}
