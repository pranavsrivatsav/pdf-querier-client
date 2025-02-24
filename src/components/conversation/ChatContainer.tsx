import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import styles from "./ChatContainer.module.css";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = (message: string) => {
    const newMessage: ChatMessage = { id: Date.now(), text: message, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Hello! How can I help?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
