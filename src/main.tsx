import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import "./assets/scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
