import React, { Component } from 'react';
import './App.scss';
// import { PersistGate } from 'redux-persist/integration/react'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Header from './sharedModules/header'
import Footer from './sharedModules/footer'
// import { Store, persistor } from './Redux/Store';
import MyRoutes from "./Routes";

const App = () => {
  return (
    // store={Store}
    // <Provider >
    //   {/* persistor={persistor} */}
    //   <PersistGate loading={null}>
      
    //  </PersistGate>
    // </Provider>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;