import * as React from 'react'

class Header extends React.Component {
  render(props) {
    let content = {
      backgroundColor: this.props.color,
      marginBottom: 0,
      paddingTop: '2em',
      paddingBottom: '2em',
    };
    let svg = {
      marginTop: 0,
      width: '100%',
      height: '10vw'
    };

    return (
      <header>
        <div style={content}>{this.props.children}</div>
        <div style={svg}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: this.props.color, stopOpacity: 1}}/>
                <stop offset="100%" style={{stopColor: this.props.color, stopOpacity: 0.5}}/>
              </linearGradient>
            </defs>
            <polygon points="0,0 100,0 0,100" fill="url(#grad1)"/>
          </svg>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  color: 'rgb(252,50,101)'
};

export {Header};