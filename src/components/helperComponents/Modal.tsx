import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
  size?: "small" | "medium" | "large" | "fit" | "fill";
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const {
    isOpen,
    onClose,
    children,
    title,
    size = "medium",
  } = props;

  if (!isOpen) return null;

  let modalContentStyle = styles.modalContent;
  modalContentStyle +=
    size === "large"
      ? ` ${styles.large}`
      : size === "small"
      ? ` ${styles.small}`
      : size === "fit"
      ? ` ${styles.fit}`
      : size === "fill"
      ? ` ${styles.fill}`
      : ` ${styles.medium}`;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {title && renderHeader()}
        {children}
      </div>
    </div>
  );

  function renderHeader() {
    return (
      <div className={styles.modalHeader}>{title && <h2>{title}</h2>}</div>
    );
  }
};

export default Modal;
