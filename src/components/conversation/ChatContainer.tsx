import React from "react";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import styles from "./ChatContainer.module.css";
import { ChatMessage } from "../../types/api";

interface ChatContainerProps {
  chats: ChatMessage[];
  handleSend: (message: string) => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({handleSend, chats})  => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {chats.map((msg) => (
          <ChatBubble key={msg.id} message={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
