import styles from "./Conversation.module.css";
import ChatContainer from "../components/conversation/ChatContainer";
import Summary from "../components/conversation/Summary";
import TablesPreview from "../components/tables/TablesPreview";
import { sampleMarkdown, tables } from "../utils/sampleProps";


type Props = {
  fileName: string;
};

function Conversation({ fileName }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.fileName}>{fileName = "quarterly-report-2024.pdf"}</p>
      <Summary title="Summary" content={sampleMarkdown} />
      <TablesPreview tables={tables} />
      <ChatContainer />
    </div>
  );
}

export default Conversation;
