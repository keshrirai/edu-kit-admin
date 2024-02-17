import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { store } from './_helpers';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <LayoutProvider>
        <ToastContainer />
        <Provider store={store}>
          <App />
        </Provider>
      
  </LayoutProvider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
