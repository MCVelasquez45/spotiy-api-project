import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AlbumCard from '../../utilitys/AlbumCard/AlbumCard';
import FormControlComponent from '../../components/FormControl/FormControl';

const AlbumSearch = ({ accessToken }) => {
  // State to hold the user's album search query
  const [albumName, setAlbumName] = useState('');
  
  // State to store fetched album results
  const [albums, setAlbums] = useState([]);

  // State to track if a search has been initiated
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch albums from Spotify API based on the search query
  const handleSearch = async () => {
    if (!albumName) return; // Prevent search if query is empty

    const searchParameters = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Spotify API authorization
      },
    };

    try {
      // Fetch album data from Spotify API
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(albumName)}&type=album`, searchParameters);
      const data = await response.json();

      // Update albums state if results found, otherwise clear albums
      if (data?.albums?.items) {
        setAlbums(data.albums.items);
      } else {
        console.error('Album not found or response format is unexpected');
        setAlbums([]);
      }
    } catch (error) {
      console.error('Error fetching album data:', error);
      setAlbums([]);
    } finally {
      setHasSearched(true); // Mark that a search has been completed
    }
  };

  // Handle form submission to trigger album search
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <Container className="mt-4">
      {/* Form to capture user input for album search */}
      <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs={8}>
            {/* Input field for album name */}
            <FormControlComponent
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              placeholder="Enter album name"
            />
          </Col>
          <Col xs={4}>
            {/* Submit button for initiating search */}
            <Button type="submit" variant="success" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </form>

      {/* Display album search results */}
      <Row className="mt-4">
        {albums.length > 0 ? (
          albums.map((album) => (
            <Col key={album.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <AlbumCard album={album} />
            </Col>
          ))
        ) : hasSearched ? ( // Only display the message if a search was performed
          <Col xs={12}>
            <p>No albums found. Please try a different search.</p>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default AlbumSearch;


