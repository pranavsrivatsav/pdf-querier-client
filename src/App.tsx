import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './pages/Upload';
import "./App.css"
import Conversation from './pages/Conversation';
import { Provider } from 'react-redux';
import store from './store';
import ProcessPdf from './pages/ProcessPdf';

function App() {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/process" element={<ProcessPdf />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
