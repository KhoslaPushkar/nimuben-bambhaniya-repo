"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <>
      <div className="bg-slate-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Call us: {siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>Email: {siteConfig.contact.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <div id="google_translate_element"></div> */}
            <div className="flex gap-2">
              {Object.entries(siteConfig.social).map(([platform, socialData]) => (
                <Link
                  key={platform}
                  href={socialData.url}
                  className="block rounded-full overflow-hidden hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={socialData.name}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#ffffff" d={socialData.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

              


        </div>
      </div>

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img src={siteConfig.smallLogoImage} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h1 className="font-serif text-2xl font-bold text-gray-900">Nimuben Bambhaniya</h1>
                  <p className="text-sm text-gray-600">{siteConfig.subTitle}</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {siteConfig.navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition-colors">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="relative">
                {showSearch ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      autoFocus
                    />
                    <Button type="submit" size="sm" className="bg-green-600 hover:bg-green-700 rounded-l-none">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setShowSearch(false)
                        setSearchQuery("")
                      }}
                      className="ml-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => setShowSearch(true)}>
                    <Search className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <div className="text-gray-700 font-medium py-2">{item.name}</div>
                        <div className="ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-green-600 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <form onSubmit={handleSearch} className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Button type="submit" size="sm" className="bg-green-600 hover:bg-green-700">
                    <Search className="w-4 h-4" />
                  </Button>
                </form>
              </nav>
            </div>
          )}
        </div>
      </header>

      <script
        // dangerouslySetInnerHTML={{
        //   __html: `
        //     function googleTranslateElementInit() {
        //       new google.translate.TranslateElement({
        //         pageLanguage: 'en',
        //         includedLanguages: 'en,hi,gu',
        //         layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        //         autoDisplay: false
        //       }, 'google_translate_element');
        //     }
        //   `,
        // }}
      />
      <script
        type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  )
}
