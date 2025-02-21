// ModalList.tsx
import styles from "./ModalList.module.css";
import { option } from "./CustomDropdown";

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
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.modalCloseButton} onClick={onClose}>
            &times;
          </button>
        </div>
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
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalList;
