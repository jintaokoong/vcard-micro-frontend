import type { Component } from 'solid-js';
import { IoDownload, IoPersonCircle } from 'solid-icons/io';
import { Card } from './pages/card';

const App: Component = () => {
  return (
    <div class={'container mx-auto'}>
      <Card />
    </div>
  );
};

export default App;
