import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import ToDoSelect from "./ToDoSelect";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <ToDoSelect />
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
