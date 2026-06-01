import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home.jsx';
import Introduce from './pages/Introduce/Introduce.jsx';
import SkillsPortfolio from './pages/Skill/Skill.jsx';
import ProjectsPage from './pages/Product/Product.jsx';
import Certificates from './pages/Certificate/Certificates.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
           <Route path='/introduce' element={<Introduce />} />
           <Route path='/skill' element= {<SkillsPortfolio/>} />
           <Route path='/products' element= {<ProjectsPage/>}></Route>
           <Route path='/certificates' element= {<Certificates/>}></Route>
           <Route path='/contacts' element= {<Contact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}
export default App;