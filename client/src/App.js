// src/App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { useEffect, useState } from 'react'; // Import React hooks
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import routing components
import ArtistSearch from './pages/ArtistSearch/ArtistSearch'; // Artist search page
import AlbumSearch from './pages/AlbumSearch/AlbumSearch'; // Album search page
import Logo from './components/Logo/Logo'; // Logo component
import LandingPage from './pages/Landing/Landing'; // Landing page
const CLIENT_ID = 'fa98fd1e93bc4bbaa4f5c5d1c7009fa3';
const CLIENT_SECRET = 'f9adbb80af1b429eadf9bea6bd3e7c5c';

function App() {
  // State to hold Spotify API access token
  const [accessToken, setAccessToken] = useState('');
  
  // State to hold artist data for display
  const [artist, setArtist] = useState(null);

  // useEffect to fetch Spotify access token on component mount
  useEffect(() => {
    // Spotify API authentication setup
    const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${authString}`,
      },
      body: 'grant_type=client_credentials',
    };

    // Fetch access token
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Container>
          {/* Logo component at the top of the page */}
          <Row className="mt-4 mb-3">
            <Col className="text-center">
              <Logo />
            </Col>
          </Row>

          {/* Navigation bar */}
          <Navbar bg="dark" variant="dark" className="justify-content-center mb-4">
            <Nav>
              <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link> {/* Link to landing page */}
              <Nav.Link as={Link} to="/artist" className="mx-3">Search Artists</Nav.Link> {/* Link to artist search */}
              <Nav.Link as={Link} to="/albums" className="mx-3">Search Albums</Nav.Link> {/* Link to album search */}
            </Nav>
          </Navbar>
        </Container>

        {/* Define application routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
          <Route path="/artist" element={<ArtistSearch accessToken={accessToken} setArtist={setArtist} />} /> {/* Artist search route */}
          <Route path="/albums" element={<AlbumSearch accessToken={accessToken} />} /> {/* Album search route */}
        </Routes>

        {/* Display artist information if an artist is selected */}
        {artist && (
          <Container className="artist-info my-5 text-center">
            <h2>{artist.name}</h2> {/* Artist's name */}
            {artist.images && artist.images.length > 0 && (
              <img 
                src={artist.images[0].url} 
                alt={artist.name} 
                width="200" 
                className="my-3" 
              /> 
            )}
            <p>Followers: {artist.followers.total}</p> {/* Artist's follower count */}
            <p>Genres: {artist.genres.join(', ')}</p> {/* Artist's genres */}
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;
