import React, { Component } from 'react';

export default class Footer extends Component {
  render(){
    return(
      <footer>
        <div className="footer-content">
          <a href="mailto:yudianzhu10@hotmail.com">
            <div className="email">
              <div className="iconfont icon-email"></div>
            </div>
            <div>
              <p>Contact</p>
              <p>yudianzhu10@hotmail.com</p>
            </div>
          </a>
        </div>
      </footer>
    )
  }
}
