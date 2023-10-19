import { useRef, useState } from 'react'
import './header.css'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
	let [navbarOpen, setNavbarOpen] = useState(false)
	let path = useLocation().pathname
	let navigate = useNavigate()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [path])

	useEffect(() => {
		document.addEventListener('click', () => setNavbarOpen(false))
	}, [])

	function openNav(e) {
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
		<header
			className={navbarOpen ? 'navbar-open' : ''} /* ref = {headerRef} */
		>
			<div className="content">
				<div className="left">
					<img src="/ham.svg" alt="" tabIndex={0} onClick={openNav} />
					<img src="/logo.png" alt="" id="logo" />
				</div>
				<nav>
					<ul>
						<li className={(path == '/' ? 'active' : '')}>
							<Link to="/">HOME</Link>
						</li>
						<li className={(path == '/aboutus' ? 'active' : '')}>
							<Link to="/aboutus">ABOUT US</Link>
						</li>
						<li className={(path == '/centres' ? 'active' : '')}>
							<Link to="/centres">NODAL CENTERS</Link>
						</li>
						<li className={(path == '/resources' ? 'active' : '')}>
							<a onClick = {() => window.innerWidth <= 920 && navigate("/resources")}>
								RESOURCES
								<div>
									<div>
										<Link to="/resources#materials">Course Materials</Link>
										<Link to="/resources#simulations">Lab Simulations</Link>
										<Link to="/resources#blog">Blog</Link>
									</div>
								</div>
							</a>
						</li>
						<li className={(path == '/involve' ? 'active' : '')}>
							<Link to="/involve">GET INVOLVED</Link>
						</li>
						<li className={(path == '/gallery' ? 'active' : '')}>
							<Link to="/gallery">GALLERY</Link>
						</li>
						<li className={(path == '/events' ? 'active' : '')}>
							<Link to="/events">EVENTS</Link>
						</li>
						<li className={(path == '/contact' ? 'active' : '')}>
							<Link to="/contact">CONTACT</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
