import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchELEV } from '../actions';

class Search extends Component {
  keywordRef;

  render() {
    return (
      <input
        class="input"
        type="text"
        placeholder="Type anything to search..."
        ref={node => (this.keywordRef = node)}
        onChange={e => {
          if (!this.keywordRef.value.trim()) {
            return;
          }

          this.props.onDispatchSearch(this.keywordRef.value.trim());
        }}
      />
    );
  }
}

const mapSearchStateToProps = state => {
  return {
    keyword: state.keyword,
    result: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDispatchSearch: keyword => dispatch(searchELEV(keyword))
  };
};

const ConnectedSearch = connect(
  mapSearchStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
