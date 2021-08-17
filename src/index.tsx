import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {Navbar} from './components/navegacion/Navbar'
import 'bootswatch/dist/vapor/bootstrap.min.css'
import Users from './components/user/Users';
import HomeIndex from './components/home/index'

ReactDOM.render(
  <React.StrictMode>
 
    <BrowserRouter>
        <Navbar />
      <div className="container-fluid p-4">
      <Switch>

        <Route path="/usuarios" component={Users} />
        <Route path="/" component={HomeIndex} />


      </Switch>
      </div>
    
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
