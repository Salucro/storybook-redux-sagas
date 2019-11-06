import React from "react";
import "./User.scss";

export interface UserProps {
  login: string;
  avatar_url: string;
  html_url: string;
}

const User = (props: UserProps) => (
  <div
    className="UserRow"
    onClick={() => window.open(props.html_url, "_blank")}
  >
    <p>{props.login}</p>
    <img src={props.avatar_url} height={40} width={40} alt={props.login} />
  </div>
);

export default User;
