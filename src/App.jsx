// import React, { useState } from 'react';
// import NavBar from './components/NavBar';
// import LoadingSpinner from './components/LoadingSpinner';
// import MusicGrid from './components/MusicGrid';
// import { searchTracks } from './services/musicApi';
// import './App.css';

// function App() {
//   const [tracks, setTracks] = useState([]);
//   const [keyWord, setKeyWord] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleSearch = async () => {
//     if (!keyWord.trim()) return;

//     setIsLoading(true);
//     setHasSearched(true);

//     try {
//       const results = await searchTracks(keyWord);
//       setTracks(results);
//     } catch (error) {
//       // You might want to add error handling UI here
//       console.error("Error searching tracks:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       <NavBar
//         keyWord={keyWord}
//         setKeyWord={setKeyWord}
//         handleSearch={handleSearch}
//       />

//       <main className="main-content">
//         {/* {!hasSearched && <WelcomeScreen />} */}
//         {isLoading && <LoadingSpinner />}
//         {hasSearched && !isLoading && <MusicGrid tracks={tracks} />}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
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
      <NavBar
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
