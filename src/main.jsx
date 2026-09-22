import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Each HTML page names its page in <body data-page>; only that page's code is loaded.
const pages = {
  home: () => import('./pages/Home.jsx'),
  stay: () => import('./pages/Stay.jsx'),
  'day-out': () => import('./pages/DayOut.jsx'),
  events: () => import('./pages/Events.jsx'),
  facilities: () => import('./pages/Facilities.jsx'),
  gallery: () => import('./pages/Gallery.jsx'),
  visit: () => import('./pages/Visit.jsx'),
};

const key = document.body.dataset.page || 'home';
pages[key]().then(({ default: Page }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  );
});
