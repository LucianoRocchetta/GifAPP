import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifApp} from './assets/components/GifApp';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GifApp />
    </BrowserRouter>
  </React.StrictMode>
)
