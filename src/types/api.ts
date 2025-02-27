export interface UploadResponse {
    id: string;
}

export interface StatusResponse {
    status: 'processing' | 'finished' | 'failed';
    tables?: TableSummary[];
    summary?: string;
    progress?: number;
    message?: string;
}

export interface TableSummary {
    id: string;
    caption: string;
    content: string; // HTML string with only the first 5 rows
    rowCount: number;
}

export interface TableContentResponse {
    id: string;
    caption: string;
    content: string; // HTML string with all rows
    rowCount: number;
}

export interface ChatIdResponse {
    chatId: string;
}

export interface QueryResponse {
    response: string;
}

export interface UploadRequest {
    file: File;
}

export interface QueryRequest {
    chatId: string;
    query: string;
}