import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChooseNick from "../components/ChooseNick";
import Server from "../components/Server";
import CreateRoom from "../components/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import Setting from "../components/Setting";

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
      <JoinRoom
        playActiveTab={playActiveTab}
        setPlayActiveTab={setPlayActiveTab}
      />
    </>
  ); 
};

export default Play;
