import PageHome from './pages/PageHome'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
      <main>
        <Routes>
          <Route path='/' element={<PageHome />}/>
          <Route path='/servicos' element={<Servicos />}/>
        </Routes>
      </main>
        
    <h1>Atividade em Dupla - Bruno & Geovane</h1>
    <Footer/>
    
    </>
  )
}

export default App
