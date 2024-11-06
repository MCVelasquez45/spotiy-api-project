// src/components/LandingPage/LandingPage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to the Spotify Album & Artist Finder</h1>
      <p className="lead">Explore and discover your favorite music albums and artists!</p>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/artist">
          <Button variant="success" className="mx-2">Search Artists</Button>
        </Link>
        <Link to="/albums">
          <Button variant="success" className="mx-2">Search Albums</Button>
        </Link>
      </div>
    </Container>
  );
};

export default LandingPage;
