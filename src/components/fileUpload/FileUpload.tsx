import React, { useState, useRef, ChangeEvent, DragEvent, JSX } from "react";
import styles from "./FileUpload.module.css";
import CustomButton from "../helperComponents/CustomButton";
import uploadIcon from "../../assets/upload-icon.svg";

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setError(null);

    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (selectedFile.size > maxSize) {
      setError("File size exceeds 5MB limit.");
      return;
    }

    setFile(selectedFile);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <>
      <div
        className={styles.uploadContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".pdf"
          onChange={handleInputChange} // Use the new handler
        />

        <div className={styles.uploadContent}>
          <img
            src={uploadIcon}
            className={styles.uploadIcon}
            alt="Upload icon"
          />
          <div className={styles.uploadText}>
            Drag & Drop
            <br />
            or
          </div>
          <CustomButton type="black" onClick={handleFileInputClick}>
            Browse files
          </CustomButton>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
      {file && <div className={styles.fileName}>{file.name}</div>}
      {renderUploadButton()}
    </>
  );

  function renderUploadButton(): JSX.Element {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <CustomButton
          loading={false}
          type="primary"
          disabled={!file}
          onClick={() => {
            file && onUpload(file);
          }}
        >
          Upload
        </CustomButton>
      </div>
    );
  }
};

export default FileUpload;
