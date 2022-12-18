import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import ('../Containers/home'));
const Mint = React.lazy(() => import ('../Containers/mint'));

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Home />
        </React.Suspense>
        }
      />
      <Route path="/mint" element={
        <React.Suspense fallback={<span>...Loading</span>}>
          <Mint />
        </React.Suspense>
        }
      />
    </Routes>
  )
}
export default MyRoutes;