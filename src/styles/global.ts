import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --color-background: #FFFFFF;
    --color-grey-100: #333333;
  }

  body{
    background-color: var(--color-background);
    color: var(--color-grey-100);
    font-family: 'Inter', sans-serif;
  }

  a{
    text-decoration: none;
  }

  input,select{
    background: transparent;
    border: transparent;
  }

  button{
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: transparent;

    cursor: pointer;
  }

  ul,li{
    list-style: none;
  }
`;
