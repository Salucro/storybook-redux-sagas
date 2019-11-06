import React, { ChangeEvent, useEffect } from "react";
import UserList from "./UserList";
import { connect } from "react-redux";
import { UserProps } from "./User";
import { fetchUsers, setSearchStr } from "../store/reducers/userReducer";

interface UserContainerProps {
  users: Array<UserProps>;
  searchStr: string;
  setSearchStr: ({ searchStr: string }) => void;
  fetchUsers: () => void;
}

const UsersContainer = (props: UserContainerProps) => {
  const { searchStr, fetchUsers } = props;

  useEffect(() => {
    if (!searchStr) {
      fetchUsers();
    }
  }, [searchStr, fetchUsers]);

  return (
    <div className="UsersContainer">
      <h1>UsersContainer</h1>
      <div className="UsersContainer__searchBar">
        <input
          value={searchStr}
          onChange={(event: ChangeEvent) =>
            props.setSearchStr({
              searchStr: (event.target as HTMLInputElement).value
            })
          }
        />
      </div>

      <UserList users={props.users} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.users.users,
  searchStr: state.users.searchStr
});

const mapDispatchToProps = {
  fetchUsers: fetchUsers,
  setSearchStr: setSearchStr
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
