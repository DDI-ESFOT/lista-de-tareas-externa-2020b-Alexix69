import React, { useState } from "react";

const UserList = ({ users }) => {
  const [usersList, setUsersList] = useState(users);

  const formatName = (user) => {
    return `${user.name} ${user.lastname}`;
  };

  const handleAddUser = () => {
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const newUser = {
      name: name,
      lastname: lastname,
    };

    setUsersList((prevState) => {
      return [...prevState, newUser];
    });

    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
  };

  const handleRemoveUser = () => {
    setUsersList(() => {
      usersList.splice(usersList.length - 1);
      return [...usersList];
    });
  };

  return (
    <>
      <div>
        Nombre <input id="name" placeholder="Ingrese un nombre" />
        Apellido <input id="lastname" placeholder="Ingrese un apellido" />
        <button onClick={handleAddUser}>Agregar usuario</button>
        <button onClick={handleRemoveUser}>Eliminar último usuario</button>
      </div>
      <div>
        <h1>Lista de usuarios ({usersList.length} en total)</h1>
        <ul>
          {usersList.map((user, index) => {
            return <li key={index}>{formatName(user)}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default UserList;
