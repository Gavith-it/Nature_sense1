import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Each HTML page names its page in <body data-page>; only that page's code is loaded.
const pages = {
  home: () => import('./pages/Home.jsx'),
  stay: () => import('./pages/Stay.jsx'),
  packages: () => import('./pages/Packages.jsx'),
  'day-out': () => import('./pages/Packages.jsx'),
  events: () => import('./pages/Packages.jsx'),
  facilities: () => import('./pages/Facilities.jsx'),
  gallery: () => import('./pages/Gallery.jsx'),
  farmland: () => import('./pages/Farmland.jsx'),
  visit: () => import('./pages/Visit.jsx'),
  'options-preview': () => import('./pages/OptionsPreview.jsx'),
};

const key = document.body.dataset.page || 'home';
pages[key]().then(({ default: Page }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  );
});
