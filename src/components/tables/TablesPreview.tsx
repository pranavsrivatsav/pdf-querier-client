import React, { JSX } from "react";
import styles from "./TablesPreview.module.css";
import CustomDropdown, { option } from "./CustomDropdown";
import TableHTMLRenderer from "./TableHTMLRenderer";
import TableButtons from "./TableButtons";

export interface Table {
  id: string;
  caption: string;
  type: string;
  content: string;
  rowCount: number;
}

interface TablesPreviewProps {
  tables: Table[];
}

const TablesPreview: React.FC<TablesPreviewProps> = ({ tables }) => {
  const [selectedTable, setSelectedTable] = React.useState<Table>(tables[0]);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
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
      />
    </div>
  );
};

function generateOptions(tables: Table[]): option[] {
  return tables.map((table, index) => {
    return {
      display:
        `Table ${index + 1}` + (table.caption ? ` : ${table.caption}` : ""),
      value: table.id,
    };
  });
}

export default TablesPreview;
