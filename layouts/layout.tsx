import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Prism from "prismjs"

export default function Layout({children}: {
    children: React.ReactNode
}) {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false)

    

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const searchInput = useRef<HTMLInputElement>(null)

    const setSearch = () => {
      setSearchOpen(!isSearchOpen)
      if (searchInput.current != null)
      {
        searchInput?.current?.focus();
      }
    };
    
    return (
        <div>
        <header>
            <div className="logo">
              <div className="nav-button">
                  {/* Mobile menu button*/}
                  <button onClick={() => setMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. 
                      Heroicon name: menu

                      Menu open: "hidden", Menu closed: "block"
                  */}
                  <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Icon when menu is open.
                      Heroicon name: x

                      Menu open: "block", Menu closed: "hidden"
                  */}
                  <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  </button>
                </div>
              <Link href="/"><a>hi my name is&nbsp;<span>Tim</span></a></Link>
              
              <svg onClick={setSearch} className="searchButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </div>
            <div className={`search ${isSearchOpen ? 'active' : ''}`}>
              <div className="container">
                <form action="/search" method="get">
                  <input type="search" placeholder="Search..." name="s" ref={searchInput}></input>
                  <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                  </button>
                </form>
              </div>
            </div>
            <nav>
            <div className="hidden sm:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                <div className="flex-1 flex items-center justify-center">
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex items-center justify-center space-x-4">
                        <Link href="/"><a className="px-3 py-2 text-base font-medium">Home</a></Link>
                        <Link href="/sitecore"><a className="px-3 py-2 text-base font-medium">Sitecore</a></Link>
                        <Link href="/devops"><a className="px-3 py-2 text-base font-medium">Devops</a></Link>
                        <Link href="/web-development"><a className="px-3 py-2 text-base font-medium">Web Development</a></Link>
                        <Link href="/about"><a className="px-3 py-2 text-base font-medium">About</a></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
            */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/"><a className="block px-3 py-2 text-base font-medium">Home</a></Link>
                <Link href="/sitecore"><a className="block px-3 py-2 text-base font-medium">Sitecore</a></Link>
                <Link href="/devops"><a className="block px-3 py-2 text-base font-medium">Devops</a></Link>
                <Link href="/web-development"><a className="block px-3 py-2 text-base font-medium">Web Development</a></Link>
                <Link href="/about"><a className="block px-3 py-2 text-base font-medium">About</a></Link>
                </div>
            </div>
            </nav>

        </header>
        {children}
        <footer className="container">
            Copywrite &copy;2020 himynameistim.com
        </footer>
        </div>
    )
}