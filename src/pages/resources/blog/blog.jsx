import s from './blog.module.css'
import Card from './card'

export default function Blog() {
	return (
		<section className={s.blog}>
			<h2>Blog</h2>
			<p>
				Explore our blog section to stay updated with the latest news,
				insights, and stories related to amateur radio, technology, and
				community development.
			</p>
			<div className={s.cards}>
				<Card
					title = "Empowering Girls in STEM: A Visit to EMBRACE - The Heart of Ham Radio at NITK"
					image = "/blog/empowering-girls-in-stem/001.jpeg"
					link = "/blog/empowering-girls-in-stem"
				/>
			</div>
		</section>
	)
}
