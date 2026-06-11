import PageHome from './pages/PageHome'
import Servicos from './pages/PageRegister'
import Produtos from './pages/Produtos'
import SobreNos from './pages/SobreNos'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageRegister from './pages/PageRegister'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <main>
        <Routes>
          <Route path='/' element={<PageHome />}/>
          <Route path='/pageregister' element={<PageRegister />}/>
          <Route path='/produtos' element={<Produtos />}/>
          <Route path='/sobre-nos' element={<SobreNos />}/>
          <Route path='/cadastro' element={<PageRegister />}/>
        </Routes>
      </main>
        
    
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
