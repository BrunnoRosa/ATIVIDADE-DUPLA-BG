import PageHome from './pages/PageHome'
import Servicos from './pages/Servicos'
import Produtos from './pages/Produtos'
import SobreNos from './pages/SobreNos'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <main>
        <Routes>
          <Route path='/' element={<PageHome />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/produtos' element={<Produtos />}/>
          <Route path='/sobrenos' element={<SobreNos />}/>
        </Routes>
      </main>
        
    <h1>Atividade em Dupla - Bruno & Geovane</h1>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
