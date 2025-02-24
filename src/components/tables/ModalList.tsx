// ModalList.tsx
import styles from "./ModalList.module.css";
import { option } from "./CustomDropdown";
import Modal from "../helperComponents/Modal";
import CustomButton from "../helperComponents/CustomButton";

interface ModalListProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  options: option[];
  selectedOption: option;
  onSelect: (option: option) => void;
}

const ModalList = ({
  title,
  isOpen,
  onClose,
  options,
  selectedOption,
  onSelect,
}: ModalListProps) => {
  if (!isOpen) {
    return null;
  }

  const handleItemClick = (option: option) => {
    onSelect(option);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <ul className={styles.modalList}>
        {options.map((option) => {
          return (
            <li
              key={`listItem-${option.value}`}
              className={`${styles.modalListItem} ${
                selectedOption === option ? styles.selected : ""
              }`}
              onClick={() => handleItemClick(option)}
            >
              {option.display}
            </li>
          );
        })}
      </ul>
      <div className={styles.modalFooter}>
        <CustomButton type="black" size="small" onClick={onClose}>
          Cancel
        </CustomButton>
      </div>
    </Modal>
  );
};

export default ModalList;
