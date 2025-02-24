import React from "react";
import DOMPurify from "dompurify";
import styles from "./TableHTMLRenderer.module.css"

interface HtmlRendererProps {
  htmlString: string;
}

const TableHTMLRenderer: React.FC<HtmlRendererProps> = ({ htmlString }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

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
