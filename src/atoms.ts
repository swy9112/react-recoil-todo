import { atom, selector } from "recoil";

export enum Categories {
  all = "ALL",
  todo = "TODO",
  doing = "DOING",
  done = "DONE"
}

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: []
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.all
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return category === Categories.all
      ? toDos
      : toDos.filter((todo) => todo.category === category);
  }
});
