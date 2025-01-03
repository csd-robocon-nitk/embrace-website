import React from "react";
import styles from "./internship.module.css";
import logo from "/internship/nitklogo.png";
import profile from "/internship/ep1.jpg";
import qrCode from "/internship/qrcode.jpg";

const Internship = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={logo} alt="NITK Logo" className={styles.logo} />
          <div>
            <h1>National Institute of Technology</h1>
            <h2>Karnataka, Surathkal</h2>
          </div>
        </div>
        <div className={styles.profilePic}>
          <img src={profile} alt="Profile" />
        </div>
        <h2>Sankalp B Chandavarkar</h2>
        <h3>NMAM Institute of Technology</h3>
        <p>B.E : Computer and Communication Engineering</p>
        <p>USN : 4NM21CM028</p>
        <div className={styles.qrCode}>
          <img src={qrCode} alt="QR Code" />
        </div>
        <p>NITK/EMBRACE/INT/2024/11</p>
        <div className={styles.footer}>INTERN</div>
      </div>
    </div>
  );
};

export default Internship;
