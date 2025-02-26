import React, { useEffect } from "react";
import ProgressBar from "../components/processing/ProgressBar";
import styles from "./ProcessPdf.module.css";
import { useAppSelector } from "../hooks";
import { useGetProcessingStatusMutation } from "../services/querier";
import { useNavigate } from "react-router-dom";

type ProcessPdfProps = {};

const ProcessPdf: React.FC<ProcessPdfProps> = ({}) => {
  const navigate = useNavigate();
  const { fileName, uploadId } = useAppSelector((state) => state.file);
  const [
    getProcessingStatusMutation,
    {
      isSuccess: processingSuccess,
      isError: processingFailure,
      isLoading,
      fulfilledTimeStamp,
      data: statusResponse,
    },
  ] = useGetProcessingStatusMutation();

  const progress =
    statusResponse?.status === "processing"
      ? statusResponse.progress
      : statusResponse?.status === "finished"
      ? 100
      : 0;

  //navigating to conversation page when processing is finished
  useEffect(() => {
    if (statusResponse?.status === "finished") {
      //navigate to conversation page
      //wait for 500ms to show the progress bar at 100%
      setTimeout(() => {
        navigate("/conversation");
      }, 500);
    }
  }, [statusResponse]);

  useEffect(()=>{
    console.log("effect ran")
  },[])

  useEffect(() => {
    if (!uploadId) navigate("/upload");
    else getProcessingStatusMutation(uploadId);
  }, [uploadId]);

  return (
    <div className={styles.container}>
      <div className={styles.processingContainer}>
        <div className={styles.title}>Processing Pdf</div>
        <ProgressBar progress={progress || 0} />
        <div className={styles.fileName}>{fileName}</div>
      </div>
    </div>
  );
};

export default ProcessPdf;
