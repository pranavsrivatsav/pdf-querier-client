import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusResponse, TableContentResponse, UploadResponse } from "../../types/api";

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
    setTable(state, action: PayloadAction<{ table: TableContentResponse }>) {
      if(!state.tables) return;

      //set the table in the tables array
      const tableIndex = state.tables.findIndex((table) => table.id === action.payload.table.id);
      state.tables[tableIndex] = action.payload.table;
    }
  },
});

export const { setFile, setProcessedData, setTable } = fileSlice.actions;

export default fileSlice.reducer;
