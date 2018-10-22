import * as React from 'react';
import {Header} from './components/Header';
import {RealtimeSearch} from '../../components/RealtimeSearch';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="pure-g-r root">
            <Header>
              <div className="pure-u-sm-1-6">&nbsp;</div>
              <div className="pure-u-sm-2-3 text-center">
                <h2>This is my website!</h2>
              </div>
            </Header>
            <div className="pure-u-sm-1-6">&nbsp;</div>
            <div className="pure-u-sm-2-3 block-margins">
              <p><i>I'm gonna do even more things like rounded corners.</i></p>
              <a href="https://www.github.com/joshwilsonvu/TakeANumber.git">Source</a>
              <RealtimeSearch/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export {Landing};