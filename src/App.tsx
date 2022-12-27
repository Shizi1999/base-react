import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoute, privateRoute } from './routes';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoute.map((route, index) => {
            const { path, Component, Layout } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}

          {privateRoute.map((route, index) => {
            const { path, Component, Layout } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute>
                    <Layout>
                      <Component />
                    </Layout>
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
