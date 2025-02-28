import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StatusResponse, TableContentResponse, UploadResponse } from "../../types/api";
import { RESET_STORE } from "../middleware";


interface FileMetadata {
  name: File["name"];
  size: File["size"];
  type: File["type"];
  lastModified: File["lastModified"];
  processed?: boolean;
}

interface FileState {
  fileName: string;
  file: FileMetadata | null;
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
      state.file = action.payload.file as FileMetadata;
      state.fileName = action.payload.file.name;
      state.uploadId = action.payload.uploadId;
    },
    setProcessedData(state, action: PayloadAction<{ processedData: StatusResponse }>) {
      if(state.file) state.file.processed = true;
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
  extraReducers: (builder) => {
    builder.addCase(RESET_STORE, () => initialState)
  }
});

export const { setFile, setProcessedData, setTable } = fileSlice.actions;

export default fileSlice.reducer;
