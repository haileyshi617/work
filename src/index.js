import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import ProjectDetail from './routes/ProjectDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />}></Route>
          <Route path='projects/:id' element={<ProjectDetail />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
