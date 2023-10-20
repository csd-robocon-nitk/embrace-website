import { useState } from 'react'
import s from './partners.module.css'

export default function Partners() {
	let [selected, setSelected] = useState(1)

    let content
    if (selected == 1) content = content1
    else if (selected == 2) content = content2
    else if (selected == 3) content = content3
    else if (selected == 4) content = content4
    else if (selected == 5) content = content5
    else content = content6

	return (
		<section className={s.partners}>
			<h1>Supporting Partners</h1>
			<img src="/partners.png" alt="" />
			<div className={s.content}>
				<div className={s.tabs}>
					<div className={s.left}>
						<div
							className={`${s.tab} ${selected == 1 ? s.active : ''}`}
							onClick={() => setSelected(1)}
						>
							NITK
						</div>
						<div className={s.bottom}>
							<div
								className={`${s.tab} ${selected == 2 ? s.active : ''}`}
								onClick={() => setSelected(2)}
							>
								NITK HAM CLUB
							</div>
							<div
								className={`${s.tab} ${selected == 3 ? s.active : ''}`}
								onClick={() => setSelected(3)}
							>
								WR&OE
							</div>
							<div
								className={`${s.tab} ${selected == 4 ? s.active : ''}`}
								onClick={() => setSelected(4)}
							>
								CSD
							</div>
							<div
								className={`${s.tab} ${selected == 5 ? s.active : ''}`}
								onClick={() => setSelected(5)}
							>
								COSH
							</div>
						</div>
					</div>
					<div className={s.right}>
						<div
							className={`${s.tab} ${selected == 6 ? s.active : ''}`}
							onClick={() => setSelected(6)}
						>
							MARC
						</div>
					</div>
				</div>
				{content}
			</div>
		</section>
	)
}

let content1 = (
	<div className={s.details}>
		<h2>National Institute of Technology, Karnataka, Surathkal</h2>
		<p>
			National Institute of Technology Karnataka (NITK), Surathkal,
			located in the west coast region of India has established itself as
			one of India's top technological institutions and is recognized as
			an Institute of National Importance under the NIT Act 2007 by the
			Government of India. NITK, Surathkal is located in Mangalore City,
			Karnataka State, India. The Institute was established as Karnataka
			Regional Engineering College (KREC) in 1960 and upgraded as NITK in
			2002.
			<br /><br />
			In 2023, NITK achieved notable rankings across multiple prestigious
			assessments. According to the National Institutional Ranking
			Framework (NIRF), NITK secured the 12th position in the Engineering
			category and an impressive 38th rank in the overall assessment,
			reflecting its commitment to academic excellence and holistic
			development. Additionally, in the QS India University Rankings, NITK
			attained the 63rd position, further establishing its standing as a
			prominent institution in the higher education landscape. These
			rankings affirm NITK's dedication to delivering quality education
			and research in engineering and beyond.
			<br /><br />
			NITK's commitment to research and development is highlighted by its
			extensive project portfolio. In 2021-2022, the institution conducted
			222 projects, securing 476.8 million (INR) in funding. In the
			previous year, 2020-2021, 226 projects were completed with 460.6
			million (INR) in funding. Additionally, NITK engaged in consultancy
			projects, undertaking 921 projects in 2021-2022 (128.7 million INR)
			and 606 in 2020-2021 (148.1 million INR), showcasing its dedication
			to both academic research and industry collaboration.
			<br /><br />
			NITK Surathkal offers undergraduate, postgraduate, and doctoral
			programs in Engineering, Science, and Management. The institute has
			270+ highly qualified and dedicated faculty, 496+ committed
			supporting staff, 7000+ talented and motivated students, 35000+
			distinguished alumni worldwide.
		</p>
	</div>
)

let content2 = (
	<div className={s.details}>
		<h2>NITK HAM Club</h2>
		<p>
			The NITK Amateur Radio facility an active amateur radio club active
			since 1984 with a License number 1685 and call sign of VU2REC.
			VU2REC is an amateur radio club dedicated to promoting the hobby of
			amateur radio and encouraging the growth and development of the
			amateur radio community. We also engage students and amateur radio
			operators in experimentation with all possible opensource hardware
			and software that can be used for radio communications. CLub
			provides laboratory setup to conduct radio communication
			experimentation in opensource hardware and software. VU2REC aims to
			popularize and raise awareness of amateur radio in society,
			particularly among young people and students.
		</p>
	</div>
)

let content3 = (
	<div className={s.details}>
		<h2>Department of Water Resources and Ocean Engineering</h2>
		<p>
			The Department of Water Resources & Ocean Engg (Formerly Applied
			Mechanics and Hydraulics) established in 1960, the Department has
			earned a good reputation as a centre for academic, research and
			industrial consulting activities. Academic programme leading to
			M.Tech Degree in (i) Marine Structures (MS) (ii) Water Resources
			Engineering and Management (WREM) and (iii) Remote Sensing and
			Geographical Information System (RS & GIS) and Ph.D. Degree in the
			broad areas of Hydraulics and Water Resources Engineering, Coastal
			Engineering and Remote Sensing and GIS Applications are offered. In
			addition to regular students, candidates sponsored under the Quality
			Improvement Program (QIP) are admitted to these programs. The
			Department also contribute significantly to the academic content of
			the B.Tech. program in Civil Engineering and offers basic
			Engineering Science & Elective courses to all under-graduate
			programs. Laboratories with state-of-art equipment, highly qualified
			faculty and dedicated staff provide an ideal environment for
			academic and research pursuits.
			<br /><br />
			The Department is well known for its R&D activities as is evident
			from the large number of completed and ongoing projects funded by
			external agencies (MHRD - Ministry of Human Resource Development,
			AICTE - All India Council for Technical Education, MoST - Ministry
			of Science and Technology, ISRO - Indian Space Research
			Organisation, INCGW - Indian National Commission for Cooperation
			with UNESCO, INCOH - Indian National Commission for Oceanography and
			Hydrography, MOEF - Ministry of Environment and Forests, MOES -
			Ministry of Earth Sciences, NMPT - New Mangalore Port Trust, INCH -
			Indian National Commission for History), technical papers published
			in peer-reviewed Journals & Conferences and Doctoral Degrees
			awarded.
		</p>
	</div>
)

let content4 = (
	<div className={s.details}>
		<h2>Center for System Design</h2>
		<p>
			Centre for System Design (CSD) established in the year 2008, is a
			platform for Industry-academia-society collaboration on
			transdisciplinary research Experts from all disciplines contribute
			to the research CSD has successfully carried out projects of about
			55 crores funded by industries, MoE, MSME, MHI, DST, OHI BRNS, DRDO
			and other departments of GoI, GoK.
			<br /><br />
			CSD serves as a platform for industry-academia-society collaboration
			on transdisciplinary research. They have a track record of
			successfully executing funded projects (about 550 million (INR)) and
			providing an environment for experiential learning in emerging
			technologies. Their experts contribute to various aspects of the
			project EMBRACE, including project management, system design and
			implementation.
		</p>
	</div>
)

let content5 = (
	<div className={s.details}>
		<h2>Centre for Open-source Software and Hardware</h2>
		<p>
			A centre dedicated to open-source software and hardware at the
			National Institute of Technology Karnataka, Surathkal, Mangalore,
			India. Formed in October 2021 by a team of enthusiastic faculty
			members, the Centre for Open-Source Software and Hardware (COSH) at
			NITK Surathkal has a broad multidisciplinary objective of serving
			society through research, education, and development of open-source
			technologies, and is the first of its kind in India. COSH is open to
			all enthusiasts of open-source software and hardware. In particular,
			COSH encourages the student community to adopt open-source and
			trains them to synchronize to the needs of the industry while also
			amalgamating teaching and research. There is no boundary to the
			scope of open-source, both in academia and industry.
			<br /><br />
			COSH focuses on open-source technologies and aims to serve society
			through research and education. Their multidisciplinary approach
			allows them to contribute to EMBRACE by developing open-source
			solutions and leveraging their expertise in open-source software and
			hardware.
		</p>
	</div>
)

let content6 = (
	<div className={s.details}>
		<h2>Mangalore Amateur Radio Club</h2>
		<p>
			The Mangalore Amateur Radio Club, or MARC, is an amateur radio club
			based in Mangaluru, India. A group of enthusiastic HAMs started the
			club in 1976. The group was established in 1976 by Mr Varadaraya
			Nayak and Mr Mahabala Hegde.
			<br /><br />
			MARC participates in various activities, such as amateur radio
			homebrew, amateur radio awareness campaigns, communication support
			during landslides and flooding, and emergency radio services to
			civic organisations during calamities and disasters. Members of the
			club actively participate in international contests like CQWW and CQ
			WPX and other international activities like Jamboree on the Air
			(JOTA), as well as fox hunts on the radio. Additionally, the
			organisation organises workshops for persons interested in becoming
			amateur radio operators and provides annual training. MARC
			coordinates HAM licence exams in Mangalore as well as other
			activities like moving base stations during amateur radio events,
			disasters, and other exigencies in accordance with the Rules of
			Wireless and the Planning and Coordination Wing (WPC) of the
			Ministry of Communications, Government of India (which issues
			amateur radio licences in India).
			<br /><br />
			MARC is known for its proficiency in amateur radio activities and
			emergency communication. They possess expertise in operating radio
			equipment, providing emergency communication services during
			disasters, and engaging with the global amateur radio community.
			MARC has been running the Disaster Management Repeater of
			NITK-Mangalore, and its operating frequency is 145.425 MHz on the
			radio. Since it is located in Mangalore able to provide
			line-of-sight coverage to Udupi, Mangalore, and other cities in
			Karnataka State, as well as Kannur and Kasaragod in Kerala
			State.Their technical prowess, commitment, proficiency and
			experience make them an essential asset to EMBRACE.
		</p>
	</div>
)
