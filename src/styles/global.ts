import styled, { createGlobalStyle } from 'styled-components';
import metropolis from '../assets/metropolis-regular.ttf';
import metropolisBold from '../assets/metropolis-semibold.ttf';

export default createGlobalStyle`
  @font-face {
	font-family: "Metropolis";
	src: url(${metropolis});
	font-weight: normal;
 }
 @font-face {
	font-family: "MetropolisBold";
	src: url(${metropolisBold});
	font-weight: bold;
 }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--uni-l);
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font: 16px Roboto,sans-serif;
    }

    button {
      cursor: pointer
    }



  :root {
    --header-height: 80px;
    --footer-height: 100px;

    --uni-y: #ffdd00;
    --uni-b: #231f20;
    --uni-g: #595959;
    --uni-l: #fcfcfc;
    --uni-c: #00aea9;
    --verde: #32ba2b;
    --vermelho: #e74c3c;
    --accent: #eee;

    --max-width: 100%;
    --column-width: 800px;

    --button-size: 28px;

    --light-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --hard-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

    --fonte-padrao: "Metropolis", sans-serif;
  }
`;

export const Header = styled.header`
  background: var(--uni-y);
  height: var(--header-height);
  width: 100%;
  margin-bottom: 3%;
  padding: 2%;
`;
export const Title = styled.h1`
  font-size: 1.75rem;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 30px;
  font-family: 'MetropolisBold';
`;
