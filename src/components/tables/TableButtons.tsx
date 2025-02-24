import { Table } from "./TablesPreview";
import styles from "./TableButtons.module.css";
import TableViewer from "./TableViewer";
import { useState } from "react";
import CustomButton from "../helperComponents/CustomButton";

const TableButtons: React.FC<{
  table: Table;
  handleDownload: () => void;
}> = ({ table, handleDownload }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <>
      <div className={styles.container}>
        {table.rowCount > 5 && (
          <CustomButton
            type="primary"
            onClick={toggleShowAll}
            size="small"
          >
            Show all rows
          </CustomButton>
        )}
        <CustomButton
          type="secondary"
          onClick={handleDownload}
          size="small"
        >
          Download
        </CustomButton>
      </div>
      {showAll && (
        <TableViewer
          isOpen={showAll}
          onClose={() => setShowAll(false)}
          table={table}
        />
      )}
    </>
  );
};

export default TableButtons;
