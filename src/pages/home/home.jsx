import s from './home.module.css'

export default function Home () {
    return (
        <main className = {s.home}>
            <div className = {s.cover}>
                <div className = {s.content}>
                    <h1>EMBRACE</h1><br />
                    <h2>
                        <span>E</span>nabling
                        <span> M</span>ulti-disciplinary and
                        <span> B</span>roader
                        <span> R</span>adio
                        <span> A</span>pplications for
                        <span> C</span>ommunity
                        <span> E</span>mpowerment
                    </h2><br />
                    {/* <h3>Empowering Communities through Disaster Resilience and Education</h3> */}
                </div>
            </div>
        </main>
    )
}