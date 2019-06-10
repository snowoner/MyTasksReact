import React, { Component } from "react";
import Event from "./Event";

class MyCalendar extends Component {
  state = {
    
    myCalendar: [
      {
        id: 100,
        day: "2019-06-14",
        hour: "00:00",
        title: "Program",
        description: "Stay all day programming",
        priority: "moderate"
      },
      {
        id: 101,
        day: "2019-06-07",
        hour: "12:00",
        title: "Fin Curso Ubiqum",
        description:
          "The curse finish with no title.. go asap to the corner...",
        priority: "important"
      },
      {
        id: 102,
        day: "2019-06-08",
        hour: "13:55",
        title: "Learn React",
        description:
          "Try learn React.. it will help in your career..",
        priority: "normal"
      },
      {
        id: 103,
        day: "2019-06-11",
        hour: "07:00",
        title: "Find a Job",
        description:
          "Try find your first Job.. keep trying until you got one!",
        priority: "important"
      },
      {
        id: 104,
        day: "2019-09-11",
        hour: "12:40",
        title: "No job? Wtf Summer is here",
        description:
          "Go holidays with your friends!",
        priority: "normal"
      }
    ]
  };
  constructor(props) {
    super(props)
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
        {this.props.data.map(event => {
          return <Event key={event} data={event} />;
        }).sort((a,b)=> {   
          if(this.orderByDay(a,b)){
            return -1
          }
          else return 1
          })}
        {this.state.myCalendar.map(event => {
          return <Event key={event.id} data={event} />;
        }).sort((a,b)=> {   
          if(this.orderByDay(a,b)){
            return -1
          }
          else return 1
          })
        }
      </div>
    );
  }
}

export default MyCalendar;
