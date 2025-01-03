import s from "./aboutus.module.css";
import OtherTeamCard from "./components/OtherTeamCard/OtherTeamCard";
import Partners from "./partners/partners";
import Vision from "./vision/vision";

export default function Aboutus() {
  return (
    <main className={s.aboutus}>
      <div className={s.heading}>
        <div className={s.container}>
          <h1>ABOUT US</h1>
          <h2>
            Empowering Communities through
            <br />
            Disaster Resilience and Education
          </h2>
        </div>
      </div>
      <div className={s.content}>
        <h1>What we do</h1>
        <p>
          EMBRACE aims to address several interconnected goals centred around
          amateur radio and its significance in disaster management, education,
          gender empowerment, promoting HAM radio and introducing innovative
          communication solutions in the coastal regions of the Karnataka state.
        </p>
        <br />
        <p>
          EMBRACE is a multifaceted project centered around leveraging amateur
          radio technology in coastal regions of Karnataka, India. Its
          objectives include establishing a dedicated on-campus infrastructure
          for amateur radio to enhance communication during emergencies,
          creating a Center for Experiential Learning in Amateur Radio to
          educate and build a knowledgeable community, introducing HAM radio
          technology to rural schools and colleges, developing mobile HAM
          solutions for reliable communication during disasters, and
          establishing 15 nodal centers for skill development in amateur radio.
          Overall, EMBRACE aims to empower communities, improve disaster
          management capabilities, and promote education and innovation through
          amateur radio technology.
        </p>
      </div>

      <div className={s.content}>
        <h1>Our Mission</h1>
        <p>
          To harness the power of amateur radio technology and education to
          enhance disaster management, communication, and community empowerment
          in coastal regions of Karnataka, India.
        </p>
      </div>

      <Vision />

      <Partners />

      <div className={s.content}>
        <h1>Team</h1>
        <div className={s.coreteam}>
          <h2>Core Team</h2>
          <div className={s.cards}>
            <div className={s.card}>
              <img src="/team/PU.png" alt="" />
              <h2>Dr. Pruthviraj Umesh</h2>
              <p>&nbsp;</p>
              <div className={s.designation}>
                <h3>Principal Investigator</h3>
                <p>EMBRACE</p>
              </div>
              <div>
                <a href="mailto:pruthviu@nitk.edu.in">
                  <img src="./email.png" id={s.email} alt="Email" />
                </a>
                <a
                  target="_blank"
                  href="https://in.linkedin.com/in/dr-pruthviraj-u"
                >
                  <img src="./linkedin_white.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div className={s.card}>
              <img src="/team/mohit.jpg" alt="" />
              <h2>Dr. Mohit P. Tahiliani</h2>
              <p>&nbsp;</p>
              <div className={s.designation}>
                <h3>Co-Principal Investigator</h3>
                <p>EMBRACE</p>
              </div>
              <div>
                <a href="mailto:tahiliani@nitk.edu.in">
                  <img src="./email.png" id={s.email} alt="Email" />
                </a>
                <a
                  target="_blank"
                  href="https://in.linkedin.com/in/mohittahiliani"
                >
                  <img src="./linkedin_white.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Comment out other teams */}
        {/* <h2>HAM Operating Team</h2> */}
        {/* <h2>Project Managers</h2> */}
        {/* <h2>Support Team</h2> */}

        <h2>Web Design Team</h2>
        <div class={s.otherteam}>
          <OtherTeamCard
            name="Mr. Apoorva Agrawal"
            designation="Web Designer"
            photoURL="/team/apoorva.jpg"
            linkedinURL="https://www.linkedin.com/in/apoorva-agrawal-8302b825a"
          />
          <OtherTeamCard
            name="Mr. J Hariharan"
            designation="Web Designer"
            photoURL="/team/hariharan.jpg"
            linkedinURL="https://www.linkedin.com/in/hariharan-j-47aa43244"
          />
        </div>
      </div>
    </main>
  );
}
