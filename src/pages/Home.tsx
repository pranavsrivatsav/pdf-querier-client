import Summary from "../components/conversation/Summary";
import UploadPDF from "../components/fileUpload/FileUpload";
import ProcessPdf from "../components/processing/ProcessPdf";
import ProgressBar from "../components/processing/ProgressBar";
import CustomDropdown from "../components/tables/CustomDropdown";
import TablesPreview from "../components/tables/TablesPreview";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* <UploadPDF onUpload={(file) => console.log(file)} /> */}
      {/* <ProcessPdf fileName="sample.pdf" progress={50} onCompletion={() => console.log('Processing completed')} /> */}
      {/* <Summary title="Summary" content={sampleMarkdown} /> */}
      {/* <TablesPreview tables={[
        {
          id: "1",
          caption: "Quarterly Revenue",
          type: "table",
          content: "Revenue,Profit\n1000,200\n1500,300",
          rowCount: 2,
        },
        {
          id: "2",
          caption: "Customer Feedback",
          type: "table",
          content: "Customer,Rating\nAlice,5\nBob,4",
          rowCount: 2,
        },
        {
          id: "3",
          caption: "Available Products",
          type: "table",
          content: "Product,Price\nApple,1\nBanana,2\nCherry,3",
          rowCount: 3,
        }
      ]} 
      /> */}
    </div>
  );
};

export default Home;
