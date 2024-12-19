import React from 'react';
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

const MusicCard = ({ track }) => {
  return (
    <Card className="music-card">
      <div className="card-image-container">
        <Card.Img variant="top" src={track.album.images[1].url} />
        <div className="play-overlay">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <Card.Body>
        <Card.Title className="track-title">{track.name}</Card.Title>
        <div className="track-info">
          <p>
            <FontAwesomeIcon icon={faUser} /> {track.album.artists[0].name}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar} /> {track.album.release_date}
          </p>
        </div>
        <audio src={track.preview_url} controls className="custom-audio-player" />
      </Card.Body>
    </Card>
  );
};

export default MusicCard;