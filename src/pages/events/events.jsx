import s from './events.module.css'

export default function Events () {
    return (
        <main className={s.events}>
            <div className={s.heading}>
                <h1>EVENTS</h1>
            </div>
            <div className={s.content}>
                <h2>Upcoming Events</h2>
                <div className={s.cards}>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>Amateur Radio Workshop</h3>
                    </div>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>Community Disaster Preparedness Symposium</h3>
                    </div>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>HAM Radio License Training</h3>
                    </div>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>Exclusive womens Session on HAM</h3>
                    </div>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>Annual Conferrence</h3>
                    </div>
                </div>

                <h2>Past Events</h2>
                <div className={s.cards}>
                    <div className={s.card}>
                        <img src="/event.jpg" alt="" />
                        <h3>Interactive Field Day</h3>
                    </div>
                </div>

                <p>Stay tuned for updates on our upcoming events!</p>
            </div>
        </main>
    )
}