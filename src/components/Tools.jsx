import React, { Component } from 'react';

const Tools = (props) => {
  return ( 
  <div className="row aling-items-center justify-content-between m-2">
    <button className="btn btn-secondary btn-sm" >DAYS</button>
    <button className="btn btn-secondary btn-sm" onClick={()=>props.addOne()} >+</button>
  </div>
 );
}
 
export default Tools;