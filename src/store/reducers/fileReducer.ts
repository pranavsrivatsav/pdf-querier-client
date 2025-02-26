import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadResponse } from "../../types/api";

interface FileState {
  fileName: string;
  file: File | null;
  uploadId: string | null;
}

const initialState: FileState = {
  fileName: "",
  file: null,
  uploadId: null,
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
  },
});

export const { setFile } = fileSlice.actions;

export default fileSlice.reducer;
