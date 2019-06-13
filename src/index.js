import React from 'react';
import ReactDOM,  { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import { combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/task-reducer';
import userReducer from './reducers/user-reducer';
import newTaskReducer from './reducers/newTask-reducer';

const allReducers = combineReducers({
  tasks: taskReducer,
  users: userReducer,
  newTask: newTaskReducer
})

const store = createStore(
  allReducers,
  {
    tasks: [
      {
        day: "2019-06-14",
        hour: "00:00",
        title: "Program",
        description: "Stay all day programming",
        priority: "moderate"
      },
      {
        day: "2019-06-07",
        hour: "12:00",
        title: "Fin Curso Ubiqum",
        description:
          "The curse finish with no title.. go asap to the corner...",
        priority: "important"
      },
      {
        day: "2019-06-08",
        hour: "13:55",
        title: "Learn React",
        description:
          "Try learn React.. it will help in your career..",
        priority: "normal"
      },
      {
        day: "2019-06-11",
        hour: "07:00",
        title: "Find a Job",
        description:
          "Try find your first Job.. keep trying until you got one!",
        priority: "important"
      },
      {
        day: "2019-09-11",
        hour: "12:40",
        title: "No job? Wtf Summer is here",
        description:
          "Go holidays with your friends!",
        priority: "normal"
      }
    ],
    users: {name:"Oscar"},
    newTask: {
      day: "",
      hour: "00",
      minutes:"00",
      title: "",
      description: "",
      priority: "normal"
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());

// const updateUserAction = {
//   type: "updateUser",
//   payload:{
//     user: "Dani"
//   }
// };

// store.dispatch(updateUserAction);
// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New State"
//   }
// };
// store.dispatch(action);


const routing = (
  <div>
    <Switch>
    <Route exact path="/" component={App} />
    </Switch>
  </div>
)

render(<Router><Provider store={store} >{routing}</Provider></Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
