import React, { useState } from "react";

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    const task = document.querySelector("#tarea").value;
    setTodolist((prevState) => {
      todolist.push(task);
      return [...todolist];
    });

    document.querySelector("#tarea").value = "";
  };

  const handleDeleteTask = (index) => {
    setTodolist((prevState) => {
      return prevState.filter((task, i) => i != index);
    });
  };

  const handleCompletedTask = (index) => {
    setCompletedTasks((prevState) => [...prevState, todolist[index]]);
    handleDeleteTask(index);
  };

  return (
    <>
      <div>
        Tarea <input type="text" id="tarea" placeholder="Escriba una tarea" />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <h1>Lista de tareas pendientes ({todolist.length} en total)</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Eliminar</th>
            <th>Completar</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task}</td>
                <td>
                  <button onClick={() => handleDeleteTask(index)}>
                    Eliminar
                  </button>
                </td>
                <td>
                  <button onClick={() => handleCompletedTask(index)}>
                    Completar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <h1>Lista de tareas completadas ({completedTasks.length} en total)</h1>
        <ul>
          {completedTasks.map((completedTask, index) => {
            return <li key={index}>{completedTask}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
