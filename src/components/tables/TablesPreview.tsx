import React from "react";
import styles from "./TablesPreview.module.css";
import CustomDropdown, { option } from "./CustomDropdown";
import TableHTMLRenderer from "./TableHTMLRenderer";
import TableButtons from "./TableButtons";
import { TableContentResponse } from "../../types/api";
import { useGetTableMutation } from "../../services/querier";
import Loader from "../helperComponents/loader";
import { useAppDispatch } from "../../hooks";
import { setTable } from "../../store/reducers/fileReducer";

interface TablesPreviewProps {
  tables: TableContentResponse[];
}

const TablesPreview: React.FC<TablesPreviewProps> = ({ tables }) => {
  const dispatch = useAppDispatch();
  
  //get table options
  const tableOptions = generateOptions(tables);
  
  //maintain selected table option in state and derive selected table from the selected table option
  const [selectedTableOption, setSelectedTableOption] = React.useState<option>(tableOptions[0]);
  const selectedTable = tables.find((table) => table.id === selectedTableOption.value) || tables[0];
  
  //state to maintain if all rows of table are shown
  const [showAll, setShowAll] = React.useState<boolean>(false);

  //mutation hook to fetch all rows of selected table
  const [getTableMutation, { isLoading: loadingTable }] = useGetTableMutation();

  const handleShowAll = (boolShow: boolean): void => {
    if (!boolShow) {
      setShowAll(false);
    } else {
      if(!selectedTable) return;

      //check if table row count is equal to the numbers of rows in table content
      if (selectedTable.rowCount === getRowCountFromTableHtml(selectedTable.content)) {
        setShowAll(true);
        return;
      }

      //else fetch all the rows of selected table and store it in selectedTable
      getTableMutation(selectedTable.id)
        .unwrap()
        .then((data) => {
          dispatch(setTable({ table: data }));
        })
        .catch((error) => {
          console.error(error);
        });
      setShowAll(true);
    }
  };

  const handleDownload = () => {};

  if(!tables) return null;

  return (
    <div className={styles.container}>
      <p className={styles.title}>Tables</p>
      <p className={styles.extractedCount}>{tables.length} Tables Extracted</p>
      <CustomDropdown options={tableOptions} selectedOption={selectedTableOption} setSelectedOption={setSelectedTableOption} />
      <TableHTMLRenderer htmlString={tables[0].content} rows={5} />
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

function getRowCountFromTableHtml(html: string): number {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const rows = doc.querySelector("tbody")?.querySelectorAll("tr");
  return rows?.length || 0;
}

export default TablesPreview;
