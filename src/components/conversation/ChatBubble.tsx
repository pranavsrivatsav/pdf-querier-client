import styles from "./ChatBubble.module.css";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "bot";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
  return (
    <div className={`${styles.bubble} ${sender === "user" ? styles.user : styles.bot}`}>
      {message}
    </div>
  );
};

export default ChatBubble;
