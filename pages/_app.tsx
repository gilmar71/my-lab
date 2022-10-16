import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/fonts.css';

import { GlobalStyles } from '../styles/global';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
