import React, { Component } from "react";
import { Redirect } from 'react-router';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/task-actions';
import { addNewTask } from '../actions/newTask-actions';
class AddTask extends Component {
  state = {};
  constructor(props) {
    super(props);
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
    const { title, description, day, hour, minutes, priority } = this.props.newTask;
    // if(title==="" || description==="" || day==="" || hour==="" || minutes===""|| priority===""){
    //   alert("Please fill all fields")
    // }
    // else {
      this.props.onAddTask();
     
      this.setState({redirect: true});
    // }
  };
  cleanNewTask =() =>{
    let newTask= {
      title:"", description:"", day:"", hour:"00", minutes:"00", priority:"normal"
    }
    this.props.onAddNewTask(newTask);

  };

  onAddTask = () => {
    this.props.onAddTask(this.props.newTask);
    this.props.addDone();
    this.cleanNewTask();
    this.setState({redirect: true});

  };
  onAddNewTask = () =>{
    let title=document.getElementById('title').value;
    let day=document.getElementById('day').value;
    let hour=document.getElementById('hour').value;
    let minutes=document.getElementById('minutes').value;
    let description=document.getElementById('description').value;
    let priority=document.getElementById('priority').value;

    let newTask= {
      title, description, day, hour:hour+":"+minutes, priority
    }
    this.props.onAddNewTask(newTask);
  };

  render() {
    // console.log(this.props);
    
    const { title, description, day, hour, minutes, priority } = this.props.newTask;
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
              id='title'
              type="text"
              value={title}
              onChange={() =>this.onAddNewTask()}
              placeholder="Type The Title"
            />
          </div>
          <div className="row">
            <span className="col-4">Day:</span>
            <input 
              className="col-8"
              type="date"
              id="day"
              name="day"
              value={day}
              onChange={() =>this.onAddNewTask()}
            />
          </div>
          <div className="row">
            <span className="col-3">Hour:</span>
            <select name="hour" value={hour} id="hour" onChange={() =>this.onAddNewTask()} className="col-4">
              {this.selectHour()}
            </select>
            <select name="minutes" value={minutes} id="minutes" onChange={() =>this.onAddNewTask()} className="col-4">
              {this.selectMinutes()}
            </select>
            <span>h</span>
          </div>
          <div className="row">
            <span className="col-5">Description:</span>
            <input
              className="col-7"
              type="text"
              id="description"
              value={description}
              onChange={() =>this.onAddNewTask()}
              placeholder="what is this task about?"
              name="description"
            />
          </div>
          <div className="row">
            <span className="col-6">How important is this Task?</span>
            <select name="priority" value={priority} id="priority" onChange={() =>this.onAddNewTask()} className="col-6">
              {this.selectPriority()}
            </select>
          </div>
          <div className="row flex aling-items-center justify-content-center">
            <button id="newTask" onClick={this.onAddTask}>
              Add My Task!
            </button>
          </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return { //ahora puedes usar props..
     user: state.users,
     tasks: state.tasks,
     newTask: state.newTask
  }
};
const mapActionsToProps = (dispatch, props)=> {
  return bindActionCreators({ //ahora puedes usar props
    onAddTask: addTask,
    onAddNewTask: addNewTask
  }, dispatch)
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
  return {
     user: propsFromState.users,
     tasks: propsFromState.tasks,
     newTask: propsFromState.newTask,
     data: ownProps.data,
     onAddTask: propsFromDispatch.onAddTask,
     onAddNewTask: propsFromDispatch.onAddNewTask,
     addDone: ownProps.addDone
    // taskList: ownProps.taskList
    };
}

export default connect(mapStateToProps, mapActionsToProps,mergeProps)(AddTask);
