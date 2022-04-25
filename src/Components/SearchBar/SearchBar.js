import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.94rem;
  margin-bottom: 6.33rem;

  input {
    width: 287px;
    padding: 0.88rem 0;
    border: 1px solid #fff;
    border-radius: 3px;
    margin-bottom: 2.22rem;
    color: #010c3f;
    text-align: center;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }

  .SearchButton {
    cursor: pointer;
    width: 8.11rem;
    padding: 0.77rem 0;
    border-radius: 54px;
    background-color: #010c3f;
    text-align: center;
    font-size: 0.833rem;
    transition: background-color 0.25s;
    border: 0px;
    color: #fff;
    font-weight: 500;
    & .SearchButton:hover {
      background-color: rgba(108, 65, 233, 0.7);
    }
  }
`;

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  render() {
    return (
      <SearchBarWrapper>
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className={'SearchButton'}>
          SEARCH
        </button>
      </SearchBarWrapper>
    );
  }
}
