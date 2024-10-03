import React from "react";
import { useParams } from "react-router-dom";
import StreamPlayer from "./streamplayer.jsx";
import Chat from "./chat.jsx";
import "./index.css";

const Stream = () => {
  const { streamId } = useParams();
  const streamUrl = `https://jsonplaceholder.typicode.com/todos/1${streamId}`;
  const streamUrl2 = `https://www.googleapis.com/youtube/v3/channels${streamId}`;
  const streamUrl3 = `'https://blog.twitch.tv/en/tags/developers/'${streamId}`;

  return (
    <div className="stream">
      <h2 style={{ background: "black", color: "Yellow" }}> Games</h2>
      <StreamPlayer streamUrl={streamUrl} />
      <StreamPlayer streamUrl={streamUrl2} />
      <StreamPlayer streamUrl={streamUrl3} />
      <h2 style={{ background: "black", color: "Yellow" }}>eSports</h2>
      <StreamPlayer streamUrl={streamUrl} />
      <StreamPlayer streamUrl={streamUrl2} />
      <StreamPlayer streamUrl={streamUrl3} />
      <h2 style={{ background: "black", color: "Yellow" }}>Talk Shows</h2>
      <StreamPlayer streamUrl={streamUrl} />
      <StreamPlayer streamUrl={streamUrl2} />
      <StreamPlayer streamUrl={streamUrl3} />

      <Chat />
    </div>
  );
};

export default Stream;
