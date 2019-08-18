import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchELEV } from '../actions';

class Search extends Component {
  keywordRef;

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            style={{ width: 468 }}
            className="input"
            type="text"
            placeholder="Type anything to search..."
            ref={node => (this.keywordRef = node)}
            onKeyDown={e => {
              if (!this.keywordRef.value.trim()) {
                return;
              }

              if (e.key !== 'Enter') {
                return;
              }

              this.props.onDispatchSearch(this.keywordRef.value.trim());
            }}
          />
        </div>
        <div className="control">
          <button
            className="button is-info"
            onClick={e => {
              if (!this.keywordRef.value.trim()) {
                return;
              }

              this.props.onDispatchSearch(this.keywordRef.value.trim());
            }}
          >
            Search
          </button>
        </div>
      </div>
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
