import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/paginas/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './components/paginas/cadastrousuario/CadastroUsuario';
import Home from './components/paginas/home/Home';
import SobreNos from './components/paginas/sobreNos/SobreNos';
import ContatoUsuario from './components/paginas/contato/Contato';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import TabPostagem from './components/postagens/tabpostagem/TabPostagem';
import ListaTema from './components/temas/listatema/ListaTema';

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastrousuario' element={<CadastroUsuario />} />
                <Route path='/SobreNos' element={<SobreNos />} />
                <Route path='/contatos' element={<ContatoUsuario />} />
                <Route path='/tabpostagem' element={<TabPostagem />} />
                <Route path='/temas' element={<ListaTema />} />
                <Route path='/postagem' element={<ListaPostagem />} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;
