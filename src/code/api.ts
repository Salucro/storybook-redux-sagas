import axios from "axios";

export const fetchUserByUsername = username =>
  axios.get(`https://api.github.com/users/${username}`);

export const fetchAllUsers = () =>
  axios.get(`https://api.github.com/users`).catch(error => console.log(error));
