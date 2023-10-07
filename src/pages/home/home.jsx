import s from './home.module.css'

export default function Home () {
    return (
        <main className = {s.home}>
            <div className = {s.cover}>
                <div className = {s.content}>
                    <div>
                        <h1>EMBRACE</h1><br />
                        <h2>
                            <span>E</span>nabling
                            <span> M</span>ulti-disciplinary and
                            <span> B</span>roader
                            <span> R</span>adio
                            <span> A</span>pplications for
                            <span> C</span>ommunity
                            <span> E</span>mpowerment
                        </h2>
                    </div>
                    {/* <h3>Empowering Communities through Disaster Resilience and Education</h3> */}
                    <img src="/gifpic.gif" alt="" />
                    
                </div>
            </div>
            <div className={s.about}>
                <div className={s.content}>
                    <div>
                        <h1>About Us</h1><br />
                        <h2>Empowering Communities through Disaster Resilience and
                            Education
                        </h2><br />
                        <p>EMBRACE aims to address several interconnected goals centred around
                            amateur radio and its significance in disaster management, education,
                            gender empowerment, promoting HAM radio and introducing innovative
                            communication solutions in the coastal regions of the Karnataka state.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className={s.key}>
                <div className={s.content}>
                    <h1>KEY INITIATIVES</h1>
                </div>
            </div>
            <div className={s.testimonials}>
                <div className={s.content}>
                    <h1>TESTIMONIALS</h1>
                </div>
            </div>
        </main>
    )
}