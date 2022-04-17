import { Navigate, Route, Routes } from 'solid-app-router';
import { Component } from 'solid-js';
import { Card } from './pages/card';

const App: Component = () => {
  return (
    <div class={'container mx-auto'}>
      <Routes>
        <Route path={'/:id'} element={<Card />} />
        <Route path={'/404'} element={<div>Not Found</div>} />
        <Route path={'/*all'} element={<Navigate href={'/404'} />} />
      </Routes>
    </div>
  );
};

export default App;
