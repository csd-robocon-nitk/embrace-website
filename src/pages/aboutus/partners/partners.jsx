import { useState } from "react";
import s from "./partners.module.css";

export default function Partners() {
  let [selected, setSelected] = useState(1);
  let content = selected == 1 ? content1 : content2;

  return (
    <section className={s.partners}>
      <h1>Supporting Partners</h1>
      <img src="/partners-new.png" alt="" />
      <div className={s.content}>
        <div className={s.tabs}>
          <div className={s.left}>
            <div
              className={`${s.tab} ${selected == 1 ? s.active : ""}`}
              onClick={() => setSelected(1)}
            >
              NITK
            </div>
          </div>
          <div className={s.right}>
            <div
              className={`${s.tab} ${selected == 2 ? s.active : ""}`}
              onClick={() => setSelected(2)}
            >
              MARC
            </div>
          </div>
        </div>
        {content}
      </div>
    </section>
  );
}

let content1 = (
  <div className={s.details}>
    <h2>National Institute of Technology, Karnataka, Surathkal</h2>
    <p>
      National Institute of Technology Karnataka (NITK), Surathkal, located in
      the west coast region of India has established itself as one of India's
      top technological institutions and is recognized as an Institute of
      National Importance under the NIT Act 2007 by the Government of India.
      NITK, Surathkal is located in Mangalore City, Karnataka State, India. The
      Institute was established as Karnataka Regional Engineering College (KREC)
      in 1960 and upgraded as NITK in 2002.
      <br />
      <br />
      In 2023, NITK achieved notable rankings across multiple prestigious
      assessments. According to the National Institutional Ranking Framework
      (NIRF), NITK secured the 12th position in the Engineering category and an
      impressive 38th rank in the overall assessment, reflecting its commitment
      to academic excellence and holistic development. Additionally, in the QS
      India University Rankings, NITK attained the 63rd position, further
      establishing its standing as a prominent institution in the higher
      education landscape. These rankings affirm NITK's dedication to delivering
      quality education and research in engineering and beyond.
      <br />
      <br />
      NITK's commitment to research and development is highlighted by its
      extensive project portfolio. In 2021-2022, the institution conducted 222
      projects, securing 476.8 million (INR) in funding. In the previous year,
      2020-2021, 226 projects were completed with 460.6 million (INR) in
      funding. Additionally, NITK engaged in consultancy projects, undertaking
      921 projects in 2021-2022 (128.7 million INR) and 606 in 2020-2021 (148.1
      million INR), showcasing its dedication to both academic research and
      industry collaboration.
      <br />
      <br />
      NITK Surathkal offers undergraduate, postgraduate, and doctoral programs
      in Engineering, Science, and Management. The institute has 270+ highly
      qualified and dedicated faculty, 496+ committed supporting staff, 7000+
      talented and motivated students, 35000+ distinguished alumni worldwide.
    </p>
  </div>
);

let content2 = (
  <div className={s.details}>
    <h2>Mangalore Amateur Radio Club</h2>
    <p>
      The Mangalore Amateur Radio Club, or MARC, is an amateur radio club based
      in Mangaluru, India. A group of enthusiastic HAMs started the club in
      1976. The group was established in 1976 by Mr Varadaraya Nayak and Mr
      Mahabala Hegde.
      <br />
      <br />
      MARC participates in various activities, such as amateur radio homebrew,
      amateur radio awareness campaigns, communication support during landslides
      and flooding, and emergency radio services to civic organisations during
      calamities and disasters. Members of the club actively participate in
      international contests like CQWW and CQ WPX and other international
      activities like Jamboree on the Air (JOTA), as well as fox hunts on the
      radio. Additionally, the organisation organises workshops for persons
      interested in becoming amateur radio operators and provides annual
      training. MARC coordinates HAM licence exams in Mangalore as well as other
      activities like moving base stations during amateur radio events,
      disasters, and other exigencies in accordance with the Rules of Wireless
      and the Planning and Coordination Wing (WPC) of the Ministry of
      Communications, Government of India (which issues amateur radio licences
      in India).
      <br />
      <br />
      MARC is known for its proficiency in amateur radio activities and
      emergency communication. They possess expertise in operating radio
      equipment, providing emergency communication services during disasters,
      and engaging with the global amateur radio community. MARC has been
      running the Disaster Management Repeater of NITK-Mangalore, and its
      operating frequency is 145.425 MHz on the radio. Since it is located in
      Mangalore able to provide line-of-sight coverage to Udupi, Mangalore, and
      other cities in Karnataka State, as well as Kannur and Kasaragod in Kerala
      State.Their technical prowess, commitment, proficiency and experience make
      them an essential asset to EMBRACE.
    </p>
  </div>
);

/* Commented out
    // ...WR&OE content...
    // ...CSD content...
    // ...COSH content...
*/
