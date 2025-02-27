import React, { useState } from "react";
import styles from "./CustomDropdown.module.css";
import ModalList from "./ModalList";

export type option = {
  display: string;
  value: string | number;
};

interface CustomDropdownProps {
  options: option[];
  initialSelectedOption: option;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  initialSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialSelectedOption || options[0]
  );

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
        <div className={styles.display}>{selectedOption.display}</div>
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
