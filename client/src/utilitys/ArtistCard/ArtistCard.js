import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './ArtistCard.css'; // CSS file for styling

// Functional component for rendering an artist card
const ArtistCard = ({ name, imageUrl, followers, genres }) => {
  // Safe check for followers to ensure it's a number before using .toLocaleString
  const formattedFollowers = followers ? followers.toLocaleString() : 'N/A';

  return (
    <BootstrapCard className="artist-card mb-4">
      {/* Conditional rendering for the artist image */}
      <BootstrapCard.Img
        variant="top"
        src={imageUrl || 'https://via.placeholder.com/150'}
        alt={name}
        className="artist-image"
      />
      {/* Body of the card containing the artist name, followers, and genres */}
      <BootstrapCard.Body className="artist-card-body">
        <BootstrapCard.Title className="artist-card-title">{name}</BootstrapCard.Title>
        <BootstrapCard.Text>Followers: {formattedFollowers}</BootstrapCard.Text>
        {genres && genres.length > 0 && (
          <BootstrapCard.Text>Genres: {genres.join(', ')}</BootstrapCard.Text>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

// Exporting the ArtistCard component
export default ArtistCard;
