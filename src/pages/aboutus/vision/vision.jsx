import s from './vision.module.css'

export default function Vision() {
	return (
		<section className={s.vision}>
			<h1>Our Vision</h1>
			<div className={s.content}>
				<div className={s.section}>
					<h2>Sustainability</h2>
					<img src="/vision/sustainability.png" alt="" />
					<p>
						EMBRACE is committed to long-term sustainability. It
						envisions becoming a self-sustained project, supported
						by diverse funding sources, including government grants,
						corporate partnerships, philanthropic organizations,
						alumni contributions, NITK support and community
						involvement, ensuring the project's continued impact.
					</p>
				</div>
				<div className={s.section}>
					<h2>Innovation and Research</h2>
					<img src="/vision/innovation.png" alt="" />
					<p>
						EMBRACE is committed to fostering innovation and
						research in disaster management and amateur radio. The
						project envisions hosting conferences, symposiums and
						workshops to inspire and drive youth into creative
						solutions for addressing critical challenges in these
						domains.
					</p>
				</div>
				<div className={s.section}>
					<h2>Curriculum Integration & Open Access</h2>
					<img src="/vision/curriculum.png" alt="" />
					<p>
						EMBRACE intends to integrate its educational resources
						into formal academic systems, particularly within NITK's
						curriculum, and continues to emphasize open access,
						making its content freely available to a global
						audience.
					</p>
				</div>
				<div className={s.section}>
					<h2>Resource Sharing</h2>
					<img src="/vision/sharing.png" alt="" />
					<p>
						EMBRACE will collaborate closely with MARC to ensure
						that the resources it develops, including HAM radio
						equipment, mobile stations, and educational materials,
						are accessible to empower disaster resilience and
						education.
					</p>
				</div>
			</div>
		</section>
	)
}
