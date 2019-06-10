import React, { Component } from 'react';

const Event = (props) => {
 
  function setDate(params) {
    return new Date(params).toDateString();
  }
  // function formatDate(date){
  //   let myDate = date.split("-");
  //   return myDate[2]+ "/" + myDate[1] + "/" + myDate[0]
  // }

  function borderStyle(){
    let myBorder ="p-0 col-12 col-sm m-1 card border border-"
    switch (props.data.priority) {
      case 'nomral':
        myBorder+="secondary"
        break;
      case 'important':
        myBorder+="danger"
        break;
      case 'moderate':
        myBorder+="warning"
        break;
      default:
        myBorder+="dark"
    }
    let date = new Date();
    date = date.setDate(date.getDate() -1);
    let myDate = new Date(props.data.day);
    if(myDate<date){
      myBorder='p-0 col-12 col-sm m-1 card border striped'
    }
    return myBorder;
  }
  return ( 
    <div className={borderStyle()}>
        <span className="h4 text-center">"{props.data.title}"</span>
      <strong>{setDate(props.data.day)}</strong> <span>{props.data.hour}h</span>
      <p className="flex mt-3 text-center"><em>{props.data.description}</em></p>
    </div>
  );
}
 
export default Event;