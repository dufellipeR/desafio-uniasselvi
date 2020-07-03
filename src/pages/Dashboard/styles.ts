import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 720px;
  max-height: 576px;
  font-family: var(--fonte-padrao);
`;

export const Main = styled.main`
  margin: 2%;

  h3 {
    font-size: 1.25rem;
    text-align: center;
  }

  label {
    font-size: 0.8rem;
  }

  #filters {
    @media only screen and (max-width: 1200px) {
      justify-content: center;
      .filter-group {
        visibility: hidden;
      }

      .form-group {
        flex: 12;
      }
    }

    .filter-group {
      display: flex;
      justify-content: space-between;
      width: 210px;

      .ordem {
        display: flex;
        align-items: flex-end;

        button {
          outline: 0;
          background: transparent;
          border: 0 !important;
          font-size: 0.9rem;
          line-height: 35.5px;
          font-family: var(--fonte-padrao);
        }
      }
    }
  }
`;

export const Artigo = styled.div`
  margin: 2%;

  @media only screen and (max-width: 1200px) {
    #notFound {
      min-width: 200px;
    }
  }

  #notFound {
    min-width: 1199px;
  }
  @media only screen and (max-width: 1200px) {
    #notFound {
      min-width: 200px;
    }
  }

  &:hover {
    box-shadow: var(--light-shadow);
  }

  h5 {
    font-family: 'MetropolisBold';
  }

  a {
    outline: 0;
    text-decoration: none;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fd0;
    color: #000;
    font-family: 'MetropolisBold';
    transition: 0.2s;
    height: 32px;
    width: 115px;
    line-height: 14px;

    &:hover {
      background: #fd4;
      color: #000;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0;
    }
  }

  div {
    span {
      & + span {
        &:before {
          content: ', ';
        }
      }
    }
  }
`;
