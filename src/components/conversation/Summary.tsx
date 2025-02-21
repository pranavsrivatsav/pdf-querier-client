import React from "react";
import MarkdownRenderer from "../helperComponents/MarkdownRenderer";
import styles from "./Summary.module.css"

interface SummaryProps {
    title: string;
    content: string;
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <MarkdownRenderer markdown={content} />
        </div>
    );
};

export default Summary;