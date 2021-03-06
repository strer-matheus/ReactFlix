import React from 'react';
import Menu from './Components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{background: "#000000"}}>
      <Menu/>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end ?"}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}/>
      <Carousel
      category={dadosIniciais.categorias[2]}/>
      <Carousel
      category={dadosIniciais.categorias[3]}/>
    </div>
  );
}

export default App;
