import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    let navContent = ["HOME", "RESUME", "PROJECTS", "CONTACT"];
    let navListHtml = navContent.map(function(item, index){
      return <li key={index}>{item}</li>
    })
    return(
      <header className="header-content">
        <div className="name">
          <h1>
            <span>
              Jessie Zhu
            </span>
          </h1>
          <div className="subheader">Web Developer</div>
        </div>
        <nav className="navlist">
          <ul>
            {navListHtml}
          </ul>
        </nav>
      </header>
    )
  }
}
