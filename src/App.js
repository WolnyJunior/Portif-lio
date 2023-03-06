import React from 'react';
import Header from './Header';
import './App.css';
import Intro from './Intro';
import Sorin from './Sorin'

function App() {
  return (
    <div>
      <Header name="SJr" links={["Sobre", "Portfólio", "Contatos"]}></Header>
      <div className='text-center'>
              <Intro ola="Olá, eu sou o" intro="Sou Desenvolvedor Web"></Intro>
      </div>
      
    </div>
  );
}

export default App;
