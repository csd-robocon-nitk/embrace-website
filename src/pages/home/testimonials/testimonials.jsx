import s from './testimonials.module.css'

export default function Testimonials() {
	return (
		<section className={s.testimonials}>
			<div className={s.content}>
				<h1>Testimonials</h1>

				<div className={s.section}>
					<img src="/testimonials/empty photo.jpg" alt="" />
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
								Veeramuneeswaran p
								<br />
								Electrical and Electronics engineering
								<br />
								Aarupadai Veedu Institute of Technology Chennai
							</p>
						</h2>
					</div>
				</div>

				<div className={s.section}>
					<img src="/testimonials/empty photo.jpg" alt="" />
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
								Pavithra A, Computer Science and Engineering
                                <br />
								AVIT Aarupadai Veedu Institute of Technology
                                <br />
								Chennai
							</p>
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
