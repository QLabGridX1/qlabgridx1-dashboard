import React from 'react';
import ReactDOM from 'react-dom/client';
import ArcticThreatIntelDashboard from './ArcticThreatIntelDashboard';
import ArcticColdWarIISimulationTree from './ArcticColdWarIISimulationTree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ArcticThreatIntelDashboard />
    <ArcticColdWarIISimulationTree />
  </>
);
