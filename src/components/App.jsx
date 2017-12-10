// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import $ from 'jquery';
import cxx from './app.scss';

import Home from './Home';
import Collage from './Collage';
import Bookmarks from './Bookmarks';
// import LongIslandGirls from './components/LongIslandGirls';
import RecordCollection from './RecordCollection';
import Projects from './Projects';
import CV from './CV';
// import Nav from './components/Nav';
// import cxx from './components/cxx/nav.scss';
// import './global/annotation.scss';
// import './global/index.scss';

const selectElement = path => {
  if (path === '/') return Home;
  if (path === '/CV') return CV;
  if (path === '/Collage') return Collage;
  if (path === '/Bookmarks') return Bookmarks;
  if (path === '/RecordCollection') return RecordCollection;
  if (path === '/Projects') return Projects;

  return Home;
};

class App extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };
  static defaultProps = {
    path: '/'
  };

  constructor(props) {
    super(props);
    const { path } = props;
    this.clickHandler = this.clickHandler.bind(this);

    let width;
    let height;
    if (window.innerWidth > 2000) {
      width = 1000;
      height = 770;
    } else {
      width = 860;
      height = 640;
    }

    // width = 1200;
    // height = 800;
    this.state = {
      path,
      oldPath: path,
      back: false,
      width,
      height
    };
  }

  componentDidMount() {
    // window.onLoad = function() {
    // const width = 800;
    // const height = 600;
    // const fontSize = null;
    // const pad = 20; // this.props;
    // // console.log('window', window.innerWidth);
    // const main = ReactDOM.findDOMNode(this.main);
    // const height = ReactDOM.findDOMNode(this.cont).clientHeight;
    // const width = ReactDOM.findDOMNode(this.cont).clientWidth;
    // this.setState({ height, width });
    // };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      path: newProps.path,
      oldPath: this.props.path,
      back: !this.state.back
    });
  }

  clickHandler(event) {
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.
    const path = event.currentTarget.getAttribute('href');
    if (this.state.path !== path) {
      const currentPath = event.currentTarget.getAttribute('href');
      window.history.pushState(path, path, `#${currentPath}`);
      this.setState(oldState => ({
        path,
        oldPath: oldState.path,
        back: !oldState.back
      }));
    }
  }

  render() {
    const { width, height } = this.state;

    const pad = 20;
    // const transformOrigin = height / 2;
    // const fontSize = 20;

    const { path, oldPath, back } = this.state;
    const activeElement = selectElement(path);
    const passiveElement = selectElement(oldPath);
    const compDim = { width: width - pad * 2, height: height - pad * 2 };
    const marginTop = 20;
    // const pad = this.props.pad;
    return (
      <div className="container" style={{ marginTop: `${marginTop}px` }}>
        <div className="row">
          <div className={'col-md-3 col-xs-12'}>
            <div className={`${cxx.nav} ${cxx.tornBorder}`}>
              <div className={cxx.title}>
                <span>Jan Maushagen</span>&nbsp;/&nbsp; <br />{' '}
                {this.state.path.substring(1)}
              </div>
              <div className={cxx.list}>
                <ul>
                  <li>
                    <a onClick={this.clickHandler} href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a onClick={this.clickHandler} href="/CV">
                      CV <small>(my so called adult life)</small>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.clickHandler} href="/Collage">
                      Collage <small>(me and my friends )</small>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.clickHandler} href="/Projects">
                      Projects <small>{"(stuff I'm proud of)"}</small>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.clickHandler} href="/RecordCollection">
                      My record collection
                    </a>
                  </li>
                  <li>
                    <a onClick={this.clickHandler} href="/Bookmarks">
                      My Bookmarks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id={cxx.right} className={'col-md-9 col-xs-12'}>
            <div className={`${cxx.flipContainer}`}>
              <div
                className={cxx.flipper}
                style={{
                  transformOrigin: `100% ${compDim.height / 2 + marginTop}px`,
                  transform: back ? 'rotateX(180deg)' : null,
                  zIndex: back ? 3 : null
                }}
              >
                <div
                  className={cxx.front}
                  style={{ width: `${width}px`, height: `${height}px` }}
                >
                  <div>
                    {!back ? (
                      React.createElement(activeElement, compDim)
                    ) : (
                      React.createElement(passiveElement, compDim)
                    )}
                  </div>
                </div>
                <div
                  className={cxx.back}
                  style={{ width: `${width}px`, height: `${height}px` }}
                >
                  <div className={cxx.passiveElement}>
                    {back ? (
                      React.createElement(activeElement, compDim)
                    ) : (
                      React.createElement(passiveElement, compDim)
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
