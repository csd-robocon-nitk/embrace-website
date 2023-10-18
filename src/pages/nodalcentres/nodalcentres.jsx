import s from './nodalcentres.module.css'
import React, { useState } from 'react'
import MapTabSystem from './MapTabs'

export default function Nodalcentres() {
	const [current, setCurrent] = useState('nodal1')

	return (
		<main className={s.nodalcentres}>
			<div className={s.heading}>
				<div className={s.container}>
					<h1>NODAL CENTRES</h1>
				</div>
			</div>
			<br />
			<br />
			<div className={s.content}>
				<div className={s.left}>
					<br />
					<br />
					<p>
						Part of the EMBRACE initiative involves establishing
						HAM radio stations in carefully selected schools and
						colleges situated in the rural regions of coastal
						Karnataka. This strategic expansion is aimed at ensuring
						that the advantages of amateur radio and disaster
						preparedness are extended to underserved communities.
					</p>
					<br />
					<ul>
						<li>
							Nodal Centers are established with the primary
							purpose of promoting skill development and education
							in the field of amateur radio communication. They
							provide a platform for students, teachers, and the
							community to gain hands-on experience and knowledge
							in this field, with the ultimate goal of promoting
							HAM radio usage and disaster preparedness.
						</li>
						<br />
						<li>
							Each Nodal Center will be equipped with HAM radio
							setups. These setups typically include HAM radio
							transceivers, antennas, power supplies, and
							associated equipment required for radio
							communication.These centers are strategically
							distributed within schools and colleges, likely
							across various locations, to ensure accessibility
							and coverage. It's ensure that the HAM radio
							equipment at Nodal Centers is handled under the
							supervision and guidance of HAM license holders,
							ensuring that radio operations comply with legal and
							regulatory requirements.
						</li>
						<br />
						<li>
							Nodal Centers aim to enhance the skills of students
							and educators by providing practical experience with
							HAM instruments. This hands-on approach helps
							participants develop proficiency in radio
							communication. They also engage with the wider
							community to promote the benefits of amateur radio.
							This can involve outreach programs, public
							demonstrations, and involvement in disaster
							preparedness efforts.
						</li>
						<br />
					</ul>
				</div>
				<div className={s.right}>
					<img src="./nodals.PNG" alt="" />
				</div>
			</div>
			<div className={s.maps}>
				<h1>
					<strong>Our Nodal Centres</strong>
				</h1>
				<br />
				<MapTabSystem />
			</div>
			<br />
		</main>
	)
}
