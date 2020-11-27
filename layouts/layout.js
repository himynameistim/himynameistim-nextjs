import React from "react"
import Link from "next/link"

export default function Layout({children}) {
    return (
        <div>
        <header className="">
            <div className="container mx-auto">
                Hi My Name Is Tim
            </div>
            <nav className="container mx-auto ">
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/sitecore">Sitecore</Link>
                    <Link href="/about">About</Link>
                </ul>
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