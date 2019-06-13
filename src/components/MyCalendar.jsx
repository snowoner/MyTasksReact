import React, { Component } from "react";
import Event from "./Event";
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class MyCalendar extends Component {
  state = {
  };
  constructor(props) {
    super(props);
  }
  orderByDay(a,b){
    let aDate = a.props.data.day.split("-");
    let bDate = b.props.data.day.split("-");
    if(aDate[0]<bDate[0]){
      return true;
    }
    else if(aDate[0]===bDate[0]){
      if(aDate[1]<bDate[1]){
        return true
      }
      else if(aDate[1]===bDate[1]){
        if(aDate[2]<bDate[2]){
          return true
        }
        else if(aDate[2]===bDate[2]){
          return a.props.data.hour < b.props.data.hour;
        }
      }
    }
    return false
  }
  render() {
    return (
      <div className="container row p-0 m-0">
        <h3 className="col-12">The calendar</h3>
        <div className="justify-content-center aling-items-center" />
        {this.props.tasks.map(event => {
          return <Event key={Math.random()} id={Math.random()} data={event} />;
        }).sort((a,b)=> {   
          if(this.orderByDay(a,b)){
            return -1
          }
          else return 1
          })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { //ahora puedes usar props..
     user: state.users,
     tasks: state.tasks
  }
};
const mapActionsToProps = (dispatch, props)=> {
  return bindActionCreators({ //ahora puedes usar props
    
  }, dispatch)
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
  return {
     user:propsFromState.users,
     tasks:propsFromState.tasks,
    // taskList: ownProps.taskList
    };
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(MyCalendar);
