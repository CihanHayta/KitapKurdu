
import { BrowserRouter, Routes,Route, } from 'react-router-dom';

import Product from './pages/Product';
import Category from './pages/Category';
import Home from './pages/home';
import Baslik from './components/Header';
import Zemin from './components/Footer';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {


  return (

    <BrowserRouter>
    <div className="page">  
   <Baslik/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/ürünler" element={<Product/>} />
        <Route path="/kategori" element={<Category/>} />
        <Route path="/detay/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      <Zemin/>
      </div>
    </BrowserRouter>

  );
};

export default App;



