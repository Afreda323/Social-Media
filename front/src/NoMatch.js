
import React from 'react';

const NoMatch = () => {
    return (
      <div className='section mapped'>
        <div className='overlay'></div>
        <div className='NoMatch text-center'>
          <h1 className='display-1'>404</h1>
          <h3>This page isn't available</h3>
          <p className='lead'>The link you followed may be broken, or the page may have been removed.</p>
        </div>
      </div>

    );
}

export default NoMatch
