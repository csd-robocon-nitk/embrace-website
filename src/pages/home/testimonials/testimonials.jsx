import s from './testimonials.module.css'

export default function Testimonials() {
	return (
		<section className={s.testimonials}>
			<div className={s.content}>
				<h1>Testimonials</h1>

				<div className={s.section}>
					<img src="/testimonials/P Veeramneeswaran.jpg" alt="" />
					<div>
						<p>
							I've always been fascinated by the world of radio
							communication, and my journey into the realm of HAM
							radio has been nothing short of incredible. It's
							been a hands-on adventure that has opened up a world
							of possibilities and connections I never thought
							possible. HAM radio knows no borders. I've had the
							privilege of talking to people from all corners of
							the world, exchanging greetings with operators in
							sweden was heartwarming. If you've ever been curious
							about radio communication, I wholeheartedly
							encourage you to give HAM radio a try. It's a
							journey worth taking.
						</p>
						<h2>
							~
							<p>
								Veeramuneeswaran P
								<br />
								Electrical and Electronics Engineering
								<br />
								Aarupadai Veedu Institute of Technology Chennai
							</p>
						</h2>
					</div>
				</div>

				<div className={s.section}>
					<img src="/testimonials/Pavitra A.jpg" alt="" />
					<div>
						<p>
							My recent visit to the Radio Communication Hub at
							NITK was nothing short of enlightening. I had the
							privilege of delving deep into the intricacies of
							antennas, gaining valuable insights into their
							design, testing, and maintenance. I witnessed
							firsthand the meticulous process of fine-tuning
							antennas for optimal performance. It was a hands-on
							journey into the heart of radio technology. it was
							an immersion into the world of antennas. It was an
							experience that broadened my horizons and left me
							with a deeper appreciation for the technology that
							keeps us connected.
						</p>
						<h2>
							~
							<p>
								Pavithra A
								<br />
								Computer Science and Engineering
								<br />
								AVIT Aarupadai Veedu Institute of Technology,
								Chennai
							</p>
						</h2>
					</div>
				</div>

				<div className={s.section}>
					<img src="/testimonials/Vaishnavi Singh.jpg" alt="" />
					<div>
						<p>
							Absolutely thrilled to share my experience I had at
							the Communication Hub at NITK Surathkal. The
							opportunity to gain hands-on knowledge about the
							latest HAM equipment was truly invaluable. My time
							in the lab, especially delving into the intricacies
							of antenna technology, was nothing short of an
							honour.
							<br /><br />
							Being part of the testing process added a whole new
							dimension to my learning. The excitement of actively
							contributing to the exploration and understanding of
							cutting-edge technology was unparalleled. The Hub
							provided a unique platform for me to not just
							observe but actively engage with the latest
							equipment, making the learning experience incredibly
							enriching.
							<br /><br />
							I'm grateful for the opportunity to be part of such
							an innovative and forward-thinking environment. The
							knowledge and skills I gained during this time have
							undoubtedly left a lasting impact on my professional
							growth. A big shout-out to the search lab for
							fostering an environment that encourages hands-on
							learning and exploration.
						</p>
						<h2>
							~
							<p>
								Vaishnavi Singh
								<br />
								Computer Science and Engineering
								<br />
								Aarupadai Veedu Institute of Technology, Chennai
							</p>
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
