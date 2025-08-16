import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.pages.about.title,
  description: siteConfig.pages.about.description,
  keywords: siteConfig.pages.about.keywords,
  openGraph: {
    title: siteConfig.pages.about.title,
    description: siteConfig.pages.about.description,
    url: "/about",
  },
  twitter: {
    title: siteConfig.pages.about.title,
    description: siteConfig.pages.about.description,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {siteConfig.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated public servant committed to empowering communities and ensuring transparent governance for the
              people of Bhavnagar and India.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Minister of State Profile</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  Hon’ble Minister of State for Consumer Affairs, Food and Public Distribution, began her political journey as a grassroots worker with the BJP, alongside serving as a dedicated educator. Rising from the booth level to Mandal, District, and State leadership, she demonstrated deep commitment to public service. She has also been actively involved with several NGOs. Her formal political career began in 2005 when she was elected Corporator of Ghogha Circle Ward No. 13, a position she held until 2020. She served as Mayor of Bhavnagar.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  Municipal Corporation (2009–2010, 2015–2018) and held key leadership roles, including Director of Gujarat Thakor and Koli Vikas Nigam,Gandhinagar (2011-2016), Vice President of Bhavnagar City (2008-2010), President of Bhavnagar City Mahila Morcha (2009-2011), Vice President of Gujarat State (2011 2013) and Vice President of Gujarat State Mahila Morcha (2013-2021) Recognized for her leadership, the BJP entrusted her as Prabhari of several districts, including Amreli, Surendranagar, Bhavnagar, and Junagadh. She also served as BJP Nirakshak in Gujarat, overseeing local state assembly elections. In the 2024 Lok Sabha elections, she won the Bhavnagar (Gujarat) seat, reflecting strong grassroots support. Currently, she serves as Minister of State for Consumer Affairs, Food and Public Distribution in Prime Minister Narendra Modi’s government.
                </p>

                {/* <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                  <li>Overseeing consumer affairs and public distribution systems nationwide</li>
                  <li>Ensuring food security and efficient supply chain management</li>
                  <li>Implementing welfare schemes and development programs</li>
                  <li>Representing Bhavnagar constituency in the Lok Sabha</li>
                  <li>Promoting women empowerment and inclusive development</li>
                  <li>Facilitating transparent governance and citizen engagement</li>
                </ul> */}

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  Nimuben Bambhaniya's vision is aligned with the ideals of Hon'ble Prime Minister Shri Narendra Modi Ji — to build an Atmanirbhar Bharat (self-reliant India) where every citizen has access to opportunities, dignity, and a better future. She aims to continue working toward a society that is empowered, inclusive, and progressive.
                </p>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Life Goals</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                  <li className="text-justify">Numerous initiatives were undertaken to empower, raise awareness, educate, and support women.</li>
                  <li className="text-justify">The women’s health camp was organized with the aim of enhancing healthcare services for women.</li>
                  <li className="text-justify">The mass marriage was organized with the aim of reducing the marriage expenses for the daughters.</li>
                  <li className="text-justify">As part of the Beti Bachao, Beti Padhao program, I have taken up the responsibility of educating the third girl and have worked sincerely to ensure that daughters continue to progress in every field. It is my life goal to continue such efforts in the future.</li>
                </ul>

                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Trust and NGO Involvement</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                  <li className="text-justify"><strong>Founder Trustee:</strong> Shri Sadguru Education and Charitable Trust</li>
                  <li className="text-justify">
                    Posts in Community Organizations:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>General Secretary, Rashtriya Mahila Morcha (from 2022-present)</li>
                      <li>Vice President, Samast Koli Samaj Seva Mandal, Parul Society</li>
                      <li>Member, Bhavnagar District Koli Karmachari Sanghatana</li>
                      <li>Chairperson, Junior Chamber International (2007-2009)</li>
                      <li>Member, Red Cross Society, Bhavnagar</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src="about-page-images/image1.png"
                        alt={siteConfig.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">{siteConfig.name}</h3>
                    <p className="text-green-600 font-medium">{siteConfig.subTitle}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Constituency</p>
                        <p className="text-gray-600 text-sm">Bhavnagar, Gujarat</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">In Office Since</p>
                        <p className="text-gray-600 text-sm">June 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600 text-sm">{siteConfig.contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600 text-sm">{siteConfig.contact.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Link href="/contact">Contact Office</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Focus Areas</h2>
            {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key areas of work under the Ministry of Consumer Affairs, Food & Public Distribution
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-xl mb-3 text-gray-900">Women Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advocating for gender equality, skill development, and economic independence through SHGs and entrepreneurship support.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-xl mb-3 text-gray-900">Farmers’ Welfare</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advocating for gender equality, skill development, and economic independence through SHGs and entrepreneurship support.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-xl mb-3 text-gray-900">Health & Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilitating primary healthcare access, organizing health awareness drives, and improving education infrastructure.
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
