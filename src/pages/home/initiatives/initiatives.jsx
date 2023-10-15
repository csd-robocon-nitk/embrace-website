import { useEffect, useRef, useState } from 'react'
import s from './initiatives.module.css'

export default function Initiatives() {
	let getClasses = i => `${s.section} ${i == selected ? s.active : ""}`

	let [selected, setSelected] = useState(0)

	function handleClick(i) {
		if (selected == i) setSelected(0)
		else setSelected(i)
	}

	return (
		<div className={s.initiatives}>
			<h1>Key Initiatives</h1>
			<div className={s.content}>
				<div
					className={`${s.left} ${selected != 0 ? s.small : ''}`}
				>
					<div
						className={getClasses(1)}
						onClick={() => handleClick(1)}
					>
						<img src="/initiatives/icons/001.png" alt="" />
						<p>
							Establishing an On-Campus Infrastructure for Amateur
							Radio
						</p>
					</div>
					<div
						className={getClasses(2)}
						onClick={() => handleClick(2)}
					>
						<img src="/initiatives/icons/002.png" alt="" />
						<p>
							Establishing a Centre for Experiential Learning in
							Amateur Radio
						</p>
					</div>
					<div
						className={getClasses(3)}
						onClick={() => handleClick(3)}
					>
						<img src="/initiatives/icons/003.png" alt="" />
						<p>
							Bringing HAM Radio Knowledge and Technology to the
							Masses
						</p>
					</div>
					<div
						className={getClasses(4)}
						onClick={() => handleClick(4)}
					>
						<img src="/initiatives/icons/002.png" alt="" />
						<p>
							Expanding HAM Radio Access: 15 Nodal centres for
							Skill Development
						</p>
					</div>
					<div
						className={getClasses(5)}
						onClick={() => handleClick(5)}
					>
						<img src="/initiatives/icons/001.png" alt="" />
						<p>
							Mobile HAM Solutions: Electric Transport for
							Communication
						</p>
					</div>
				</div>

				<div className={`${s.right} ${selected != 0 ? s.open : ''}`}>
					{
                        selected == 1 ?
                        <div className={s.section}>
                            <img src="/initiatives/icons/001.png" alt="" />
                            <div className={s.text}>
                                <h2>
                                    Establishing an On-Campus Infrastructure for
                                    Amateur Radio
                                </h2>
                                <p>
                                    By creating a dedicated infrastructure for
                                    amateur radio setups within the NITK campus, the
                                    project aims to facilitate effective
                                    communication during emergencies. This
                                    infrastructure can play a crucial role in
                                    disaster management by ensuring communication
                                    continuity, coordinating rescue efforts, and
                                    providing vital information to relevant
                                    authorities and communities.
                                </p>
                            </div>
                        </div>
                        : null
                    }
                    {
                        selected == 2 ?
                        <div className={s.section}>
                            <img src="/initiatives/icons/002.png" alt="" />
                            <div className={s.text}>
                                <h2>
                                    Establishing a Centre for Experiential Learning
                                    in Amateur Radio
                                </h2>
                                <p>
                                    The project envisions establishing a Centre for
                                    Experiential Learning in Amateur Radio. This
                                    centre will serve as a hub for various
                                    educational activities related to amateur radio
                                    aimed at enhancing practical understanding and
                                    knowledge. By offering various events, tailored
                                    sessions, internships, Lab Simulations related
                                    to HAM operations, training for licences, and
                                    multilingual resources, the centre will focus on
                                    building a foundation for a thriving and
                                    knowledgeable amateur radio community that can
                                    contribute significantly to disaster resilience
                                    and effective communication.
                                </p>
                            </div>
                        </div>
                        : null
                    }
                    {
                        selected == 3 ?
                        <div className={s.section}>
                            <img src="/initiatives/icons/003.png" alt="" />
                            <div className={s.text}>
                                <h2>
                                    Bringing HAM Radio Knowledge and Technology to
                                    the Masses
                                </h2>
                                <p>
                                    The project's plan is to take an active role in
                                    involving rural students and educational
                                    institutions to underscore the significance of
                                    amateur radio. The project will introduce HAM
                                    radio technology in coastal schools and colleges
                                    through live demos, interactive workshops, field
                                    visits, and informative resources. By
                                    emphasising safety and networking, empowering
                                    communities with hands-on practice, and thus
                                    making HAM radio accessible and discoverable.
                                    EMBRACE not only brings knowledge to the broad
                                    spectrum of individuals but also the technology.
                                    These collaborative endeavours result in
                                    heightened community awareness about the
                                    importance of amateur radio. Furthermore, it
                                    sparks interest in HAM radio and its related
                                    activities, thereby fostering a culture of
                                    curiosity and exploration among the community.
                                </p>
                            </div>
                        </div>
                        : null
                    }
                    {
                        selected == 4 ?
                        <div className={s.section}>
                            <img src="/initiatives/icons/002.png" alt="" />
                            <div className={s.text}>
                                <h2>
                                    Expanding HAM Radio Access: 15 Nodal centres for
                                    Skill Development
                                </h2>
                                <p>
                                    Over the course of 2 years, project will
                                    establish 15 Nodal centres within schools and
                                    colleges, each equipped with HAM radio setups.
                                    These centres will be made operational by
                                    training and supporting school students and
                                    teachers to acquire HAM licenses, ensuring that
                                    they are handled under the care of HAM license
                                    holders. This initiative is dedicated to
                                    enhancing skills and providing accessibility to
                                    HAM instruments for students. Our ultimate aim
                                    is to cultivate more HAM users by offering
                                    hands-on experience, free licensing support, and
                                    training.
                                </p>
                            </div>
                        </div>
                        : null
                    }
                    {
                        selected == 5 ?
                        <div className={s.section}>
                            <img src="/initiatives/icons/001.png" alt="" />
                            <div className={s.text}>
                                <h2>
                                    Mobile HAM Solutions: Electric Transport for
                                    Communication
                                </h2>
                                <p>
                                    One of the key objectives of the project is to
                                    develop and implement Mobile HAM Solutions,
                                    which include HAM-enabled trailers for electric
                                    cycles, electric scooters, Mid Size SUVs (Sport
                                    Utility Vehicles), and HAM Vans designed to meet
                                    different needs as per the circumstances. These
                                    Mobile HAM vehicles will be equipped with
                                    emergency communication gear, including
                                    antennas, power sources, and communication
                                    tools. These solutions are designed to address
                                    the challenge of disrupted communication
                                    infrastructure during disasters and emergencies.
                                    The goal is to swiftly deploy these mobile
                                    units, ensuring reliable communication support
                                    in critical situations, guaranteeing
                                    connectivity in disaster-affected regions, and
                                    strengthening disaster management capabilities.
                                    In addition to their operational use, these
                                    mobile units will also serve as training
                                    facilities, equipped with 5G network to function
                                    as mobile training centers for educating amateur
                                    radio enthusiasts, students, emergency response
                                    personnel, district administrators and community
                                    members.
                                </p>
                            </div>
                        </div>
                        : null
                    }
				</div>
			</div>
		</div>
	)
}