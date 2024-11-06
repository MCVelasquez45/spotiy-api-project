# Spotify Album Finder 🎶

Spotify Album Finder is a React-based web application that allows users to search for albums and artists using the Spotify API. Users can view album and artist information, including genres, follower count, and album art. This project demonstrates integration with a third-party API, user-driven search functionality, and organized, responsive UI design.

## Features

- **Artist Search**: Look up artists by name and view detailed information such as genres, follower count, and image.
- **Album Search**: Search for albums by title and see a list of results with album art and metadata.
- **Responsive Design**: Designed with React-Bootstrap for a responsive and visually appealing layout.

## Getting Started

### Prerequisites

To run this project, you'll need:

- **Node.js** (>= 14.0)
- **Spotify Developer Account**: You need a client ID and client secret from Spotify to access their API.

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MCVelasquez45/spotiy-api-project.git
    cd spotify-album-finder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Add Spotify Credentials**:

   Replace the placeholders `CLIENT_ID` and `CLIENT_SECRET` in `src/App.js` with your actual Spotify API credentials. You can obtain these by registering an app on the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

   ```javascript
   const CLIENT_ID = 'your_spotify_client_id';
   const CLIENT_SECRET = 'your_spotify_client_secret';
