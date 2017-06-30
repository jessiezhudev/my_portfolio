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
        <li>
          <div></div>
          <div>{item.name}</div>
        </li>
      )
    });
    return(
      <div>
        <ul>
          {networksHtml}
        </ul>
      </div>
    )
  }
}
