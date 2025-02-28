import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "../../types/api";
import { RESET_STORE } from "../middleware";

interface ChatState {
  chats: ChatMessage[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    resetChat() {
      return initialState;
    },
    addChatMessage(state, action: PayloadAction<ChatMessage>) {
      state.chats.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RESET_STORE, () => initialState);
  },
});

export const { addChatMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
