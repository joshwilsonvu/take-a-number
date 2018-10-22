import * as React from 'react';
import PropTypes from 'prop-types';

class Org extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="pure-g-r">
        <div className="pure-u-sm-1-6">&nbsp;</div>
        <div className="pure-u-sm-2-3">
          <h2>{this.props.name}</h2>
          <hr/>
        </div>
      </div>
    );
  }
}

Org.propTypes = {
  name: PropTypes.string.isRequired
};

export {Org};