import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

// Import components
import Navbar from './components/Navbar/Navbar';
import ProblemGenerationPage from './pages/ProblemGenerationPage';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Blog from './pages/BlogPage';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route exact path="/" element={<ProblemGenerationPage />} />
        <Route path="/problem-generator" element={<ProblemGenerationPage />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
