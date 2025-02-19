import React, { useState } from "react";
import styles from "./Setting.module.css"; // Import CSS Module

const Setting = (props) => {
  const [activeTab, setActiveTab] = useState("sound");
  const [chatOpacity, setChatOpacity] = useState(0.8);
  const [chatFocous, setChatFocous] = useState(140);

  const tabs = [
    { id: "sound", label: "Sound" },
    { id: "video", label: "Video" },
    { id: "input", label: "Input" },
    { id: "misc", label: "Misc" },
  ];

  return (
    <div
      className={`${styles.setting} ${
        props.playActiveTab === "setting" ? "" : styles.hide
      }`}
    >
      <div className={styles.settingHeading}>
        <h2>Settings</h2>
        <button onClick={() => props.setPlayActiveTab("server")}>Close</button>
      </div>
      <hr className="horizontalLine" />

      {/* Navigation Tabs */}
      <nav className={styles.settingNav}>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.settingNavTab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              style={{
                borderRadius:
                  index === 0
                    ? "5px 0 0 5px"
                    : index === tabs.length - 1
                    ? "0 5px 5px 0"
                    : "0",
              }}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Tab Content */}
      <div
        className={`${styles.tabContent} ${
          activeTab === "sound" ? "" : styles.hide
        }`}
      >
        <div className={styles.pointer}>Sounds enabled</div>
        <div className={styles.pointer}>Chat sound enabled</div>
        <div className={styles.pointer}>Nick highlight sound enabled</div>
        <div className={styles.pointer}>Crowd sound enabled</div>
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "video" ? "" : styles.hide
        }`}
      >
        <div className={styles.selectingSetting}>
          Viewport Mode:
          <select name="Viewport_Mode">
            <option value="Dynamic">Dynamic</option>
            <option value="Restricted_840x410">Restricted 840x410</option>
            <option value="Full_1x_zoom">Full 1x zoom</option>
            <option value="Full_1.25x_zoom">Full 1.25x zoom</option>
            <option value="Full_1.5x_zoom">Full 1.5x zoom</option>
            <option value="Full_1.75x_zoom">Full 1.75x zoom</option>
            <option value="Full_2x_zoom">Full 2x zoom</option>
            <option value="Full_2.25x_zoom">Full 2.25x zoom</option>
            <option value="Full_2.5x_zoom">Full 2.5x zoom</option>
          </select>
        </div>
        <div className={styles.selectingSetting}>
          FPS Limit:
          <select name="fpsLimit" id="Viewport_Mode">
            <option value="none">None(Rcommended)</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className={styles.selectingSetting}>
          Resolution Scaling:
          <select name="resolutionScaling">
            <option value="100%">100%</option>
            <option value="75%">75%</option>
            <option value="50%">50%</option>
            <option value="25%">25%</option>
          </select>
        </div>
        <div className={styles.pointer}>Use low latency canvas</div>
        <div className={styles.pointer}>Custom team colors enabled</div>
        <div className={styles.pointer}>Show chat indicators</div>
        <div className={styles.pointer}>Show player avatars</div>
        <div className={styles.inputRange}>
          <p>Chat Opacity</p> {chatOpacity}
          <input
            type="range"
            min="0.5"
            max="1"
            step={0.01}
            value={chatOpacity}
            onChange={(e) => setChatOpacity(e.target.value)}
          />
          <p>Chat focus height</p> {chatFocous}
          <input
            type="range"
            min="0"
            max="400"
            step={10}
            value={chatFocous}
            onChange={(e) => setChatFocous(e.target.value)}
          />
        </div>
        <div className={styles.selectingSetting}>
          Chat background width:
          <select name="CBW">
            <option value="Compact">Compact</option>
            <option value="Full">Full</option>
          </select>
        </div>
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "input" ? "" : styles.hide
        }`}
      >
        I am input settings
      </div>
      <div
        className={`${styles.tabContent} ${
          activeTab === "misc" ? "" : styles.hide
        }`}
      >
        I am misc settings
      </div>
    </div>
  );
};

export default Setting;
