import { useEffect, useRef } from "react";
import FileUpload from "../components/fileUpload/FileUpload";
import styles from "./Upload.module.css";
import { useUploadPdfMutation } from "../services/querier";
import Loader from "../components/helperComponents/loader";
import { setFile } from "../store/reducers/fileReducer";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uploadedFileRef = useRef<File | null>(null);

  const [
    uploadPdfMutation,
    {
      isLoading: pdfUploading,
      isError: pdfUploadError,
      isSuccess: pdfUploadCompleted,
      data: pdfUploadData,
    },
  ] = useUploadPdfMutation();

  useEffect(() => {
    //navigate to processing page
    if (uploadedFileRef.current && pdfUploadCompleted) {
      dispatch(
        setFile({ file: uploadedFileRef.current, uploadId: pdfUploadData?.id })
      );
      navigate("/process");
    }
  }, [pdfUploadCompleted]);

  return (
    <div className={styles.container}>
      {!pdfUploadCompleted && <FileUpload onUpload={onUpload} />}
      {pdfUploading && <Loader />}
    </div>
  );

  function onUpload(file: File) {
    uploadedFileRef.current = file;
    uploadPdfMutation({ file });
  }
};

export default Upload;
