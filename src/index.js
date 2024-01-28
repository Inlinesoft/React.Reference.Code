import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './app/store'
import Main from './pages/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));

function ref() {
  root.render(
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

//setInterval(ref, 1000);
ref()