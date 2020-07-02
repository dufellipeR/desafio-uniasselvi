import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle, { Header, Title } from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <Header>
      <Title>Galeria de Artigos</Title>
    </Header>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
