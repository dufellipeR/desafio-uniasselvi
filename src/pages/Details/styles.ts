import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 4%;
  padding-right: 4%;

  h3 {
    text-align: center;
    font-family: var(--fonte-padrao);
  }
`;

export const Card = styled.div`
  max-width: 35rem;
  min-width: 25rem;
  min-height: 427px;
  padding: 2%;
  box-shadow: var(--hard-shadow);

  @media only screen and (max-width: 1200px) {
    min-width: 15rem;
  }

  #palavraChave {
    margin-top: 19px;
  }
  .card-footer {
    margin-top: 95px;

    @media only screen and (max-width: 1200px) {
      margin-top: 15px;
    }

    #buttonGroup {
      margin-top: 5px;
      @media only screen and (max-width: 1200px) {
      }
    }

    button {
      background: #fd0;
      color: #000;
      font-family: var(--fonte-padrao);

      & + a {
        margin-left: 36%;
        @media only screen and (max-width: 650px) {
          margin-left: 0;
          margin-top: 4%;
        }

        @media only screen and (min-width: 414px) and (max-width: 415px) {
          margin-left: 2%;
          margin-top: 0;
        }
      }
    }

    a {
      background: #fd0;
      color: #000;
      font-family: var(--fonte-padrao);
    }
  }

  .card-title {
    margin-bottom: 5%;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  min-width: 495px;

  @media only screen and (max-width: 1200px) {
    min-width: 100px;
    margin-top: 4%;
    margin-bottom: 2.5%;
  }

  h3 {
    margin-bottom: 5.5%;
  }

  span {
    & + span {
      &:before {
        content: ', ';
      }
    }
  }
`;
