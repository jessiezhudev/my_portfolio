import React, { Component } from 'react';

export default class SectionSocialNetworks extends Component {
  render(){
    let networksList = [
      {
        icon: "",
        name: "Github"
      },
      {
        icon: "",
        name: "Stack overflow"
      },
      {
        icon: "",
        name: "Medium"
      }
    ];
    let networksHtml = networksList.map(function(item, index){
      return (
        <li key={index}>
          <div></div>
          <div>{item.name}</div>
        </li>
      )
    });
    return(
      <section className="network-content">
        <ul>
          {networksHtml}
        </ul>
      </section>
    )
  }
}
