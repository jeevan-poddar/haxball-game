import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./JoinRoom.module.css";
const JoinRoom = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // props.setPlayActiveTab("server");
  };
  return (
    <div
      className={`${styles.joinRoomBody} ${
        props.playActiveTab === "joinRoom" ? "" : styles.hide
      }`}
    >
      <div className={styles.conatiner}>
        <h2 className={styles.heading}>Join Room</h2>
        <hr className="horizontalLine" />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="roomId" className={styles.label}>
            <p>Room Id:</p>
            <input type="text" />
          </label>
          <label htmlFor="password" className={styles.label}>
            <p>Password:</p>
            <input type="text" />
          </label>
          <div className={styles.asdf}>
            <button
              className="button"
              onClick={() => props.setPlayActiveTab("server")}
            >
              Cancel
            </button>
            <button className="button">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;
