import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import $ from 'jquery';
import cxx from './app.scss';

import { ScrollView, ScrollElement } from './ScrollView';

// <ScrollView ref={scroller => (this._scroller = scroller)}>
//   <div
//     className={cx.wrapper}
//     style={{
//       gridTemplateColumns: `repeat(${children.length *
//         activeSpan}, ${columnWidth}px)`
//     }}
//   >
//     {React.Children.map(children, (comp, i) => {
//       const col = getCol(i, children.length, span); // Math.floor(i / 2) + 1;
//       return (
//         <VisibilitySensor
//           offset={{
//             bottom: 0,
//             top: 0
//           }}
//         >
//           {({ isVisible }) =>
//             <ScrollElement name={i}>
//               <Item
//                 {...this.props}
//                 selected={selected === comp.props.id}
//                 defaultCol={col}
//                 visible={isVisible}
//                 index={i}
//               >
//                 {comp}
//               </Item>
//             </ScrollElement>}
//         </VisibilitySensor>
//       );
//     })}
//   </div>
// </ScrollView>

class App extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };
  static defaultProps = {
    path: '/'
  };
  render() {
    return (
      <div className="container">
        <header className="header clearfix ">
          <h3 className="text-muted">Project name</h3>
        </header>

        <ScrollView ref={scroller => (this._scroller = scroller)}>
          <main role="main">
            <div className="jumbotron border-3">
              <h1 className="display-3">Jumbotron heading</h1>
              <p className="lead">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <ul className="nav nav-pills float-right child-borders">
                  <li className="nav-items">
                    <button
                      className="nav-link active"
                      href="#"
                      onClick={() => this._scroller.scrollTo(1)}
                    >
                      Chapter1 <span className="sr-only">(current)</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => this._scroller.scrollTo(2)}
                      className="nav-link"
                      href="#"
                    >
                      Chapter2
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      href="#"
                      onClick={() => this._scroller.scrollTo(3)}
                    >
                      Chapter3
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      href="#"
                      onClick={() => this._scroller.scrollTo(4)}
                    >
                      Chapter4
                    </button>
                  </li>
                </ul>
              </p>
            </div>

            <div className="row ">
              <div className="col-lg-12">
                <ScrollElement name={1}>
                  <section>
                    <h2>Chapter1: Introduction</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Duis
                      autem vel eum iriure dolor in hendrerit in vulputate velit
                      esse molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio dignissim qui blandit
                      praesent luptatum zzril delenit augue duis dolore te
                      feugait nulla facilisi. Nam liber tempor cum soluta nobis
                      eleifend option congue nihil imperdiet doming id quod
                      mazim placerat facer possim assum. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis. At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, At accusam aliquyam
                      diam diam dolore dolores duo eirmod eos erat, et nonumy
                      sed tempor et et invidunt justo labore Stet clita ea et
                      gubergren, kasd magna no rebum. sanctus sea sed takimata
                      ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut laboreet dolore
                      magna aliquyam erat. Consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </section>
                </ScrollElement>
                <ScrollElement name={2}>
                  <section>
                    <h2>Chapter2: Main</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Duis
                      autem vel eum iriure dolor in hendrerit in vulputate velit
                      esse molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio dignissim qui blandit
                      praesent luptatum zzril delenit augue duis dolore te
                      feugait nulla facilisi. Nam liber tempor cum soluta nobis
                      eleifend option congue nihil imperdiet doming id quod
                      mazim placerat facer possim assum. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis. At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, At accusam aliquyam
                      diam diam dolore dolores duo eirmod eos erat, et nonumy
                      sed tempor et et invidunt justo labore Stet clita ea et
                      gubergren, kasd magna no rebum. sanctus sea sed takimata
                      ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut laboreet dolore
                      magna aliquyam erat. Consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </section>
                </ScrollElement>
                <ScrollElement name={3}>
                  <section>
                    <h2>Chapter 3:</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Duis
                      autem vel eum iriure dolor in hendrerit in vulputate velit
                      esse molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio dignissim qui blandit
                      praesent luptatum zzril delenit augue duis dolore te
                      feugait nulla facilisi. Nam liber tempor cum soluta nobis
                      eleifend option congue nihil imperdiet doming id quod
                      mazim placerat facer possim assum. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis. At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, At accusam aliquyam
                      diam diam dolore dolores duo eirmod eos erat, et nonumy
                      sed tempor et et invidunt justo labore Stet clita ea et
                      gubergren, kasd magna no rebum. sanctus sea sed takimata
                      ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut laboreet dolore
                      magna aliquyam erat. Consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </section>
                </ScrollElement>
                <ScrollElement name={4}>
                  <section>
                    <h2>Subheading</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Duis
                      autem vel eum iriure dolor in hendrerit in vulputate velit
                      esse molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio dignissim qui blandit
                      praesent luptatum zzril delenit augue duis dolore te
                      feugait nulla facilisi. Nam liber tempor cum soluta nobis
                      eleifend option congue nihil imperdiet doming id quod
                      mazim placerat facer possim assum. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis. At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, At accusam aliquyam
                      diam diam dolore dolores duo eirmod eos erat, et nonumy
                      sed tempor et et invidunt justo labore Stet clita ea et
                      gubergren, kasd magna no rebum. sanctus sea sed takimata
                      ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut laboreet dolore
                      magna aliquyam erat. Consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </section>
                </ScrollElement>
                <ScrollElement name={3}>
                  <section>
                    <h2>Chapter 3:</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Duis
                      autem vel eum iriure dolor in hendrerit in vulputate velit
                      esse molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis at
                      vero eros et accumsan et iusto odio dignissim qui blandit
                      praesent luptatum zzril delenit augue duis dolore te
                      feugait nulla facilisi. Nam liber tempor cum soluta nobis
                      eleifend option congue nihil imperdiet doming id quod
                      mazim placerat facer possim assum. Lorem ipsum dolor sit
                      amet, consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat. Duis autem vel eum iriure
                      dolor in hendrerit in vulputate velit esse molestie
                      consequat, vel illum dolore eu feugiat nulla facilisis. At
                      vero eos et accusam et justo duo dolores et ea rebum. Stet
                      clita kasd gubergren, no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, At accusam aliquyam
                      diam diam dolore dolores duo eirmod eos erat, et nonumy
                      sed tempor et et invidunt justo labore Stet clita ea et
                      gubergren, kasd magna no rebum. sanctus sea sed takimata
                      ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                      ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut laboreet dolore
                      magna aliquyam erat. Consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam et justo
                      duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                  </section>
                </ScrollElement>
                <h2>Subheading</h2>
                <p>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>

                <h2>Subheading</h2>
                <p>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </p>
              </div>
            </div>
          </main>
        </ScrollView>

        <footer className="footer">
          <p>© Company 2017</p>
        </footer>
      </div>
    );
  }
}

export default App;
