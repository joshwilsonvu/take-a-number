import * as React from 'react';
import {Link} from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="pure-g-r root">
        <div className="pure-u-sm-1-6">&nbsp;</div>
        <div className="pure-u-sm-2-3">
          <h2>404</h2>
          <p><strong>Uh oh!</strong> It seems like the page you're looking for doesn't exist.</p>
          <p>Try returning to <Link to="/">the main page</Link>.</p>
        </div>
      </div>
    );
  }
}

export {NotFound};