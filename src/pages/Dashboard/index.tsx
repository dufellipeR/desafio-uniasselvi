/* eslint-disable no-lonely-if */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiCornerRightDown, FiCornerRightUp } from 'react-icons/fi';
import { Container, Main, Artigo } from './styles';
import destaque from '../../assets/destaque.png';
import data from '../../assets/lista_exemplos.json';

interface BasicArtigo {
  id: string;
  titulo: string;
  autor: string[];
  resumo: string;
}

const Dashboard: React.FC = () => {
  const [artigos, setArtigos] = useState<BasicArtigo[]>([]);
  const [filteredArtigos, setFilteredArtigos] = useState<BasicArtigo[]>([]);
  const [decrescente, setDecrescente] = useState(true);
  const [authorTitle, setAuthorTitle] = useState('title');
  const [searchField, setSearchField] = useState('');

  const sortArtigos = (): BasicArtigo[] => {
    return filteredArtigos.sort(function (a, b): number {
      console.log(decrescente);
      if (decrescente) {
        if (authorTitle === 'title') {
          if (a.autor[0] < b.autor[0]) {
            return 1;
          }
          if (a.autor[0] > b.autor[0]) {
            return -1;
          }
        } else {
          if (a.titulo < b.titulo) {
            return 1;
          }
          if (a.titulo > b.titulo) {
            return -1;
          }
        }
      } else {
        if (authorTitle === 'title') {
          if (a.autor[0] < b.autor[0]) {
            return -1;
          }
          if (a.autor[0] > b.autor[0]) {
            return 1;
          }
        } else {
          if (a.titulo < b.titulo) {
            return -1;
          }
          if (a.titulo > b.titulo) {
            return 1;
          }
        }
      }

      return 0;
    });
  };

  useEffect(() => {
    setArtigos(data);
    setFilteredArtigos(data);
    sortArtigos();
  }, []);

  const handleOrder = (): void => {
    if (decrescente) {
      setDecrescente(false);
    } else {
      setDecrescente(true);
    }
    sortArtigos();
  };

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
                onChange={(e) => {
                  setAuthorTitle(e.target.value);
                  sortArtigos();
                }}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="selectfilter"
              >
                <option value="title">Titulo</option>
                <option value="author">Autor</option>
              </select>
            </div>
            <div className="ordem">
              <button type="button" onClick={handleOrder}>
                {decrescente && (
                  <span>
                    Decrescente <FiCornerRightDown size={15} />
                  </span>
                )}
                {!decrescente && (
                  <span>
                    Crescente <FiCornerRightUp size={15} />
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="searchField" className="form-label">
              Pesquisar:
            </label>
            <input
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
                setFilteredArtigos(
                  artigos.filter((artigo) => {
                    if (artigo.titulo.includes(searchField.trim())) {
                      return artigo;
                    }
                    if (!searchField || searchField === '') {
                      return data;
                    }
                  }),
                );
              }}
              type="text"
              className="form-control form-control-sm"
              id="searchField"
              placeholder=""
            />
          </div>
        </div>

        <hr />
        {!filteredArtigos.length && (
          <Artigo className="card">
            <div className="card-header">
              <p>Nenhum Artigo Encontrado</p>
            </div>
            <div className="card-body">
              <h5 className="card-title"> Ops! </h5>
              <p id="notFound" className="card-text">
                {' '}
                Nenhum artigo foi encontrado com o campo de busca de "
                {searchField}"
              </p>
            </div>
          </Artigo>
        )}
        {!!filteredArtigos &&
          filteredArtigos.map((artigo) => (
            <Artigo key={artigo.id} className="card">
              <div className="card-header">
                {artigo.autor.map((nome) => (
                  <span>{nome}</span>
                ))}
              </div>
              <div className="card-body">
                <h5 className="card-title"> {artigo.titulo}</h5>
                <p className="card-text">
                  {artigo.resumo.length > 150 &&
                    `${artigo.resumo.substring(0, 150)} ... `}
                  {!(artigo.resumo.length > 150) && artigo.resumo}
                </p>
                <div className="d-flex justify-content-between align-items-center card-foot">
                  <Link to={`/details/${artigo.id}`} className="">
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
