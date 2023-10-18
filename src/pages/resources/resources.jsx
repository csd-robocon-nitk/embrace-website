import s from './resources.module.css'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Materials from './materials/materials'
import Simulations from './simulations/simulations'
import Blog from './blog/blog'
import { useEffect, useState } from 'react'

export default function Resources() {
	let hash = useLocation().hash
	let [selected, setSelected] = useState('')
	let navigate = useNavigate()

	let content

	if (selected == 'materials') content = <Materials />
	else if (selected == 'simulations') content = <Simulations />
	else if (selected == 'blog') content = <Blog />
	else content = <></>

	useEffect(() => {
		if (hash == '#materials') setSelected('materials')
		else if (hash == '#simulations') setSelected('simulations')
		else if (hash == '#blog') setSelected('blog')
		else navigate('#materials')
	}, [hash])

	return (
		<main className={s.resources}>
			<div className={s.heading}>
				<h1>RESOURCES</h1>
				<div className={s.subnav}>
					<ul>
						<li className={selected == 'materials' ? s.active : ''}>
							<div className={s.before}></div>
							<Link to="#materials">Course Materials</Link>
						</li>
						<li
							className={
								selected == 'simulations' ? s.active : ''
							}
						>
							<div className={s.before}></div>
							<Link to="#simulations">Lab Simulations</Link>
						</li>
						<li className={selected == 'blog' ? s.active : ''}>
							<div className={s.before}></div>
							<Link to="#blog">Blog</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={s.content}>
				<p>
					Welcome to the EMBRACE's Resources page. Here, you'll find a
					variety of educational materials and information related to
					amateur radio, disaster management.
				</p>
				{content}
				<p>
					We regularly update our resources, so check back for new
					content. Have questions or suggestions? Please{' '}
					<Link to="/contact">contact us</Link>, we value your input.
				</p>
			</div>
		</main>
	)
}
