import React, { useEffect } from "react";
import ProgressBar from "../components/processing/ProgressBar";
import styles from "./ProcessPdf.module.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useGetProcessingStatusMutation } from "../services/querier";
import { useNavigate } from "react-router-dom";
import { StatusResponse } from "../types/api";
import { setProcessedData } from "../store/reducers/fileReducer";

type ProcessPdfProps = {};

const ProcessPdf: React.FC<ProcessPdfProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fileName, uploadId } = useAppSelector((state) => state.file);

  const [progress, setProgress] = React.useState<number>(0);
  const [lastFetchFullfilledTimeStamp, setLastFetchFulfilledTimeStamp] =
    React.useState<number | null>(null);

  const [getProcessingStatusMutation, { isError: processingFailure }] =
    useGetProcessingStatusMutation();

  useEffect(() => {
    let timeoutId: number | null = null;

    //if uploadId is not present, navigate to upload page
    if (!uploadId) {
      navigate("/upload", { replace: true });
      return;
    }

    //if not already fetched, fetch the processing status
    if (!lastFetchFullfilledTimeStamp) {
      console.log("fetching status for the first time");
      fetchAndHandleProcessingStatus();
      return;
    } else {
      timeoutId = setTimeout(() => {
        console.log("fetching status again");
        fetchAndHandleProcessingStatus;
      }, 5000);
    }

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [uploadId, lastFetchFullfilledTimeStamp]);

  //navigating to conversation page when processing is finished
  useEffect(() => {
    if (progress === 100) {
      //navigate to conversation page
      //wait for 500ms to show the progress bar at 100%
      setTimeout(() => {
        navigate("/conversation", { replace: true });
      }, 800);
    }
  }, [progress]);

  return (
    <div className={styles.container}>
      <div className={styles.processingContainer}>
        <div className={styles.title}>Processing Pdf</div>
        <ProgressBar progress={progress || 0} />
        <div className={styles.fileName}>{fileName}</div>
      </div>
    </div>
  );

  function fetchAndHandleProcessingStatus() {
    uploadId &&
      getProcessingStatusMutation(uploadId)
        .unwrap()
        .then((response) => {
          handleProcessingStatus(response);
        });
  }

  //handle the processing status response
  function handleProcessingStatus(statusResponse: StatusResponse): void {
    //if the status is processing, set the progress to the progress value
    //if the status is finished, set the progress to 100
    //if the status is not processing or finished, set the progress to 0
    const progress =
      statusResponse?.status === "processing"
        ? statusResponse.progress
        : statusResponse?.status === "finished"
        ? 100
        : 0;
    //get relevant information from the response and store it in the redux store
    dispatch(setProcessedData({ processedData: statusResponse }));
    setProgress(progress || 0);
    setLastFetchFulfilledTimeStamp(Date.now());
  }
};

export default ProcessPdf;
