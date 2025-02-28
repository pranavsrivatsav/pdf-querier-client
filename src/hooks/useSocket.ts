import { useEffect, useState } from "react";
import { ChatMessage, UploadResponse } from "../types/api";
import { useAppDispatch, useAppSelector } from ".";
import { addChatMessage } from "../store/reducers/chatReducer";

const useSocket = (uploadId: UploadResponse["id"]) => {
  const dispatch = useAppDispatch();
  const {chats} = useAppSelector((state) => state.chat);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:3001/chat?uploadId=${uploadId}`);

    socket.onopen = () => console.log("Connected with ID:", uploadId);
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data) as ChatMessage;
      dispatch(addChatMessage(receivedMessage));
    };
    socket.onclose = () => console.log("Disconnected");

    setWs(socket);
    return () => socket.close();
  }, []);

  const handleSend = (message: string) => {
    if (ws) {
      ws.send(message);
    }
  };

  return {handleSend, chats}

};

export default useSocket;