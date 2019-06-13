import React from "react";
import MyTitle from "./components/MyTitle";
import MyHeader from "./components/MyHeader";
import Tools from "./components/Tools";
import AddTask from "./components/AddTask";
import MyCalendar from "./components/MyCalendar";
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from './actions/user-actions';
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super();
  };
  state = {
    add: false,
    title: "",
    description: "",
    day: "",
    hour: "00",
    minutes: "00",
    priority: "important",
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
    // console.log(newTask);
    let tasksList = [...this.state.tasksList];
    tasksList.push(newTask)
    this.setState({tasksList});
    this.resetState();
  }
  resetState = () =>{
    this.setState({title:""});
    this.setState({description:""});
    this.setState({day:""});
    this.setState({hour:"00"});
    this.setState({minutes:"00"})
    this.setState({priority:"important"})
  }
  onUpdateUser = () => {
    this.props.onUpdateUser("SUperOscar");
  }
  render() {
    return (
      <div className="container aling-items-center justify-content-center text-center">
        <MyTitle />
        <MyHeader />
        <Tools addOne={this.handleClick} />
        <p>{this.props.user.name}</p>
        
        <button onClick={this.onUpdateUser}>Update User</button>
      
        {this.state.add ? <AddTask addDone={this.addDone} />:<MyCalendar />}
        <p>A PARTIR DE aqui es shiti</p>
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
    onUpdateUser: updateUser
  }, dispatch)
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
  return {
    user: propsFromState.user,
    task: propsFromState.tasks,
    onUpdateUser: propsFromDispatch.onUpdateUser
    };
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);