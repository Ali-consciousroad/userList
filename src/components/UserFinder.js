import { Fragment, useState, useEffect, Component } from "react";
import Users from "./Users";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
class UserFinder extends Component {

    static contextType = UsersContext;  

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // Fetch the data and run only once
  componentDidMount(){
      // Send http request and update the state
      this.setState({ filteredUsers: this.context.users });
  }

  // Method used if the component is updated later
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm)
    this.setState({
      filteredUsers: this.context.users.filter((user) =>
        user.name.includes(this.state.searchTerm)
      ),
    });
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
