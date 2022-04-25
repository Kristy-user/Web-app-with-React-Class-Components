import React from 'react';
import styled from 'styled-components';

const WrapperTrack = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(256, 256, 256, 0.8);

  .Track-action {
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.05rem;
    transition: color 0.25s;
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    & .Track-action:hover {
      color: rgba(265, 265, 265, 0.5);
    }
  }

  .Track-information {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 72px;
    & h3 {
      margin-bottom: 0.22rem;
    }

    & p {
      font-size: 0.83rem;
      font-weight: 300;
      color: rgba(256, 256, 256, 0.8);
    }
  }
`;

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack() {
    console.log(this.props.track);
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }

  render() {
    return (
      <WrapperTrack>
        <div className={'Track-information'}>
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </WrapperTrack>
    );
  }
}
