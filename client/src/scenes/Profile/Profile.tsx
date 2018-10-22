import * as React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Org} from '../Org/Org';
import {ProfilePicture} from '../../components/ProfilePicture';
import {ajax} from '../../services/Ajax';

/**
 * Profiles should be accessible by any user, logged in as an admin or not,
 * but cookie authentication should be used to provide a link for an admin
 * to go directly to their profile as well as edit it.
 */
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info: {}, error: false};
    ajax(`/v1/admin/${encodeURIComponent(this.props.email)}`, {
      method: 'GET',
      responseType: 'json',
    }).then(response => {
      console.log(response);
      this.setState({
        info: response,
        error: false
      });
    }).catch(response => {
      this.setState({error: true});
    });

  }

  render(props) {
    return !this.state.error ? (
      <div className="pure-g-r root">
        <div className="pure-u-sm-1-3">&nbsp;</div>
        <div className="pure-u-sm-1-6">
          <ProfilePicture/>
        </div>
        <div className="pure-u-sm-1-2">
          <h2>{this.state.info.first_name} {this.state.info.last_name}</h2>
          <p>{this.state.info.email}</p>

        </div>
      </div>
    ) : (
      <Redirect to="/404"/>
    );
  }
}

Org.propTypes = {
  email: PropTypes.string.isRequired
};

export {Profile};