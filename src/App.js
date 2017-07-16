import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import SectionAbout from './components/section-about';
import SectionProjects from './components/section-projects';
import SectionSocialNetWorks from './components/section-social-networks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pageWrap">
          <Header/>
          <SectionAbout/>
          <SectionSocialNetWorks/>
          <SectionProjects/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
