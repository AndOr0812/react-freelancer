import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import ScrollToTop from './ScrollToTop/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrinkNav: false,
      scrollTopButton: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let rect = event.srcElement.body.getBoundingClientRect();

    this.setState({
      shrinkNav: (rect.top < -100),
      scrollTopButton: (rect.top < -200)
    });
  }

  handleScrollToTop = (event) => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar shrink={this.state.shrinkNav} />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Copyright />
        {this.state.scrollTopButton && <ScrollToTop onScrollTop={this.handleScrollToTop} />}
      </React.Fragment>
    );
  }
}

export default App;
