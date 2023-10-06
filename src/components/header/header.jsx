import './header.css'

export default function Header () {
    return (
        <header>
            <div className="content">
                <h1>EMBRACE</h1>
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