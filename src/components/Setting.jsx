import React, { useState } from "react";
import "./setting.css"; // Import regular CSS

const Setting = ({ setting, setSetting }) => {
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
    <div className={`setting ${setting ? "" : "hide"}`}>
      <div className="settingHeading">
        <h2>Settings</h2>
        <button onClick={() => setSetting(!setting)}>Close</button>
      </div>
      <hr className="horizontalLine" />

      {/* Navigation Tabs */}
      <nav className="settingNav">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`settingNavTab ${
                activeTab === tab.id ? "active" : ""
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
      <div className={`tabContent ${activeTab === "sound" ? "" : "hide"}`}>
        <div className="pointer" >Sounds enabled</div>
        <div className="pointer" >Chat sound enabled</div>
        <div className="pointer" >Nick highlight sound enabled</div>
        <div className="pointer" >Crowd sound enabled</div>
      </div>
      <div className={`tabContent ${activeTab === "video" ? "" : "hide"}`}>
        <div className="viewportMode">
          Viewport Mode:
          <select name="Viewport_Mode" id="Viewport_Mode">
            <option value="Dynamic">Dynamic</option>
            <option value="Restricted 840x410">Restricted 840x410</option>
            <option value="Full 1x zoom">Full 1x zoom</option>
            <option value="Full 1.25x zoom">Full 1.25x zoom</option>
            <option value="Full 1.5x zoom">Full 1.5x zoom</option>
            <option value="Full 1.75x zoom">Full 1.75x zoom</option>
            <option value="Full 2x zoom">Full 2x zoom</option>
            <option value="Full 2.25x zoom">Full 2.25x zoom</option>
            <option value="Full 2.5x zoom">Full 2.5x zoom</option>
          </select>
        </div>
        <div className="viewportMode">
          FPS Limit:
          <select name="Viewport_Mode" id="Viewport_Mode">
            <option value="Dynamic">None(Rcommended)</option>
            <option value="Restricted 840x410">30</option>
          </select>
        </div>
        <div className="viewportMode">
          Resolution Scaling:
          <select name="Viewport_Mode" id="Viewport_Mode">
            <option value="100%">100%</option>
            <option value="75%">75%</option>
            <option value="50%">50%</option>
            <option value="25%">25%</option>
          </select>
        </div>
        <div className="pointer" >Use low latency canvas</div>
        <div className="pointer" >Custom team colors enabled</div>
        <div className="pointer" >Show chat indicators</div>
        <div className="pointer" >Show player avatars</div>
        <div className="chatOpacity">
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
        <div className="viewportMode">
          Chat background width:
          <select name="Viewport_Mode" id="Viewport_Mode">
            <option value="Compact">Compact</option>
            <option value="Full">Full</option>
          </select>
        </div>
      </div>
      <div className={`tabContent ${activeTab === "input" ? "" : "hide"}`}>
        I am input settings
      </div>
      <div className={`tabContent ${activeTab === "misc" ? "" : "hide"}`}>
        I am misc settings
      </div>
    </div>
  );
};

export default Setting;
