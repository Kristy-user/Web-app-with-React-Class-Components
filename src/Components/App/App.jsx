import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import backGroundImg from '../../assets/background_photo_desktop.jpg';
import { PlayList } from '../Playlist/Playlist';
import { SearchBar } from '../SearchBar/SearchBar';
import styled from 'styled-components';
import { Spotify } from '../../assets/utils/Spotify';

const StyledAppWrapper = styled.div`
  body,
  html,
  #root {
    height: 100%;
  }

  html {
    font-size: 18px;
  }

  h1 {
    padding: 0.77rem 0;
    background-color: #010c3f;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.88rem;
    color: #fff;
  }

  h1 .highlight {
    color: #6c41ec;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.55rem;
  }

  .App {
    height: 100%;
    padding: 0 17% 10% 17%;
    background-image: url(${backGroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #fff;
  }

  .App-playlist {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media only screen and (max-width: 1020px) {
    .App-playlist {
      align-items: center;
      flex-direction: column;
    }
  }
`;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: [],
      });
    });
  }
  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }
  render() {
    return (
      <StyledAppWrapper>
        <h1>
          Ja<span className={'highlight'}>mmm</span>ing
        </h1>
        <div className={'App'}>
          <SearchBar onSearch={this.search} />
          <div className={'App-playlist'}>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </StyledAppWrapper>
    );
  }
}
