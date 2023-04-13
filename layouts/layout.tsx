import React, { useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const setSearch = () => {
    setSearchOpen(!isSearchOpen);
    if (searchInput.current != null) {
      searchInput?.current?.focus();
    }
  };

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div>
        <header>
          <div className="logo">
            <div className="nav-button">
              {/* Mobile menu button*/}
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-expanded="false"
              >
                <span>Open main menu</span>
                {/* Icon when menu is closed. 
                      Heroicon name: menu

                      Menu open: "hidden", Menu closed: "block"
                  */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open.
                      Heroicon name: x

                      Menu open: "block", Menu closed: "hidden"
                  */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Link href="/">
              hi my name is&nbsp;<span>Tim</span>
            </Link>

            <svg
              onClick={setSearch}
              className="searchButton"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>
          </div>
          <div className={`search ${isSearchOpen ? "active" : ""}`}>
            <div className="container">
              <form action="/search" method="get">
                <input
                  type="search"
                  placeholder="Search..."
                  name="s"
                  ref={searchInput}
                ></input>
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/sitecore">Sitecore</Link>
              <Link href="/devops">Devops</Link>
              <Link href="/web-development">Web Development</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </div>
            {/*
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
            */}
            <div className={`${isMenuOpen ? "block" : "hidden"}`}>
              <Link href="/">Home</Link>
              <Link href="/sitecore">Sitecore</Link>
              <Link href="/devops">Devops</Link>
              <Link href="/web-development">Web Development</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="container">
          Copywrite &copy;2023 himynameistim.com
        </footer>
      </div>
    </>
  );
}
