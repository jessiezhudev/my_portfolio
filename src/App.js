import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import SectionAbout from './components/section-about';
import SectionBlogs from './components/section-blogs';
import SectionProjects from './components/section-projects';
import SectionSocialNetWorks from './components/section-social-networks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SectionAbout/>
        <SectionProjects/>
        <SectionSocialNetWorks/>
        <SectionBlogs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
