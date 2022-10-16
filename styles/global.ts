import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

:root {
   --black: #000;
   --white: #fff;
}

html {
    scroll-behavior: smooth !important;
}

body {
    background-color: var(--black);
    color: var(--white);
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--yellow);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--theme-color-light);
}

*:focus {
    outline: transparent !important;
}

.error-message {
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;
}

a:hover,
button:hover {
    transition: 0.25s;
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}
p {
      line-height: 1.4;
    }

.container {
    max-width: 1380px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

  .show-mobile {
    display: none !important;
  }

  @media only screen and (max-width: 1600px) {
    html {
        font-size: 15.5px;
    }
    .container {
      max-width: 1330px;
    }
  }
  @media only screen and (max-width: 1400px) {
    html {
        font-size: 15px;
    }
    .container {
      max-width: 1150px;
    }
  }
  @media only screen and (max-width: 1200px) {
    html {
        font-size: 14.5px;
    }
    .container {
      max-width: 990px;
    }
    p {
      line-height: 1.3;
    }
  }
  @media only screen and (max-width: 1024px) {
    html {
        font-size: 14px;
    }
    .container {
      max-width: 870px;
    }
  }
@media only screen and (max-width: 900px) {
    .container {
      max-width: 735px;
    }
    .error-message {
    font-size: 12px;
    margin-top: 4px;
    padding-left: 10px;
   }
   p {
      line-height: 1.2;
    }
}
@media only screen and (max-width:768px) {
  html {
        font-size: 13.5px;
    }
  .container {
      max-width: 625px;
    }
}
@media only screen and (max-width: 650px) {
  .container {
      max-width: 495px;
  }
}

@media only screen and (max-width: 500px) {
    html {
        font-size: 13px;
    }
  }
`;
