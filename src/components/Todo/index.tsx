import Input from "../Input";
import List from "../List";
import { ContainerTodo } from "./styles";
import useTodo from "./useTodo";

function Todo(): JSX.Element {
  const { todoItems, handleSetTodoItem, handleDeleteTodoItem } = useTodo();

  return (
    <ContainerTodo>
      <Input handleSetTodoItem={handleSetTodoItem} />
      <List todoItems={todoItems} handleDeleteTodoItem={handleDeleteTodoItem} />
    </ContainerTodo>
  );
}

export default Todo;
