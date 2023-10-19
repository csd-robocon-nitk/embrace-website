import s from './getinvolved.module.css'

export default function Getinvolved () {
    return (
		<main className={s.getinvolved}>
			<div className={s.heading}>
				<div className={s.container}>
					<h1>GET INVOLVED</h1>
				</div>
			</div>
			<br />
			<br />
			<div className={s.content}>
				<div className={s.left}>
					<br />
					<br />
                    <h3>Be A Volunteer</h3>
					<br />
					<ul>
						<li>
                        Join our dedicated team of volunteers who actively participate in project activities, including workshops, training sessions, and field visits.
						</li>
						<br />
						<li>
                        Assist in organizing events, community outreach programs, and educational activities.
						</li>
						<br />
						<li>
                        Help maintain and upgrade our amateur radio infrastructure.
						</li>
						<br />
					</ul>
				</div>
				<div className={s.right}>
					<img src="./volunteers.png" alt="" />
				</div>
			</div>
            <div className={s.contacting}>
				<h3>Contact Information</h3><br />
                <p>
                If you have any questions or need assistance, please reach out to us <a href="./contact">here</a> .
                <br />Volunteers will receive a confirmation email upon successful registration, along with further instructions on the next steps.
                </p><br /><br />
            </div>
		</main>
	)
}