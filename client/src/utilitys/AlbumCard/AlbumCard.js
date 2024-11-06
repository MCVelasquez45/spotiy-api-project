import React from 'react'; // Importing React to use JSX syntax
import { Card as BootstrapCard } from 'react-bootstrap'; // Importing Bootstrap's Card component
import './AlbumCard.css'; // Importing the CSS file for styling

// Functional component for rendering an album card
const AlbumCard = ({ album }) => {
  return (
    // Using Bootstrap's Card component with a custom class for styling
    <BootstrapCard className="album-card mb-4">
      {/* Conditional rendering for the album image */}
      <BootstrapCard.Img
        variant="top" // Sets the image to the top of the card
        // Checks if album.images exists and has at least one image; if not, uses a placeholder image
        src={album.images && album.images.length > 0 ? album.images[0].url : 'https://via.placeholder.com/150'}
        alt={album.name} // Sets the alt text for accessibility
        className="album-artwork" // Custom class for artwork styling
      />
      {/* Body of the card containing the album title */}
      <BootstrapCard.Body className="album-card-body">
        {/* Title of the album */}
        <BootstrapCard.Title className="album-card-title">{album.name}</BootstrapCard.Title>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

// Exporting the AlbumCard component for use in other parts of the application
export default AlbumCard;
