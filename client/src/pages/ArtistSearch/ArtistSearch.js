import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FormControlComponent from '../../components/FormControl/FormControl';
import ArtistCard from '../../utilitys/ArtistCard/ArtistCard';

const ArtistSearch = ({ accessToken, FormControlComponentProp }) => {
  const [artistName, setArtistName] = useState(''); // State to track the artist name input
  const [results, setResults] = useState([]); // State to hold the search results
  const [hasSearched, setHasSearched] = useState(false); // State to track if a search has been performed

  // Function to fetch artists from the Spotify API
  const handleSearch = async () => {
    if (!artistName) return; // Do nothing if the input is empty

    const searchParameters = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Authorization header for Spotify API
      },
    };

    try {
      // Fetch artist data from Spotify API
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist`, searchParameters);
      const data = await response.json();

      // If artists are found, update results; otherwise, clear results
      if (data.artists.items.length > 0) {
        setResults(data.artists.items);
      } else {
        console.error('No artists found');
        setResults([]);
      }
    } catch (error) {
      console.error('Error fetching artist data:', error);
      setResults([]);
    } finally {
      setHasSearched(true); // Mark that a search has been completed
    }
  };

  // Trigger search on form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <Container className="mt-4">
      <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs={8}>
            {/* Use a custom FormControl component, or fallback if not provided */}
            {FormControlComponentProp ? (
              <FormControlComponentProp
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Enter artist name"
              />
            ) : (
              <FormControlComponent
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Enter artist name"
              />
            )}
          </Col>
          <Col xs={4}>
            <Button type="submit" variant="success" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </form>

      {/* Display artist results */}
      <Row className="mt-4">
        {results.length > 0 ? (
          results.map((artist) => (
            <Col key={artist.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              {/* Passing artist's name, image, followers, and genres to the ArtistCard */}
              <ArtistCard 
                artist={artist} 
                name={artist.name} 
                imageUrl={artist.images[0]?.url} 
                followers={artist.followers.total} 
                genres={artist.genres} 
              />
            </Col>
          ))
        ) : hasSearched ? ( // Only display the message if a search was performed
          <Col xs={12}>
            <p>No artists found. Please try a different search.</p>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default ArtistSearch;
