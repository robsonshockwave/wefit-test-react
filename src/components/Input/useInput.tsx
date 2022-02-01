import { useState } from "react";

type Input = {
  userInsertItem: string;
  handleUserInsertItem: (event: any) => void;
  handleAddItem: () => void;
};

const useInput = (handleSetTodo: (value: string) => void): Input => {
  const [userInsertItem, setUserInsertItem] = useState<string>("");

  const handleUserInsertItem = (event: any) =>
    setUserInsertItem(event.target.value);

  const handleAddItem = () => {
    if (userInsertItem !== "") {
      handleSetTodo(userInsertItem);
    }
    setUserInsertItem("");
  };

  return {
    userInsertItem,
    handleUserInsertItem,
    handleAddItem,
  };
};

export default useInput;
