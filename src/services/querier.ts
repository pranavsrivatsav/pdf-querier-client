// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  UploadRequest,
  UploadResponse,
  StatusResponse,
} from "../types/api";

// Define a service using a base URL and expected endpoints
export const querierApi = createApi({
  reducerPath: "querierApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    uploadPdf: builder.mutation<UploadResponse, UploadRequest>({
      query: (body) => ({
        url: `upload`,
        method: "POST",
        body,
      }),
    }),
    getProcessingStatus: builder.mutation<StatusResponse, UploadResponse["id"]>({
      query: (id) => `status/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadPdfMutation, useGetProcessingStatusMutation } = querierApi;
