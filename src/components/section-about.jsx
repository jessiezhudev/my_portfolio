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
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story and let your users get to know you.
          </p>
        </div>
      </section>
    )
  }
}
