import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ChooseNick from "../components/ChooseNick";
import Server from "../components/Server";
import Setting from "../components/Setting";
import CreateRoom from "../components/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import RoomNav from "../components/RoomNav";
import Room from "../components/room";

const Play = () => {
  // const [playActiveTab, setPlayActiveTab] = useState("chooseNick");
  const [playActiveTab, setPlayActiveTab] = useState("chooseNick");
  const [nickname, setNickname] = useState("");
  // const [navbarHide, setNavbarHide] = useState(false)
  const [navbarHide, setNavbarHide] = useState(false)

  return (
    <>
      <Navbar navbarHide={navbarHide} />
      <RoomNav navbarHide={navbarHide} />
      <div className="main">
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
          setNavbarHide={setNavbarHide}
        />
        <JoinRoom
          playActiveTab={playActiveTab}
          setPlayActiveTab={setPlayActiveTab}
        />
        <Room
          playActiveTab={playActiveTab}
          setPlayActiveTab={setPlayActiveTab}
        />
      </div>
    </>
  );
};

export default Play;
