import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import styled from 'styled-components';

const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  width: 37%;
  max-height: 950px;
  padding: 2.27rem 1.16rem;
  background-color: rgba(1, 12, 63, 0.7);
  box-shadow: 0 4px 2px 2px #000000;

  & input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #6f6f6f;
    font-family: 'Poppins', sans-serif;
    font-size: 1.55rem;
    color: #fff;
  }

  .Playlist-save {
    cursor: pointer;
    width: 10rem;
    padding: 0.77rem 0;
    border-radius: 54px;
    border-width: 0px;
    margin-top: 1.27rem;
    background-color: #6c41ec;
    text-align: center;
    font-size: 0.83rem;
    transition: background-color 0.25s;
    color: #fff;
    font-weight: 500;
  }

  .Playlist-save:hover {
    background-color: rgba(108, 65, 233, 0.7);
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media only screen and (max-width: 1020px) {
    & {
      width: 90%;
    }
  }
`;

export class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <PlaylistWrapper>
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button onClick={this.props.onSave} className={'Playlist-save'}>
          SAVE TO SPOTIFY
        </button>
      </PlaylistWrapper>
    );
  }
}
