import React, { useState, useEffect } from 'react';
import { FiDownload, FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import artigo1 from '../../assets/info_artigo-1.json';
import artigo2 from '../../assets/info_artigo-2.json';
import artigo3 from '../../assets/info_artigo-3.json';
import artigo4 from '../../assets/info_artigo-4.json';
import artigo5 from '../../assets/info_artigo-5.json';
import destaque from '../../assets/destaque.png';
import info from '../../assets/info.png';

import { Card, Container, Main, Info } from './styles';

interface Artigoparams {
  artigo: string;
}

interface Artigo {
  programa: string;
  area: string;
  projeto: string;
  titulo: string;
  autor: string[];
  dataPublicacao: string;
  resumo: string;
  palavrasChave: string;
  linkDownload: string;
}

const Details: React.FC = () => {
  const [artigo, SetArtigo] = useState<Artigo | null>(null);
  const { params } = useRouteMatch<Artigoparams>();

  const artigos = [artigo1, artigo2, artigo3, artigo4, artigo5];

  useEffect(() => {
    const query = params.artigo.slice(7, 8);
    SetArtigo(artigos[parseInt(query, 10) - 1]);
  }, []);

  return (
    <Container>
      {artigo && (
        <Main>
          <div>
            <h3>
              {' '}
              <img src={destaque} alt="" /> Artigo!
            </h3>
            <hr />
            <Card className="card">
              <div className="card-body">
                <h5 className="card-title">{artigo.titulo}</h5>
                <p className="card-text">{artigo.resumo}</p>

                <div className="card-footer">
                  <ul id="palavraChave" className="list-group list-group-flush">
                    <li className="list-group-item">
                      Palavras-Chave: {artigo.palavrasChave}
                    </li>
                    <li className="list-group-item"> </li>
                  </ul>
                  <div id="buttonGroup">
                    <button type="button" className="btn">
                      <FiDownload size={20} /> Download
                    </button>
                    <Link to="/" className="btn">
                      <FiChevronLeft size={20} /> Voltar Artigos
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <Info>
            <h3>
              {' '}
              <img src={info} alt="" /> Informações Adicionais
            </h3>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Programa: {artigo.programa}</li>
              <li className="list-group-item">Área: {artigo.area}</li>
              <li className="list-group-item">
                Autor(es):
                {artigo.autor.map((nome) => (
                <span key={nome}> {nome}</span>
              ))}
              </li>
              <li className="list-group-item">
                Data de Publicação: {artigo.dataPublicacao}
              </li>
            </ul>
          </Info>
        </Main>
      )}
    </Container>
  );
};

export default Details;
