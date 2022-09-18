import React, { Component, Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'mobx-react';
import { Routes } from './router/router';
import { Spin } from 'antd';
import 'antd/dist/antd.less';
import './App.css';

function App(props) {
  return (
      <Provider {...props}>
          <RouterProvider router={Routes} fallbackElement={<Spin tip="Loading..." />} />
      </Provider>
  );
}

export default App;
