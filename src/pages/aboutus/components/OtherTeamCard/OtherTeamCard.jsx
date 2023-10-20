import s from "./otherTeamCard.module.css"

export default function OtherTeamCard ({ name, callsign, designation, photoURL, linkedinURL }) {
    return (
        <div className={s.member}>
            <img className = {s.photo} src={photoURL} alt="" />
            <div className = {s.details}>
                <h3 className = {s.name}>{name}</h3>
                {callsign ? <p className = {s.callsign}>({callsign})</p> : null}
                {designation ? <p className = {s.callsign}>{designation}</p> : null}

                <a href={linkedinURL}>
                    <img className = {s.linkedin} src="/linkedin_white.png" alt="" />
                </a>
            </div>
        </div>
    )
}