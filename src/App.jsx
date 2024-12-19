import React, { useState } from 'react';
import axios from 'axios';
import NavBarComponent from './components/NavbarComponent';
import LoadingSpinner from './components/LoadingSpinner';
import MusicGrid from './components/MusicGrid';
import './App.css';

const BASE_URL = import.meta.env.VITE_Rapid_Api_Spotify_URL;

function App() {
  const [tracks, setTracks] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!keyWord.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    try {
      const response = await axios.get(`${BASE_URL}/search?type=track&q=${keyWord}`);
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error("Error searching tracks:", error);
      // Optionally, add error handling UI here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <NavBarComponent
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        handleSearch={handleSearch}
      />

      <main className="main-content">
        {isLoading && <LoadingSpinner />}
        {hasSearched && !isLoading && <MusicGrid tracks={tracks} />}
      </main>
    </div>
  );
}

export default App;
