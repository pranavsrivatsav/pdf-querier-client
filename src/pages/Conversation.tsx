import styles from "./Conversation.module.css";
import ChatContainer from "../components/conversation/ChatContainer";
import Summary from "../components/conversation/Summary";
import TablesPreview from "../components/tables/TablesPreview";
import { sampleMarkdown, tables } from "../utils/sampleProps";
import { useAppSelector } from "../hooks";

function Conversation() {
  const fileName = useAppSelector((state) => state.file.fileName);

  return (
    <div className={styles.container}>
      <p className={styles.fileName}>{fileName}</p>
      <Summary title="Summary" content={sampleMarkdown} />
      <TablesPreview tables={tables} />
      <ChatContainer />
    </div>
  );
}

export default Conversation;
