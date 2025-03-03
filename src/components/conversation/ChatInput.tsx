import { useState } from "react";
import styles from "./ChatInput.module.css";
import sendIcon from "../../assets/send.svg"

interface ChatInputProps {
  onSend: (message: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, inputRef }) => {
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
        ref={inputRef}
      />
      <button className={styles.sendButton}>
        <img className={styles.sendIcon} src={sendIcon} onClick={handleSend} alt="Send" />
      </button>
    </div>
  );
};

export default ChatInput;
