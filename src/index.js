import React from 'react'
import { createRoot } from 'react-dom';
//import ReactDOM from 'react-dom';
import App from "./App" 
import { BrowserRouter } from 'react-router-dom';
import "./index.css"


//ReactDOM.render(<App/>, document.getElementById('root'))
createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);
