import 'react-calendar-heatmap/dist/styles.css';
// @ts-ignore
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer'
import { ThemeName } from './styles/themes';

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
    <BrowserRouter >
      <Header />
        
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo/>} />  
      </Routes>

      < Footer/>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
