import './style/style.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// import App from './components/App';
// import SongList from './components/SongList';
// import SongCreate from './components/SongCreate';
// import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});


class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Test</div>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
