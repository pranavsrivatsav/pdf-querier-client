import Summary from "../components/conversation/Summary";
import UploadPDF from "../components/fileUpload/FileUpload";
import ProcessPdf from "../components/processing/ProcessPdf";
import ProgressBar from "../components/processing/ProgressBar";
import CustomDropdown from "../components/tables/CustomDropdown";
import TablesPreview from "../components/tables/TablesPreview";

const sampleMarkdown = `
### Financial Performance  
This quarter, revenue grew by **12%** compared to Q3, driven by strong sales in our core markets. Operating expenses remained stable, leading to an improved **profit margin of 18%**. Net income increased by **9%**, reflecting our ongoing cost optimization efforts.  

#### Operational Highlights  
- Successfully launched **two new product lines**, receiving positive customer feedback.  
- Expanded our market presence into **three new regions**, increasing our global footprint.  
- Optimized **supply chain logistics**, reducing delivery times by **15%**.  

#### Strategic Initiatives  
- Continued investment in **digital transformation**, enhancing customer experience and operational efficiency.  
- Strengthened partnerships with key industry players, fostering long-term growth opportunities.  
- Launched a **sustainability initiative** aimed at reducing our **carbon footprint by 20%** over the next two years.  

#### Outlook for Next Quarter  
Looking ahead, we anticipate **steady growth** as we capitalize on emerging market opportunities and enhance our product offerings. Our focus remains on **innovation, customer satisfaction, and sustainable business practices** to drive long-term success.  
`;

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
      <TablesPreview tables={[
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
      />
    </div>
  );
};

export default Home;
