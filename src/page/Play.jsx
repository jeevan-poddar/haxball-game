import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChooseNick from "../components/ChooseNick";
import Server from "../components/Server";
import Setting from "../components/setting";
import CreateRoom from "../components/createRoom";

const Play = () => {
  const [playActiveTab, setPlayActiveTab] = useState("chooseNick");
  const [nickname, setNickname] = useState("");

  return (
    <>
      <Navbar />
      <ChooseNick
        playActiveTab={playActiveTab}
        setPlayActiveTab={setPlayActiveTab}
        nickname={nickname}
        setNickname={setNickname}
      />
      <Server
        playActiveTab={playActiveTab}
        setPlayActiveTab={setPlayActiveTab}
      />
      <Setting
        playActiveTab={playActiveTab}
        setPlayActiveTab={setPlayActiveTab}
      />
      <CreateRoom
        playActiveTab={playActiveTab}
        setPlayActiveTab={setPlayActiveTab}
        nickname={nickname}
      />
    </>
  );
};

export default Play;
