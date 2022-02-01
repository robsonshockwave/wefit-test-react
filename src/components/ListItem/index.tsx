import deleteIcon from "../../assets/icons/ic-delete@2x.png";
import { ContainerItem } from "./styles";

type Props = {
  handleDeleteTodoItem: (value: string) => void;
  item: string;
};

function ListItem({ handleDeleteTodoItem, item }: Props): JSX.Element {
  return (
    <ContainerItem>
      <span>{item}</span>
      <button type="button" onClick={() => handleDeleteTodoItem(item)}>
        <img src={deleteIcon} alt="deletar item" />
      </button>
    </ContainerItem>
  );
}

export default ListItem;
