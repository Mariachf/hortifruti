import React, {Component} from "react";
import './App.css';
import alface from './img/alface.png';
import beterraba from './img/beterraba.png';
import cenoura from './img/cenoura.png';
import cereja from './img/cereja.png';
import laranja from './img/laranja.png';
import limao from './img/limao.png';
import manga from './img/manga.png';
import tomate from './img/tomate.png';
import menos from './img/menos.png';
import mais from './img/mais.png';
import carrinho from './img/carrinho.png'
class App extends Component {
  state = {
    Hortifruti: [
      {imagem: `${alface}`, nome: "Alface"},
      {imagem: `${beterraba}`, nome: "Beterraba"},
      {imagem: `${cereja}`, nome: "Cereja"},
      {imagem: `${cenoura}`, nome: "Cenoura"},
      ],

      HortifrutiSegundo: [
      {imagem: `${laranja}`, nome: "Laranja"},
      {imagem: `${limao}`, nome: "Limão"},
      {imagem: `${manga}`, nome: "Manga"},
      {imagem: `${tomate}`, nome: "Tomate"}
      ]
  }



  render(){
    return(
      <div className="body">
       <section className="header">
        <h1>HORTIFRUTI</h1>
        <h3>VnW</h3>
       </section>
       <h2>Nossos Produtos</h2>

      <section className="main">
        <section className="produtos">
          
          <div class="img">
            {this.state.Hortifruti.map((item) =>(
                <div className='itensDisplay'>
                  <img className='itensImages' src={item.imagem} alt={item.nome}/>
                </div>
              ))}
          </div>
          <div class="img2">
            {this.state.HortifrutiSegundo.map((item) =>(
                <div className='itensDisplay2'>
                  <img className='itensImages2' src={item.imagem} alt={item.nome}/>
                </div>
              ))}
          </div>
          </section>

          <section className="carrinho">
            <div className="cont">
              <div className="car">
              <img className='carrinho1' src={carrinho} alt={carrinho}/>
              <p>Arraste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className="button">
              <img className='sinal1' src={mais} alt={carrinho}/>
              <img className='sinal2' src={menos} alt={carrinho}/>

              </div>
            </div>
            </section>
          </section>
          
       
      </div>   
    )
  }
}

export default App;