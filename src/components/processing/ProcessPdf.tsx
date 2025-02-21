import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import styles from "./ProcessPdf.module.css";

type ProcessPdfProps = {
    fileName: string;
    progress: number;
    onCompletion: () => void;
};

const ProcessPdf: React.FC<ProcessPdfProps> = ({fileName, progress, onCompletion}) => {

    useEffect(() => {
        if(progress === 100) {
            setTimeout(() => {
                onCompletion();
            }, 1000);
        }
    }, [progress]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Processing Pdf</div>
            <ProgressBar progress={progress} />
            <div className={styles.fileName}>{fileName}</div>
        </div>
    );
};

export default ProcessPdf;