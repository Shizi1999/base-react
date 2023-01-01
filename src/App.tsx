import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternalSever from './common/InternalSever';
import NotFound from './common/NotFound';

import { publicRoute, privateRoute } from './routes';
import PrivateRoute from './routes/PrivateRoute';
import routes from './routes/route';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={routes.notfound} element={<NotFound />} />

          <Route path={routes.internalSever} element={<InternalSever />} />
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
