import React from "react";
import MarkdownRenderer from "../helperComponents/MarkdownRenderer";
import styles from "./Summary.module.css";

interface SummaryProps {
  title: string;
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <MarkdownRenderer markdown={content} />
    </div>
  );
};

export default Summary;
