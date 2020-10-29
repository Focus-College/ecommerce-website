import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './App.css';
import Images from "./images";

export default function App( props:{}){

  return(
    <div className="ecommerce">
      <BrowserRouter>
        <switch>
          <Route path="/" component={Homepage} />
        </switch>
      </BrowserRouter>
    </div>
  )
}