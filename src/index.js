import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './profile';
import App from './App';
import Summary from './summary';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';

const ResponsiveContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile />
    <App />
    <Summary />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
