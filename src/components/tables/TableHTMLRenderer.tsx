import React from "react";
import DOMPurify from "dompurify";
import styles from "./TableHTMLRenderer.module.css";

interface HtmlRendererProps {
  htmlString: string;
  rows?: number;
}

const TableHTMLRenderer: React.FC<HtmlRendererProps> = ({
  htmlString,
  rows,
}) => {
  let sanitizedHtml = DOMPurify.sanitize(htmlString);

  //if no of rows are specified, restrict the display to that number of rows
  if (rows) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(sanitizedHtml, "text/html");
    const tbody = doc.querySelector("tbody");
    tbody?.querySelectorAll("tr").forEach((tr, index) => {
      if (index >= rows) {
        tr.remove();
      }
    });
    sanitizedHtml = doc.body.innerHTML;
  }

  return (
    <div className={styles.tableContainer}>
      <div
        className={styles.table}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
};

export default TableHTMLRenderer;
