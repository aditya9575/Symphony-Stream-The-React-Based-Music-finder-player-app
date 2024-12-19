import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import WelcomeScreen from './WelcomeScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCalendar, faUser, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function NavBarComponent() {
    const [tracks, setTracks] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const getTracks = async () => {
        if (!keyWord.trim()) return;

        setIsLoading(true);
        setHasSearched(true);
        try {
            const response = await axios.get(
                `https://v1.nocodeapi.com/aditya_mehto/spotify/jlekhFboAKnfiCmK/search?type=track&q=${keyWord}`
            );
            setTracks(response.data.tracks.items);
        } catch (error) {
            console.error("Error fetching tracks:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
                <Container fluid>
                    <Navbar.Brand href="/" className="brand">
                        Symphony-Stream <FontAwesomeIcon icon={faHeadphones} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form.Control
                            value={keyWord}
                            type="search"
                            placeholder="Find your favorite songs"
                            className="me-2 search-input"
                            aria-label="Search"
                            onChange={(e) => setKeyWord(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && getTracks()}
                            required
                        />
                        <Button
                            variant={keyWord ? "outline-primary" : "outline-secondary"}
                            onClick={getTracks}
                            disabled={!keyWord}
                            className="search-button"
                        >
                            Search
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="main-content">
                {!hasSearched && <WelcomeScreen />}

                {isLoading && (
                    <div className="loading-container">
                        <Spinner animation="border" variant="primary" />
                        <h2>Searching for your music...</h2>
                    </div>
                )}

                {hasSearched && !isLoading && (
                    <div className="container">
                        <div className="row">
                            {tracks.map((element) => (
                                <div key={element.id} className="col-lg-3 col-md-6 py-2">
                                    <Card className="music-card">
                                        <div className="card-image-container">
                                            <Card.Img variant="top" src={element.album.images[1].url} />
                                            <div className="play-overlay">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="track-title">{element.name}</Card.Title>
                                            <div className="track-info">
                                                <p>
                                                    <FontAwesomeIcon icon={faUser} /> {element.album.artists[0].name}
                                                </p>
                                                <p>
                                                    <FontAwesomeIcon icon={faCalendar} /> {element.album.release_date}
                                                </p>
                                            </div>
                                            <audio src={element.preview_url} controls className="custom-audio-player" />
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default NavBarComponent;