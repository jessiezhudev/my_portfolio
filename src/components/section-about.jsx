import React, { Component } from 'react';

export default class SectionAbout extends Component {
  render(){
    return(
      <section className="about-content">
        <div className="description">
          <div className="left">
            <h3>Hello,</h3>
            <h4>a bit about me:</h4>
          </div>
          <p className="right">
             I am currently working at naked Group as a front end developer.<br/>
           Having experience in building single page apps using React, Redux, React Router, LESS, Webpack.<br/>
         In my spare time, I like to study projects  in the front-end community and read books.<br/>
             Aim of building clean, responsive, more advanced JS.
          </p>
        </div>
      </section>
    )
  }
}
