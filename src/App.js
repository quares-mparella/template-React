import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import Footer from './parts/Footer';
import Header from './parts/Header';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />

        </Routes>
      <Footer/>
    </>
  );
}

export default App;
