import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import $ from 'jquery';
import cxx from './Home.scss';

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

  constructor(props) {
    super(props);
    this.state = { pageY: null };
  }

  componentDidMount() {
    const bbox = ReactDOM.findDOMNode(this.jumbotron).getBoundingClientRect();
    const h = bbox.top;
    console.log('bbox', bbox);
    console.log('h', h);
    window.addEventListener('scroll', event => {
      const pageY = event.pageY || 0;
      this.setState({ pageY: pageY > h ? pageY : null });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { pageY } = this.state;

    const d0 = 'M0,45 C150,110 350,15 500,50';
    const d1 = 'M0,45 C150,110 350,15 500,50 L500,00 L0,0 Z';

    console.log('pageY', pageY);
    return (
      <div className={`container ${cxx.contBackground} border-3`}>
        <div className={`${cxx.main} border-1`}>
          <header
            className={`header ${cxx.myHeader} ${
              pageY > 0 ? 'sticky-top' : cxx.staticTop
            }`}
          >
            <svg
              className={cxx.banner}
              viewBox="0 0 500 500"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d={d0}
                style={{ stroke: 'black', strokeWidth: '4px', fill: 'none' }}
              />
              <path className={cxx.path0} d={d1} />
            </svg>
            <nav>
              <ul className="nav nav-pills float-right child-borders">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <h2
              style={{ zIndex: 1000 }}
              ref={jumbotron => (this.jumbotron = jumbotron)}
            >
              De Kunst Uitlaten
            </h2>
          </header>

          <ScrollView ref={scroller => (this._scroller = scroller)}>
            <main role="main">
              <div className={`jumbotron ${cxx.myJumbo} border-3 `}>
                <h1 className="display-3">Arts that gather</h1>
                <p className="lead">- Public spaces that matter</p>
                <p>
                  <ul className="nav nav-pills float-right child-borders">
                    <li className="nav-items">
                      <button
                        className="nav-link"
                        href="#"
                        onClick={() => this._scroller.scrollTo(1)}
                      >
                        Concept
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => this._scroller.scrollTo(2)}
                        className="nav-link"
                        href="#"
                      >
                        Agenda
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        href="#"
                        onClick={() => this._scroller.scrollTo(3)}
                      >
                        Already prepared
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        href="#"
                        onClick={() => this._scroller.scrollTo(4)}
                      >
                        Content Box
                      </button>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="row ">
                <div className="col-lg-12">
                  <ScrollElement name={1}>
                    <section>
                      <h2>Concept</h2>
                      <p>
                        The aim is to organize an art demonstration in the
                        public space of Ghent, in Summer 2018. Based on the
                        terms demos (gr., political and juridical term for folk)
                        and demonstrare (lat., to exhibit, to witness, to state,
                        to declare) the event will balance between politics and
                        performative exhibition. (Following the philosopher
                        Jaques Rancière, politics is not understood as tool for
                        the management of a people, but is constituted in the
                        appearance of social conflict in the public realm.
                        Drawing on this concept, an art demonstration can be
                        perceived as an event within which artwork could perform
                        its relation to social conflict. Using its own
                        performativity, art would inevitable become
                        contemporary, opening an alternative understanding of
                        authorship regarding appearance, signature and
                        property.) The main objective of this art demonstration
                        is to communicate through artistic languages the divers
                        stories, esthetics, expressions, voices and concerns of
                        the Citizens of Ghent and give the people behind of it a
                        face. It is an opportunity to speak face to face and
                        face to space. (Additionally, it increases the
                        accessibility of contemporary art for the general
                        public: the public space, in fact, is intended to
                        overcome precisely the many cultural, economic and
                        psychological barriers that still hinder the diffusion
                        of contemporary art. In this way, it can play an
                        important pedagogical and educational role, by favouring
                        the cultivation of taste and the knowledge of artistic
                        languages. But who are these heterogenic citizens that
                        declare their personal artefacts publicly to art? Is it
                        a state art institution which claims its political
                        agenda in public space? Is it a “sans-papier” artist
                        asking for the recognition of his culture capital? Is it
                        a young “professional” artist at the edge of existence
                        experiencing an empowerment in creativity? Is it a
                        migrated citizen raising demands towards the national
                        politics of culture? Or is it the City itself calling on
                        their public duty in art education? I propose that a
                        public articulation of a “part with art” that
                        simultaneously prevents the production of a “part
                        without parts in arts” could be a physical contact with
                        art pieces. Frateschi writing about Artotheks refers to
                        an intimate physical contact as central to a feeling of
                        aesthetic participation. Here, I argue that the politics
                        of art and thereby the democratic meaning of the
                        Artothek can be enacted by a public physical contact
                        that – by itself – questions the structures of art
                        circulation and appropriation.)
                      </p>
                    </section>
                  </ScrollElement>
                  <ScrollElement name={2}>
                    <section>
                      <h2>Agenda</h2>
                      <p>TODO</p>
                    </section>
                  </ScrollElement>

                  <ScrollElement name={3}>
                    <section>
                      <h2>Already Prepared</h2>
                      <p>
                        I imagine… I imagine (self-made) pictures carried by
                        people. I imagine pictures (out of the museum )carried
                        by security stuff. I imagine descriptions of the art
                        pieces which will stay in Ghent’s museums written on
                        canvas walked through the streets. I imagine phone
                        connected photos slideshows. I imagine signs out of
                        mirror. I hear sound. I imagine walking (wire or wood)
                        frames. I imagine replicas of acknowledged art. I
                        imagine street theater. I imagine lasting
                        representatives marking the route. I imagine framing the
                        city with tape, titling and signing it. I imagine the
                        Gentse Resistant Orchestra. I imagine demonstration
                        clowns. I imagine “kunst als hond”. Objects rolling
                        through the streets finding new relations and meaning in
                        encounters. I imagine Ghent’s youtube channels projected
                        on walls. I imagine an analog treadmill for art,
                        producing art. I imagine museum stuff exhibit themselves
                        as part of each art exhibition. I imagine big piles of
                        materials ready to get used. I imagine making analog
                        collages in the streets using copy machines and the
                        by-passing artworks. I imagine distributing free
                        vouchers for state supported art institutions. I imagine
                        kids drawing (with chalk) on the streets. I imagine the
                        siblings of Jeff Koons dog. I imagine imaginary museum
                        spaces. I imagine wearable pictures. I imagine wearable
                        pedestals (becoming the object itself). I imagine a
                        group of people puzzling out a picture. I imagine a
                        multigenerational, heterogenic, laud and silent divers
                        Life Parade, a Street Parade, a Free Parade which fights
                        for something instead of against. Arts that gather!
                        Public space that matter!
                      </p>
                    </section>
                  </ScrollElement>
                  <ScrollElement name={4}>
                    <section>
                      <h2>Content Box</h2>
                      <p> TODO</p>
                    </section>
                  </ScrollElement>
                </div>
              </div>
            </main>
          </ScrollView>

          <footer className="footer">
            <p>© Company 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
