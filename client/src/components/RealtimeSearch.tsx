import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {SearchResults} from './SearchResults';
import * as Styled from 'styled-components';

let inputStyle = {
  flex: 1,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0
};

let myForm = Styled.css`

`;

let submitStyle = {
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0
};

class RealtimeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.redirect = this.redirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});
  }

  redirect(ev) {
    ev.preventDefault();
    this.props.history.push(`/org/${this.state.value}`);
  }

  render() {
    return (
      <div>
        <form className="pure-form" style={{display: 'flex'}} onSubmit={this.redirect}>
          <input type="text" style={inputStyle} value={this.state.value.toLowerCase()}
                 placeholder="Search organizations..." onChange={this.handleChange}/>
          <button type="submit" style={submitStyle} className="pure-button">Go</button>
        </form>
        <SearchResults url="/v1/org-search/" search={this.state.value}/>
      </div>
    );
  }
}

RealtimeSearch = withRouter(RealtimeSearch); // add history prop


export {RealtimeSearch};
