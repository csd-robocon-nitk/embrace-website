import { useRef, useState } from 'react'
import './header.css'
import { useEffect } from 'react'

export default function Header () {
    let [navbarOpen, setNavbarOpen] = useState(false)
    let navRef = useRef()

    useEffect(() => {
        document.addEventListener("click", () => setNavbarOpen(false))
        navRef.current.addEventListener("click", (e) => e.stopPropogation())
    }, [])

    function openNav (e) {
        if (!navbarOpen) {
            e.stopPropagation()
            setNavbarOpen(true)
        }
    }

    // let headerRef = useRef()

    // useEffect(() => {

    //     let y = window.scrollY
    //     if (y > 60) headerRef.current.className = "bg"
    //     else headerRef.current.className = ""

    //     document.addEventListener("scroll", e => {
    //         let y = window.scrollY
    //         if (y > 60) headerRef.current.className = "bg"
    //         else headerRef.current.className = "bg"
    //     })
    // }, [])
    
    return (
        <header className={navbarOpen ? "navbar-open" : ""} /* ref = {headerRef} */>

            <div className="content">
                <div className="left">
                    <img src="/ham.svg" alt="" tabIndex={0} onClick = {openNav}/>
                    <img src="/logo.png" alt="" id = "logo" />
                </div>
                <nav ref = {navRef}>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/aboutus">ABOUT US</a></li>
                        <li><a href="/centres">NODAL CENTERS</a></li>
                        <li><a href="/resources">RESOURCES</a></li>
                        <li><a href="/involve">GET INVOLVED</a></li>
                        <li><a href="/gallery">GALLERY</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}