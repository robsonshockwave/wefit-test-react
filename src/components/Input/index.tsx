import addIcon from "../../assets/icons/ic-add@2x.png";
import { ContainerInput } from "./styles";
import useInput from "./useInput";

type Props = {
  handleSetTodoItem: (value: string) => void;
};

function Input({ handleSetTodoItem }: Props): JSX.Element {
  const { userInsertItem, handleUserInsertItem, handleAddItem } =
    useInput(handleSetTodoItem);

  return (
    <ContainerInput>
      <input
        type="text"
        value={userInsertItem}
        onChange={handleUserInsertItem}
        placeholder="Digite"
      />
      <button type="button" onClick={handleAddItem}>
        <img alt="add item" src={addIcon} />
      </button>
    </ContainerInput>
  );
}

export default Input;
