
import React from 'react';
import { Link } from 'react-router-dom';

const StreamList = ({ streams }) => (
  <div>
    {streams.map((stream) => (
      <div key={stream.id}>
        <Link to={`/stream/${stream.id}`}>
          <img src={stream.thumbnail} alt={stream.title} />
          <h3>{stream.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default StreamList;
