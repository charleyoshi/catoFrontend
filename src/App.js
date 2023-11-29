
import Footer from './component/Footer';
import Legal from './component/Legal';
import Navbar from './component/Navbar'
import Shorts from './component/Shorts';
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import Watch from './pages/Watch'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="shorts/:id" element={<Shorts />} />
            <Route path="watch" element={<Watch />} />
            
            <Route path="legal" element={<Legal />} target='_blank' />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

//Continue:
// 1. limit by scroll (e.g. 20 items a time)



  );
}

export default App;
