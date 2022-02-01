import Empty from "../Empty";
import ListItem from "../ListItem";
import { ContainerList } from "./styles";

type Props = {
  todoItems: Array<string>;
  handleDeleteTodoItem: (value: string) => void;
};

function List({ todoItems, handleDeleteTodoItem }: Props): JSX.Element {
  return (
    <ContainerList>
      {todoItems.length ? (
        <ul>
          {todoItems.map((item: string, index: number) => (
            <ListItem
              handleDeleteTodoItem={handleDeleteTodoItem}
              item={item}
              key={index}
            />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </ContainerList>
  );
}

export default List;
