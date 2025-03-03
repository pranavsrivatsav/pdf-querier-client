import React, { useState } from "react";
import styles from "./CustomDropdown.module.css";
import ModalList from "./ModalList";

export type option = {
  display: string;
  value: string | number;
};

interface CustomDropdownProps {
  options: option[];
  selectedOption: option;
  setSelectedOption: (option: option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (option: option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.container} onClick={toggleDropdown}>
        <span title={selectedOption.display} className={styles.display}>{selectedOption.display}</span>
        <div className={styles.arrow}>▼</div>
      </div>
      <ModalList
        title="Select an option"
        isOpen={isOpen}
        onClose={toggleDropdown}
        options={options}
        selectedOption={selectedOption}
        onSelect={onSelect}
      />
    </div>
  );
};

export default CustomDropdown;
