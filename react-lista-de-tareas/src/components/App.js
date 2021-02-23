import "../styles/App.css";
import React from "react";
import UserList from "./UserList";
import TodoList from "./TodoList";

function App({ users }) {
  return (
      <>
        <UserList users={users} />
        <TodoList />
      </>
  );
}

export default App;