import React from 'react';
import styled from 'styled-components';
import { Track } from '../Track/Track';

const TrackListWrapper = styled.div`
  width: 100%;
`;

export class TrackList extends React.Component {
  render() {
    return (
      <TrackListWrapper>
        {this.props.tracks.map((track) => (
          <Track
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
            onAdd={this.props.onAdd}
            track={track}
            key={track.id}
          />
        ))}
      </TrackListWrapper>
    );
  }
}
