import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Main, Artigo } from './styles';
import destaque from '../../assets/destaque.png';
import data from '../../assets/lista_exemplos.json';

const Dashboard: React.FC = () => {
  const [artigos, setArtigos] = useState([]);

  const [authorTitle, setAuthorTitle] = useState('title');
  const [searchField, setSearchField] = useState('ARTIGOS');

  return (
    <Container>
      <Main>
        <h3>
          <img src={destaque} alt="" /> Artigos Destaque !
        </h3>
        <div
          id="filters"
          className="d-flex mb-1 col-md-12 justify-content-between"
        >
          <div className="filter-group">
            <div className="title-author">
              <label htmlFor="selectfilter" className="form-label">
                {' '}
                Autor/Título:
              </label>
              <select
                defaultValue={authorTitle}
                onChange={(e) => setAuthorTitle(e.target.value)}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="selectfilter"
              >
                <option value="title">Titulo</option>
                <option value="author">Autor</option>
              </select>
            </div>
            <div className="ordem">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Crescente
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Decrescente
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="searchField" className="form-label">
              Pesquisar:
            </label>
            <input
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              type="text"
              className="form-control form-control-sm"
              id="searchField"
              placeholder=""
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
                  aria-label="Destaque"
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
