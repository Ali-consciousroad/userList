import { Component } from 'react';
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

// Functionnal component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
