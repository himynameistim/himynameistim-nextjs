import React, { useState } from "react"
import Link from "next/link"

export default function Layout({children}) {
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <div>
        <header className="">
            <div className="header-top flex justify-center items-center p-5">
                Hi My Name Is Tim
            </div>

            <nav class="">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-20">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <button onClick={() => setMenuOpen(!isMenuOpen)} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    {/* Icon when menu is closed. 
                        Heroicon name: menu

                        Menu open: "hidden", Menu closed: "block"
                    */}
                    <svg class={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Icon when menu is open.
                        Heroicon name: x

                        Menu open: "block", Menu closed: "hidden"
                    */}
                    <svg class={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <div class="hidden sm:block sm:ml-6">
                    <div class="flex items-center justify-center space-x-4">
                        <Link href="/"><a class="px-3 py-2 text-base font-medium">Home</a></Link>
                        <Link href="/sitecore"><a class="px-3 py-2 text-base font-medium">Sitecore</a></Link>
                        <Link href="/about"><a class="px-3 py-2 text-base font-medium">About</a></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
            */}
            <div class={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div class="px-2 pt-2 pb-3 space-y-1">
                <Link href="/"><a class="block px-3 py-2 text-base font-medium">Home</a></Link>
                <Link href="/sitecore"><a class="block px-3 py-2 text-base font-medium">Sitecore</a></Link>
                <Link href="/about"><a class="block px-3 py-2 text-base font-medium">About</a></Link>
                </div>
            </div>
            </nav>

        </header>
        {children}
        <footer>
            <div className="container">
                <div className="row">
                        <h3>About Me</h3>
                    </div>
                </div>
        </footer>
        </div>
    )
}