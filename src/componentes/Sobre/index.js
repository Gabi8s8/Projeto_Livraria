import React from 'react';
import './style.css';

const SecaoSobre = () => {
  return (
    <section id="sobre">
      <div className="sobre center">
        <h2>SOBRE NÓS</h2>
        <p>
          Fundada em 2022, em Caraguatatuba - São Paulo, a livraria iniciou suas
          atividades focando em incentivar a leitura para todos os públicos,
          sempre com o objetivo de proporcionar ao cliente um bom atendiemnto,
          qualidade e preço baixo.
        </p>
      </div>

      <div className="elementos-sobre">
        <picture>
          <img src="./assets/livraria.jpeg" alt="Nossa loja" />
        </picture>
      </div>

      <div className="texto-sobre primeiro-sobre">
        <h4>NOSSAS FILIAIS</h4>
        <p>Hoje temos mais de 10 filiais pelo Brasil.</p>
      </div>

      <div className="texto-elementos">
        <h4>ATENDIMENTO FLEXÍVEL</h4>
        <p>Mossa equipe é treinada para te atender da melhor forma possível</p>
      </div>

      <picture>
        <img src="./assets/atendimento.jpg" alt="Atendimento" />
      </picture>
    </section>
  );
};

export default SecaoSobre;
