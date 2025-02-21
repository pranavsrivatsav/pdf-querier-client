import React from "react";
import styles from "./TablesPreview.module.css";
import CustomDropdown, { option } from "./CustomDropdown";

interface table {
  id: string;
  caption: string;
  type: string;
  content: string;
  rowCount: number;
}

interface TablesPreviewProps {
  tables: table[];
}

const TablesPreview: React.FC<TablesPreviewProps> = ({ tables }) => {
  const options = generateOptions(tables);
  return (
    <div className={styles.container}>  
      <p className={styles.title}>Tables</p>
      <p className={styles.extractedCount}>{tables.length} Tables Extracted</p>
      <CustomDropdown
        options={options}
        initialSelectedOption={options[0]}
      />
    </div>
  );
};

function generateOptions(tables: table[]): option[] {
  return tables.map((table, index) => {
    return {
      display:
        `Table ${index + 1}` + (table.caption ? ` - ${table.caption}` : ""),
      value: table.id,
    };
  });
}

export default TablesPreview;
