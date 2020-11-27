import React from "react"
import Link from "next/link"

export default function Layout({children}) {
    return (
        <div>
        <header>
            <div className="container">
                <div className="row">
                Hi My Name Is Tim
                </div>
            </div>
            <nav>
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