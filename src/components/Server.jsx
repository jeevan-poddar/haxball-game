import React from "react";

const Server = (props) => {
  return (
    <div
      className={`serverContainer ${props.setting ? "hide" : ""} ${
        props.isVisible ? "hide" : ""
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
            <button onClick={() => props.setSetting(!props.setting)}>Settings</button>
            <button onClick={() => props.setIsVisible(!props.isVisible)}>
              Change Nick
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
