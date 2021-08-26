import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from "./search";
import reportWebVitals from './reportWebVitals';

class Main extends React.Component{
  render(){
    return(
      <div className="container">
      <h1 className="title">Movie Explorer</h1>
      <Search/>
      </div>
    );
}
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
