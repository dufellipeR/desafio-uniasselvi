import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import artigo1 from '../../assets/info_artigo-3.json';

import { Card, Container, Main, Info } from './styles';

const Details: React.FC = () => {
  // CODE

  return (
    <Container>
      <Main>
        <Card className="card">
          <div className="card-body">
            <h5 className="card-title">{artigo1.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {artigo1.autor.map((nome) => (
                <span>{nome}</span>
              ))}
            </h6>
            <p className="card-text">{artigo1.resumo}</p>
            <div className="card-footer">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </Card>
        <Info>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Programa: {artigo1.programa}</li>
            <li className="list-group-item">Área: {artigo1.area}</li>
            <li className="list-group-item">
              Autor(es):
              {artigo1.autor.map((nome) => (
              <span>{nome}</span>
            ))}
            </li>
            <li className="list-group-item">
              Data de Publicação: {artigo1.dataPublicacao}
            </li>
          </ul>
        </Info>
      </Main>
    </Container>
  );
};

export default Details;
