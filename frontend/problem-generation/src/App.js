import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

// Import components
import Navbar from './components/Navbar/Navbar';
import ProblemGenerationPage from './pages/ProblemGenerationPage';
import UploadPage from './pages/Upload';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route exact path="/" element={<ProblemGenerationPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/problem-generator" element={<ProblemGenerationPage />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
