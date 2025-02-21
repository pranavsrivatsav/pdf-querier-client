import UploadPDF from '../components/FileUpload';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <UploadPDF onUpload={(file) => console.log(file)} />
    </div>
  );
};

export default Home;
