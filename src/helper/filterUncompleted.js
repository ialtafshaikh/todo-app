import { getStoredTodo } from "../taskData.js";
import { renderTodo } from "./renderTodo.js";

export const filterUncompleted = () => {
  const todos = getStoredTodo();
  const uncompletedTodos = todos.filter((todo) => {
    return todo.completed == false;
  });
  document.getElementById("todo-list").textContent = "";
  uncompletedTodos.forEach((todo) => {
    renderTodo(todo);
  });
};