import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Home from './components';
import store from './rootReducer';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
