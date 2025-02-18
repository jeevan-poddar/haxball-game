import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./playNick.css";
import "./playServer.css";
import ChooseNick from "../components/ChooseNick";
import Server from "../components/Server";
import Setting from "../components/setting";

const Play = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [setting, setSetting] = useState(false);
  

  return (
    <>
      <Navbar />
      <ChooseNick isVisible={isVisible} setIsVisible={setIsVisible} />
      <Server
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setting={setting}
        setSetting={setSetting}
      />
      <Setting setting={setting} setSetting={setSetting} />
    </>
  );
};

export default Play;
