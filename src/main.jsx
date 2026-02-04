import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client';
import CommandDemo from './comfolder/CommandMenu';


ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
  
    {/* <CommandDemo/> */}
  </BrowserRouter>,
)
