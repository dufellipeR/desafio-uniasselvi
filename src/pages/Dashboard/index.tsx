import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Main, Artigo } from './styles';
import destaque from '../../assets/destaque.png';
import searchIcon from '../../assets/search.png';
import data from '../../assets/lista_exemplos.json';

const Dashboard: React.FC = () => {
  // CODE

  return (
    <Container>
      <Main>
        <div className="d-flex justify-content-between">
          <h3>
            <img src={destaque} alt="" /> Artigos Destaque !
          </h3>
          <div className="d-flex mb-4 col-md-4 justify-content-around">
            <button type="button" className="btn btn-outline-dark col-md-1">
              <FiSearch size={25} />
            </button>
            <input
              type="text"
              className="form-control col-md-2"
              id="searchField"
              placeholder="Pesquisar"
            />
          </div>
        </div>
        <hr />

        {data.map((artigo) => (
          <Artigo key={artigo.id} className="card">
            <div className="card-header">
              {artigo.autor.map((nome) => (
                <span>{nome}</span>
              ))}
            </div>
            <div className="card-body">
              <h5 className="card-title"> {artigo.titulo}</h5>
              <p className="card-text">{artigo.resumo}</p>
              <div className="d-flex justify-content-between align-items-center card-foot">
                <Link to={`/details/${artigo.id}`} className="btn btn-primary">
                  <FiPlus size={15} /> Leia Mais
                </Link>
                <button
                  data-toggle="popover"
                  title="Destaque"
                  type="button"
                  className="btn btn-outline-light"
                >
                  <img src={destaque} alt="" />
                </button>
              </div>
            </div>
          </Artigo>
        ))}
      </Main>
    </Container>
  );
};

export default Dashboard;
