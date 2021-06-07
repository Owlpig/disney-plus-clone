import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './app/store';
import db from './firebase';
import {firestoreImport} from 'node-firestore-import-export';
import movies from './movieData.json';

const collection = db.collection('movies');

console.log(movies)

// firestoreImport(movies, collection)
//   .then(() => console.log('Data imported'))
//   .catch(err => console.error('Something went wrong', err.message))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
