import { useState } from 'react'
import s from './contact.module.css'

export default function Contact() {
	let [ name, setName ] = useState("")
	let [ email, setEmail ] = useState("")
	let [ message, setMessage ] = useState("")

	function submitHandler () {}

	return (
		<main className={s.contact}>
			<div className={s.heading}>
				<div className={s.container}>
					<h1>CONTACT US</h1><br />
                    <div className={s.address}> 
                        <img src="./home.png" alt="home" />
                        <p>National Institute of Technology<br></br> Karnataka, Surathkal, Mangalore - 575 025
                        </p>
                    </div>
                    <div className={s.emailid}>
                        <img src="./email.png" alt="add" />
                        <p>embrace@nitk.edu.in</p>
                    </div>                     
				</div>
			</div>
			<div className={s.form}>
				<div>
					<h1>Want to Get in Touch?</h1>
					<h2>Drop any queries or suggestions here!</h2>
				</div>
				<form onSubmit={submitHandler}>
					<label htmlFor="name">Name</label>
					<br/>
					<input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required />
					<br/>
					<label htmlFor="email">Email</label>
					<br/>
					<input id="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required />
					<br/>
					<label htmlFor="message">Message</label>
					<br/>
					<textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
					<br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</main>
	)
}
