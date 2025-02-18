import React, { useState } from "react";
import "./setting.css";

const Setting = (props) => {
  const [soundSettings, setSoundSettings] = useState(true);
  const [inputSettings, setInputSettings] = useState(false);
  const [videoSettings, setVideoSettings] = useState(false);
  const [miscSettings, setMiscSettings] = useState(false);

  return (
    <div className={`setting ${props.setting ? "" : "hide"}`}>
      <div className="settingHeading">
        <h2>Settings</h2>
        <button onClick={() => props.setSetting(!props.setting)}>Close</button>
      </div>
      <hr className="horizontalLine" />
      <nav className="settingNav">
        <ul>
          <li
            onClick={() => {
              setSoundSettings(true);
              setInputSettings(false);
              setVideoSettings(false);
              setMiscSettings(false);
            }}
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            Sound
          </li>
          <li
            onClick={() => {
              setSoundSettings(false);
              setInputSettings(false);
              setVideoSettings(true);
              setMiscSettings(false);
            }}
          >
            Video
          </li>
          <li
            onClick={() => {
              setSoundSettings(false);
              setInputSettings(true);
              setVideoSettings(false);
              setMiscSettings(false);
            }}
          >
            Input
          </li>
          <li
            onClick={() => {
              setSoundSettings(false);
              setInputSettings(false);
              setVideoSettings(false);
              setMiscSettings(true);
            }}
            style={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            Misc
          </li>
        </ul>
      </nav>
      <div className={`soundSettings ${soundSettings ? "" : "hide"}`}>
        i am sound settings
      </div>
      <div className={`videoSettings ${videoSettings ? "" : "hide"}`}>
        I am video settings
      </div>
      <div className={`inputSettings ${inputSettings ? "" : "hide"}`}>
        i am input settings
      </div>
      <div className={`miscSettings ${miscSettings ? "" : "hide"}`}>
        i am misc settings
      </div>
    </div>
  );
};

export default Setting;
