import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    // Important: In class based component, state is always an object
    /* In class bases components, states need to be regrouped in an object
      and this is not optional even if they are not related */
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    // Not the way to update the state
    // this.state.showUsers = false;
    // Right way to update the state
    // We pass an object so now we have to return an object
    /* setState() doesn't overwrite the state but update it 
      contratry to useState() used with functional comp. */
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {/* Access showUsers property from this.state object */}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     // Update the state
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

// return (
//   <div className={classes.users}>
//     <button onClick={toggleUsersHandler}>
//       {showUsers ? 'Hide' : 'Show'} Users
//     </button>
//     {showUsers && usersList}
//   </div>
// );
// };

export default Users;
