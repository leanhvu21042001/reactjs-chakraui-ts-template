import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from './default-layout/Layout';

import Home from './pages/Home/Home';

export const RoutesWrapper = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export const BrowserRouterWrapper = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
};
