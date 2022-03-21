import { Component } from 'react';        // Mandatory for class-based components
import classes from './User.module.css';

// Class based component
class User extends Component {
  // Applied to each component instance so displayed 3 times in the console 
  componentWillUnmount(){
    console.log('User will unmount!')
  }
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// FUNCTIONAL COMPONENT 
// props property comes automatically with function-based components 
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
