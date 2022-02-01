import { useState } from "react";

type Todo = {
  todoItems: Array<string>;
  handleSetTodoItem: (value: string) => void;
  handleDeleteTodoItem: (item: string) => void;
};

const useTodo = (): Todo => {
  const [todoItems, setTodoItems] = useState<Array<string>>([]);

  const handleSetTodoItem = (value: string) => {
    setTodoItems([...todoItems, value]);
  };

  const handleDeleteTodoItem = (item: string) => {
    const newItems = [...todoItems];
    newItems.splice(todoItems.indexOf(item), 1);
    setTodoItems(newItems);
  };

  return {
    todoItems,
    handleSetTodoItem,
    handleDeleteTodoItem,
  };
};

export default useTodo;
