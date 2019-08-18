import React from 'react';

export default function Header() {
  return (
    <div className="tile is-ancestor" style={{ marginTop: 20 }}>
      <div className="tile is-parent is-12">
        <div className="tile is-child">
          <p className="title">Elev.io rest app by Rob Lao</p>
        </div>
      </div>
    </div>
  );
}
