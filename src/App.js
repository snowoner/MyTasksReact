import React from "react";
import MyTitle from "./components/MyTitle";
import MyHeader from "./components/MyHeader";
import Tools from "./components/Tools";
import AddTask from "./components/AddTask";
import MyCalendar from "./components/MyCalendar";

class App extends React.Component {
  state = {
    add: false,
    title: "",
    description: "",
    day: "",
    hour: "",
    minutes: "",
    priority: "",
    tasksList: []
  };
  handleClick = params => {
    this.setState({ add: true });
  };
  handleChange = (event) =>{
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  addDone = ()=>{
    this.setState({add:false})
  }
  addTask =() =>{
    const { title, description, day, hour, minutes, priority } = this.state;
    let newTask = {
      title,
      description,
      day,
      hour: hour+":"+minutes, 
      priority
    }
    console.log(newTask);
    let tasksList = [...this.state.tasksList];
    tasksList.push(newTask)
    this.setState({tasksList});
    this.resetState();
  }
  resetState = () =>{
    this.setState({title:""});
    this.setState({description:""});
    this.setState({day:""});
    this.setState({hour:""});
    this.setState({minutes:""})
    this.setState({priority:""})
  }
  render() {
    return (
      <div className="container aling-items-center justify-content-center text-center">
        <MyTitle />
        <MyHeader />
        <Tools addOne={this.handleClick} />
        {this.state.add ? (
          <AddTask data={this.state} handleChange={this.handleChange} addDone={this.addDone} addTask={this.addTask} />
        ) : (
          <MyCalendar data={this.state.tasksList} />
        )}
      </div>
    );
  }
}

export default App;
