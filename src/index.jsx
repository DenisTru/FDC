import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <img alt="hello world animated" />
    </div>
  );
}

root.render(<App />);
