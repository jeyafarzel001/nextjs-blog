import { AuthProvider } from '@/context/auth-context';
import '@/styles/globals.css';


const App = ({ Component, pageProps }) => {
  return <>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>
}

export default App