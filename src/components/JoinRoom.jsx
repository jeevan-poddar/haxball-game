import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateRoom.module.css";
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
  const [roomName, setRoomName] = useState("");
  const [showInRoomList, setShowInRoomList] = useState(true);

  useEffect(() => {
    setRoomName(`${props.nickname}'s Room`);
  }, [props.nickname]);
  return (
    <div
      className={`${styles.createRoomBody} ${
        props.playActiveTab === "createRoom" ? "" : styles.hide
      }`}
    >
      <div className={styles.conatiner}>
        <h2 className={styles.heading}>Create Room</h2>
        <hr className="horizontalLine" />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="roomName" className={styles.label}>
            <p>Room's Name:</p>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            <p>Password:</p>
            <input type="text" />
          </label>{" "}
          <label htmlFor="maxPlayer" className={styles.label}>
            <p>Max Players:</p>
            <select name="maxPlayer" className={styles.select}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>
          <button
            className={styles.showInRoomListButton}
            onClick={() => {
              setShowInRoomList(!showInRoomList);
            }}
          >
            Show in room list: {showInRoomList ? "Yes" : "No"}
          </button>
          <div className={styles.asdf}>
            <button onClick={() => props.setPlayActiveTab("server")}>
              Cancel
            </button>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;
