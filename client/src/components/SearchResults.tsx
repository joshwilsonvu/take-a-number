import * as React from 'react';
import {debounce} from '../services/Debounce';
import {ajax} from '../services/Ajax';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: []};
    this.load = debounce(this.load.bind(this), this.props.debounce);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.load();
    }
    if (prevProps.debounce !== this.props.debounce) {
      this.load = debounce(this.load.func, this.props.debounce);
    }
  }

  load() {
    if (this.props.search) {
      this.setState({loaded: false});
      ajax(this.props.url + encodeURIComponent(this.props.search), {
        method: 'get',
        responseType: 'json',
      }).then(response => {
        this.setState({results: response, loaded: true});
      }).catch(err => {
        this.setState({results: [], loaded: true});
      });
    } else {
      this.setState({results: [], loaded: true});
    }
  }

  render() {
    console.log(this.state.results);
    return this.state.loaded ? (
      <ul>
        {this.state.results.map(result => <li key={result}><a href={'/org/' + result}>{result}</a></li>)}
      </ul>
    ) : (
      <p><i>Loading...</i></p>
    );
  }
}

SearchResults.defaultProps = {
  debounce: 500
};

export {SearchResults};
