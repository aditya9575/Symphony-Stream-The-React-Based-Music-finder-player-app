import React from 'react';
import MusicCard from './MusicCard';

const MusicGrid = ({ tracks }) => {
  return (
    <div className="container">
      <div className="row">
        {tracks.map((track) => (
          <div key={track.id} className="col-lg-3 col-md-6 py-2">
            <MusicCard track={track} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicGrid;