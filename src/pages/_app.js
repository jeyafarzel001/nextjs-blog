import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
  console.log("pageProps", pageProps);
  return <>
    <Component {...pageProps} />
  </>
}

export default App