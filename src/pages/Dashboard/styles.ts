import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 720px;
  font-family: var(--fonte-padrao);
`;

export const Main = styled.main`
  margin: 2%;
`;

export const Artigo = styled.div`
  margin: 2%;

  &:hover {
    box-shadow: var(--hard-shadow);
  }

  a {
    display: flex;
    background: #fd0;
    color: #000;
    font-family: 'MetropolisBold';
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
    height: var(--button-size);
    line-height: 14px;

    &:hover {
      background: #fd4;
      color: #000;
      border: 1px solid rgba(0, 0, 0, 0.1);
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
