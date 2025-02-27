import React, { JSX } from "react";
import styles from "./TablesPreview.module.css";
import CustomDropdown, { option } from "./CustomDropdown";
import TableHTMLRenderer from "./TableHTMLRenderer";
import TableButtons from "./TableButtons";
import { TableContentResponse } from "../../types/api";
import { useGetTableMutation } from "../../services/querier";
import Loader from "../helperComponents/loader";

interface TablesPreviewProps {
  tables: TableContentResponse[];
}

const TablesPreview: React.FC<TablesPreviewProps> = ({ tables }) => {
  const [selectedTable, setSelectedTable] =
    React.useState<TableContentResponse>(tables[0]);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const [getTableMutation, { isLoading: loadingTable }] = useGetTableMutation();

  const handleShowAll = (boolShow: boolean): void => {
    if (!boolShow) {
      setShowAll(false);
    } else {
      getTableMutation(selectedTable.id)
        .unwrap()
        .then((data) => {
          setSelectedTable(data);
        })
        .catch((error) => {
          console.error(error);
        });
      setShowAll(true);
    }
  };

  const handleDownload = () => {};

  const options = generateOptions(tables);
  return (
    <div className={styles.container}>
      <p className={styles.title}>Tables</p>
      <p className={styles.extractedCount}>{tables.length} Tables Extracted</p>
      <CustomDropdown options={options} initialSelectedOption={options[0]} />
      <TableHTMLRenderer htmlString={tables[0].content} />
      {selectedTable.rowCount > 5 && (
        <p>and {selectedTable.rowCount - 5} more rows.</p>
      )}
      <TableButtons
        table={selectedTable}
        handleDownload={handleDownload}
        handleShowAll={handleShowAll}
        showAll={showAll}
      />
      {loadingTable && <Loader />}
    </div>
  );
};

function generateOptions(tables: TableContentResponse[]): option[] {
  return tables.map((table, index) => {
    return {
      display:
        `Table ${index + 1}` + (table.caption ? ` : ${table.caption}` : ""),
      value: table.id,
    };
  });
}

export default TablesPreview;
