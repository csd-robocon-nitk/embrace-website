import { useRef } from 'react'
import './header.css'
import { useEffect } from 'react'

export default function Header () {
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
        <header /* ref = {headerRef} */>

            <div className="content">
                <div className="left">
                    <img src="/ham.svg" alt="" tabIndex={0} />
                    <h1>EMBRACE</h1>
                </div>
                <nav>
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