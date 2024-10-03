
import React from 'react';
import streamUrl from './stream.jsx';

const StreamPlayer = ({ streamUrl }) => (
  <div>
    <video src={streamUrl} controls autoPlay></video>
  </div>
);

export default StreamPlayer;
