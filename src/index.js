import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GithubProvider from './store/github-context'

ReactDOM.render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById('root')
);

