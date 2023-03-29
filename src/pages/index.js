import { wrapper } from "./redux/reducers/store";
import Home from "./home";
import { Provider } from "react-redux";
import Head from "next/head";


const App = ({ Component, ...rest }) => {
  const { store } = wrapper.useWrappedStore(rest);
  return <>
    <Provider store={store}>
      <Home />
    </Provider>
  </>
}

export default App