import { useState } from "react";
import styles from "./ChatInput.module.css";
import sendIcon from "../../assets/send.svg"

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button className={styles.sendButton} onClick={handleSend}>
        <img className={styles.sendIcon} src={sendIcon} onClick={handleSend} alt="Send" />
      </button>
    </div>
  );
};

export default ChatInput;
