import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Nên dùng react-router-dom
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home.jsx';
import Introduce from './pages/Introduce/Introduce.jsx';

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio"> 
        <Routes>
          <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path='/introduce' element={<Introduce />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;