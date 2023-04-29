import ProblemGenerationPage from './pages/ProblemGenerationPage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<ProblemGenerationPage />} />
        <Route path='/problem-generator' element={<ProblemGenerationPage/>} />
        <Route path='/contact' element={<ProblemGenerationPage/>} />
        <Route path='/blogs' element={<ProblemGenerationPage/>} />
        <Route path='/sign-up' element={<ProblemGenerationPage/>} />
    </Routes>
    </Router>
);
}

export default App;
