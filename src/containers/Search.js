import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchELEV } from '../actions';

const chunkLength = 4;

class Search extends Component {
  keywordRef;

  render() {
    let chunks = [];
    let i;
    for (i = 0; i < this.props.result.length; i += chunkLength) {
      chunks.push(this.props.result.slice(i, i + chunkLength));
    }
    return (
      <>
        <section className="section">
          <nav className="level">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Type anything to search..."
                    ref={node => (this.keywordRef = node)}
                    size="50"
                    onKeyDown={e => {
                      if (!this.keywordRef.value.trim()) {
                        return;
                      }
                      if (e.key !== 'Enter') {
                        return;
                      }
                      this.props.onDispatchSearch(this.keywordRef.value.trim());
                    }}
                    minLength={3}
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
                    onClick={e => {
                      if (!this.keywordRef.value.trim()) {
                        return;
                      }
                      this.props.onDispatchSearch(this.keywordRef.value.trim());
                    }}
                  >
                    Search
                  </button>
                </p>
              </div>
            </div>
          </nav>
        </section>
        <section className="section">
          {chunks.map((tiles, idx0) => {
            return (
              <div className="tile is-ancestor" key={`tiles-${idx0}`}>
                {tiles.map((tile, idx1) => {
                  return (
                    <div
                      className={`tile is-parent is-${12 / chunkLength}`}
                      key={`tile-${idx0}-${idx1}`}
                    >
                      <article className="tile is-child box">
                        <p
                          className="subtitle is-5"
                          dangerouslySetInnerHTML={{ __html: tile.title }}
                        ></p>
                        <p className="subtitle is-6">{tile.id}</p>
                      </article>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
      </>
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
