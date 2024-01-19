import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import './index.css';
import App from './App';
import en from './assets/i18n/en.json';
import es from './assets/i18n/es.json';

i18n.use(initReactI18next).init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: en
    },
    es: {
      global: es
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
