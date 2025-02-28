import React from "react";
import styles from "../styles/Room.module.css";
const Room = (props) => {
  return (
    <div className={`${styles.dsfvbg}${props.playActiveTab === "room" ? "" : styles.hide}`}>
      <div className={styles.room}>
        <div className={styles.rommHeader}>
          <div className={styles.header}></div>
          <hr className="horizontalLine"></hr>
          <div className={styles.header2}></div>
          <div className={styles.container}>
            <div className={styles.minorSetting}></div>
            <div className={styles.redTeam}></div>
            <div className={styles.spectator}></div>
            <div className={styles.blueTeam}></div>
          </div>
          <div className={styles.minorSetting2}></div>
        </div>
      </div>
      <div className={styles.messageBox}></div>
    </div> 
  );
};

export default Room;
