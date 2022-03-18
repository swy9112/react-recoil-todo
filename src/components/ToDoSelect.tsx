import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function ToDoSelect() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.all}>All</option>
      <option value={Categories.todo}>Todo</option>
      <option value={Categories.doing}>Doing</option>
      <option value={Categories.done}>Done</option>
    </select>
  );
}

export default ToDoSelect;
