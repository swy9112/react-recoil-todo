import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDo = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }
    } = event;
    setToDo((prevToDos) => {
      const targetIndex = prevToDos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...prevToDos.slice(0, targetIndex),
        newTodo,
        ...prevToDos.slice(targetIndex + 1)
      ];

      // const newToDos = prevToDos.map((todo) => {
      //   if (todo.id === id) {
      //     todo.category = "DOING";
      //   }
      //   return todo;
      // });
      //return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.todo && (
        <button onClick={onClick} name="TODO">
          To Do
        </button>
      )}
      {category !== Categories.doing && (
        <button onClick={onClick} name="DOING">
          Doing
        </button>
      )}
      {category !== Categories.done && (
        <button onClick={onClick} name="DONE">
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
