import React, { Component } from 'react';

export default class SectionSocialNetworks extends Component {
  render(){
    return(
      <section className="network-content">
        <ul>
          <li>
            <a target="_blank" href="https://github.com/jessiezhudev">
              <div className="iconfont icon-github"></div>
              <div>Github</div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://stackoverflow.com/users/7508998/jessie-zhu?tab=profile">
              <div className="iconfont icon-stack-overflow"></div>
              <div>Stack overflow</div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://medium.com/@yudianzhu09">
              <div className="iconfont icon-medium"></div>
              <div>Medium</div>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}
