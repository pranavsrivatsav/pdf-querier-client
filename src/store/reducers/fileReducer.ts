import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusResponse, UploadResponse } from "../../types/api";

interface FileState {
  fileName: string;
  file: File | null;
  uploadId: string | null;
  tables: StatusResponse["tables"];
  summary: StatusResponse["summary"];
}

const initialState: FileState = {
  fileName: "",
  file: null,
  uploadId: null,
  tables: [],
  summary: "",
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFile(state, action: PayloadAction<{ file: File; uploadId: UploadResponse[`id`] }>) {
      state.file = action.payload.file;
      state.fileName = action.payload.file.name;
      state.uploadId = action.payload.uploadId;
    },
    setProcessedData(state, action: PayloadAction<{ processedData: StatusResponse }>) {
      state.tables = action.payload.processedData.tables;
      state.summary = action.payload.processedData.summary;
    },
  },
});

export const { setFile, setProcessedData } = fileSlice.actions;

export default fileSlice.reducer;
