import React from "react";
import User, { UserProps } from "./User";

interface IUserListProps {
  users: Array<UserProps>;
}
const UserList = (props: IUserListProps) => {
  return (
    <React.Fragment>
      {props.users.map((user: UserProps) => (
        <User {...user} key={user.login} />
      ))}
    </React.Fragment>
  );
};

export default UserList;
