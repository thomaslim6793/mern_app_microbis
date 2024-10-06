// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact_us from './components/Contact_us/Contact_us';
import Dashboard from './components/Dashboard/Dashboard';

import Bacterial_identification from './components/Dashboard/Bacterial_identification/Bacterial_identification';
import EightPanelTest from './components/Dashboard/Bacterial_identification/8_panel_test';
import TwentyPanelTest from './components/Dashboard/Bacterial_identification/20_panel_test';

import AMR_tests from './components/Dashboard/AMR_tests/AMR_tests';
import MIC_classification from './components/Dashboard/AMR_tests/MIC_classification';
import Gene_classification from './components/Dashboard/AMR_tests/Gene_classification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard/bacterial-identification" element={<Bacterial_identification />} />
          <Route path="/dashboard/bacterial-identification/8-panel-test" element={<EightPanelTest />} />
          <Route path="/dashboard/bacterial-identification/20-panel-test" element={<TwentyPanelTest />} />
        <Route path="/dashboard/AMR-tests" element={<AMR_tests />} /> 
          <Route path="/dashboard/AMR-tests/mic-classification" element={<MIC_classification />} />
          <Route path="/dashboard/AMR-tests/gene-classification" element={<Gene_classification />} />
      </Routes>
    </Router>
  );
}

export default App;