import React from 'react';
import styled from 'styled-components';
import { TrackList } from '../TrackList/TrackList';

const SearchWrapper = styled.div`
  width: 50%;
  height: 950px;
  overflow-y: scroll;
  padding: 0.88rem;
  background-color: rgba(1, 12, 63, 0.7);
  box-shadow: 0 4px 2px 2px #000000;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media only screen and (max-width: 1020px) {
    & {
      width: 90%;
      margin-bottom: 2rem;
    }
  }
`;

export class SearchResults extends React.Component {
  render() {
    return (
      <SearchWrapper>
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} />
      </SearchWrapper>
    );
  }
}
