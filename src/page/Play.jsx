import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import "./playNick.css";
import "./playServer.css";

const Play = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [setting, setSetting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setIsVisible(false);
  };
  return (
    <>
      <Navbar />
      <div className={`containerNick ${isVisible ? "" : "hide"}`}>
        <img className="logo_play" src="/img/logo.png" alt="" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formHeading">Choose Nickname</div>
          <hr className="horizontalLine" />
          <label className="nickname-lable" htmlFor="nickname">
            Nickname:
            <input
              autoComplete="off"
              {...register("nickname", {
                required: { value: true, message: "Please Enter a nickname" },
                minLength: {
                  value: 3,
                  message: "The nickname must be at least 3 characters long",
                },
              })}
              type="text"
              placeholder="Enter Nickname"
            />
          </label>
          {errors.nickname && (
            <div className="nickname_error">{errors.nickname.message}</div>
          )}
          <input
            className="submit_btn"
            disabled={isSubmitting}
            type="submit"
            value="OK"
          />
        </form>
      </div>
      <div
        className={`serverContainer ${setting ? "hide" : ""} ${
          isVisible ? "hide" : ""
        }`}
      >
        <div className="serverContainerHeading">
          <div className="left">Room List</div>
          <div className="right">3628 players in 521 rooms</div>
        </div>
        <hr className="horizontalLine" />
        <div className="tips">Tip: Join rooms near you to reduce lag.</div>
        <div className="rooms">
          <div className="roomsLeft">
            <div className="serverHeading">
              <div className="c1">Name</div>
              <div className="c2">Players</div>
              <div className="c3">Pass</div>
              <div className="c4">Distance</div>
            </div>
            <div className="servers">
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
              <div className="server">
                <div className="c1">Noob's Room</div>
                <div className="c2">2/10</div>
                <div className="c3">Yes</div>
                <div className="c4">920km</div>
              </div>
            </div>
            <div className="serverHeading">
              <div className="c1">Name</div>
              <div className="c2">Players</div>
              <div className="c3">Pass</div>
              <div className="c4">Distance</div>
            </div>
          </div>
          <div className="roomsRight">
            <div className="btn_box ">
              <button>Refresh</button>
              <button>Join Room</button>
              <button>Create Room</button>
            </div>
            <div className="btn_box">
              <button>Replays</button>
              <button onClick={() => setSetting(!setting)}>Settings</button>
              <button onClick={() => setIsVisible(!isVisible)}>
                Change Nick
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
