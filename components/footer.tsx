import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={siteConfig.smallLogoImage} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-serif text-xl font-bold">Smt. Nimuben Jayantibhai Bambhaniya</h3>
                <p className="text-gray-300">{siteConfig.subTitle}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">{siteConfig.description}</p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, socialData]) => (
                <a
                  key={platform}
                  href={socialData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={socialData.name}
                  className="text-gray-700 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#ffffff" d={socialData.icon} />
                  </svg>
                </a>
              ))}
            </div>


          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.flatMap((item) => {
                if (item.submenu) {
                  // Take main item + submenu except the first element
                  return [item, ...item.submenu.slice(1)];
                }
                return [item];
              }).map((linkItem) => (
                <li key={linkItem.name}>
                  <Link
                    href={linkItem.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {linkItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
              <p className="text-sm">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025. All Rights Reserved. Official website of Smt. Nimuben Jayantibhai Bambhaniya</p>
        </div>
      </div>
    </footer>
  )
}
