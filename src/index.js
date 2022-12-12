import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.js';
import MarvelService from './services/MarvelService.js';
import './style/style.scss';

const marvelService = new MarvelService();

marvelService.getAllCharachters().then(res => res.data.results.forEach(item => console.log(item.name)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

