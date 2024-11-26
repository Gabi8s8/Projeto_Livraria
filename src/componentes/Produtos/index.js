import React from "react";
import './style.css';

const Produtos = () => {
    return (
      <section id="produtos">
        <div className="secao-produtos center">
          <h2 className="titulos">PRODUTOS</h2>
          <p>
            Descubra mundos novos em cada página e deixe sua imaginação voar! Em nossa livraria, oferecemos uma seleção cuidadosamente escolhida
            de livros que inspiram, emocionam e transformam.
          </p>

          <p>
            Explore nossas categorias e encontre sua próxima grande leitura!
          </p>

          <div className="livros-imgs">
            <div className="card-livros">
              <h3>Romance</h3>
              <picture>
                <img
                  src="./assets/TodoEsseTempo.jpg "
                  alt="genero-romance"
                ></img>
                <img
                  src="./assets/MelhorDoQueNosFilmes.jpg"
                  alt="genero-romance"
                ></img>
                <img
                  src="./assets/AHipoteseDoAmor.jpg"
                  alt="genero-romance"
                ></img>
              </picture>
            </div>

            <div className="card-livros">
              <h3>Suspense</h3>
              <picture>
                <img src="./assets/OsPrimos.jpg " alt="genero-suspense"></img>
                <img
                  src="./assets/AListaDeConvidados.jpg"
                  alt="genero-suspense"
                ></img>
                <img
                  src="./assets/APacienteSilenciosa.jpg"
                  alt="genero-suspense"
                ></img>
              </picture>
            </div>

            <div className="card-livros">
              <h3>Infanto-juvenil</h3>
              <picture>
                <img
                  src="./assets/OPequenoPrincipe.jpg "
                  alt="genero-juvenil"
                ></img>
                <img
                  src="./assets/MeuPeDeLaranjaLima.jpg"
                  alt="genero-juvenil"
                ></img>
                <img
                  src="./assets/Extraordinario.jpg"
                  alt="genero-juvenil"
                ></img>
              </picture>
            </div>

            <div className="card-livros">
              <h3>Fantasia</h3>
              <picture>
                <img
                  src="./assets/EraUmaVezUmCoracaoPartido.jpg "
                  alt="genero-fantasia"
                ></img>
                <img
                  src="./assets/OPrincipeCruel.jpg"
                  alt="genero-fantasia"
                ></img>
                <img
                  src="./assets/Estilhaca-me.jpg"
                  alt="genero-fantasia"
                ></img>
              </picture>
            </div>
          </div>
        </div>

        {/* <div className="lista-livros center">
          <p>Lendo livros você terá:</p>
          <ul>
            <li>Aumento do Conhecimento</li>
            <li>Melhora da Concentração</li>
            <li>Estimulação da Criatividade</li>
            <li>Desenvolvimento do Pensamento Crítico</li>
          </ul>
        </div> */}
      </section>
    );
}

export default Produtos;