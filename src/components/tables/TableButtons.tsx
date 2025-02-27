import styles from "./TableButtons.module.css";
import TableViewer from "./TableViewer";
import CustomButton from "../helperComponents/CustomButton";
import { TableContentResponse } from "../../types/api";

type TableButtonsProps = {
  handleDownload: () => void;
  handleShowAll: (boolShow: boolean) => void;
  showAll: boolean;
  table: TableContentResponse;
};

const TableButtons: React.FC<TableButtonsProps> = ({
  handleDownload,
  handleShowAll,
  showAll,
  table,
}) => {
  return (
    <>
      <div className={styles.container}>
        {table.rowCount > 5 && (
          <CustomButton
            type="primary"
            onClick={() => handleShowAll(true)}
            size="small"
          >
            Show all rows
          </CustomButton>
        )}
        <CustomButton type="secondary" onClick={handleDownload} size="small">
          Download
        </CustomButton>
      </div>
      {showAll && (
        <TableViewer
          isOpen={showAll}
          onClose={() => handleShowAll(false)}
          table={table}
        />
      )}
    </>
  );
};

export default TableButtons;
