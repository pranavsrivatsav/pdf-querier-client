export const htmlTableString = `
<table>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue ($M)</th>
      <th>Expenses ($M)</th>
      <th>Net Profit ($M)</th>
      <th>Growth (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Q1 2025</td>
      <td>50.2</td>
      <td>30.5</td>
      <td>19.7</td>
      <td>5.2%</td>
    </tr>
    <tr>
      <td>Q2 2025</td>
      <td>55.8</td>
      <td>32.1</td>
      <td>23.7</td>
      <td>11.2%</td>
    </tr>
    <tr>
      <td>Q3 2025</td>
      <td>60.3</td>
      <td>33.9</td>
      <td>26.4</td>
      <td>8.5%</td>
    </tr>
  </tbody>
</table>
`;

export const sampleMarkdown = `
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

export const tables = [
  {
    id: "1",
    caption: "Quarterly Revenue",
    type: "table",
    content: htmlTableString,
    rowCount: 20,
  },
  {
    id: "2",
    caption: "Customer Feedback",
    type: "table",
    content: htmlTableString,
    rowCount: 17,
  },
  {
    id: "3",
    caption: "Available Products",
    type: "table",
    content: htmlTableString,
    rowCount: 3,
  },
];
