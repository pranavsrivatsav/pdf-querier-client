import React from "react";
import Modal from "../helperComponents/Modal";
import TableHTMLRenderer from "./TableHTMLRenderer";
import CustomButton from "../helperComponents/CustomButton";
import { TableContentResponse } from "../../types/api";
import styles from "./TableViewer.module.css";

interface TableViewerProps {
  isOpen: boolean;
  onClose: () => void;
  table: TableContentResponse;
}

const TableViewer: React.FC<TableViewerProps> = ({
  isOpen,
  onClose,
  table,
}) => {
  const handleDownload = () => {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      size="large"
      title={table.caption}
    >
      <TableHTMLRenderer htmlString={table.content} />
      <div className={styles.btnGrpContainer}>
        <CustomButton type="primary" size="small" onClick={handleDownload}>
          Download
        </CustomButton>
        <CustomButton type="black" size="small" onClick={onClose}>
          Close
        </CustomButton>
      </div>
    </Modal>
  );
};

export default TableViewer;
