import { useState, useEffect } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Fragment } from "react";

const DUMMY_USERS = [
  { id: "u1", name: "Ali" },
  { id: "u2", name: "Ehssan" },
  { id: "u3", name: "Yazdani" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
