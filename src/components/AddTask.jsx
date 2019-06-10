import React, { Component } from "react";
import { Redirect } from 'react-router';
class AddTask extends Component {
  state = {};
  constructor(props) {
    super();
  }
  selectHour() {
    let hourList = [];
    for (let i = 0; i < 24; i++) {
      hourList.push(
        <option key={i} value={i < 10 ? "0" + i : i}>
          {i < 10 ? "0" + i : i}
        </option>
      );
    }
    return hourList;
  }
  selectMinutes() {
    let minutesList = [];
    for (let i = 0; i < 60; i++) {
      minutesList.push(
        <option key={i} value={i < 10 ? "0" + i : i}>
          {i < 10 ? "0" + i : i}
        </option>
      );
    }
    return minutesList;
  }
  selectPriority() {
    let priorityList = [];
    priorityList.push(
      <option key={0} value="important" className="text-danger">
        Important
      </option>
    );
    priorityList.push(
      <option key={1} value="nomral" className="text-secondary">
        Normal
      </option>
    );
    priorityList.push(
      <option key={2} value="moderate" className="text-warning">
        Moderate
      </option>
    );
    return priorityList;
  }
  checkForm = ()=>{
    const { title, description, day, hour, minutes, priority } = this.props.data;
    if(title==="" || description==="" || day==="" || hour==="" || minutes===""|| priority===""){
      alert("Please fill all fields")
    }
    else {
      this.props.addTask();
      this.props.addDone();
      this.setState({redirect: true});
    }
  }
  render() {
    const { title, description, day, hour, minutes, priority } = this.props.data;
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <div className="container card">
       
          <div className="row">
            <span className="col-4">Title:</span>
            <input
              className="col-8"
              name="title"
              type="text"
              value={title}
              onChange={this.props.handleChange}
              placeholder="Type The Title"
            />
          </div>
          <div className="row">
            <span className="col-4">Day:</span>
            <input 
              className="col-8"
              type="date"
              name="day"
              value={day}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="row">
            <span className="col-3">Hour:</span>
            <select name="hour" value={hour} onChange={this.props.handleChange} className="col-4">
              {this.selectHour()}
            </select>
            <select name="minutes" value={minutes} onChange={this.props.handleChange} className="col-4">
              {this.selectMinutes()}
            </select>
            <span>h</span>
          </div>
          <div className="row">
            <span className="col-5">Description:</span>
            <input
              className="col-7"
              type="text"
              value={description}
              onChange={this.props.handleChange}
              placeholder="what is this task about?"
              name="description"
            />
          </div>
          <div className="row">
            <span className="col-6">How important is this Task?</span>
            <select name="priority" value={priority} onChange={this.props.handleChange} className="col-6">
              {this.selectPriority()}
            </select>
          </div>
          <div className="row flex aling-items-center justify-content-center">
            <button id="newTask" onClick={this.checkForm}>
              Add My Task!
            </button>
          </div>
        
      </div>
    );
  }
}

export default AddTask;
