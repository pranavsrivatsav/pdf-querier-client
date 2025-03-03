import { useState } from "react";
import styles from "./ChatInput.module.css";
import sendIcon from "../../assets/send.svg"

interface ChatInputProps {
  onSend: (message: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>
  disabled: boolean
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, inputRef, disabled }) => {
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
        placeholder="Ask anything about the document..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        disabled={disabled}
        ref={inputRef}
      />
      <button className={styles.sendButton}>
        <img className={styles.sendIcon} src={sendIcon} onClick={handleSend} alt="Send" />
      </button>
    </div>
  );
};

export default ChatInput;
