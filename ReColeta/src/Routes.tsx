// src/Routes.js
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UserAreaPage } from './pages/UserAreaPage';
import { NewCollectPage } from './pages/NewCollectPage';
import { WastePage } from './pages/WastePage';

function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserAreaPage />} />
        <Route path="/newCollect" element={<NewCollectPage />} />
        <Route path="/waste" element={<WastePage />} />
        <Route path="/wasteRegister" element={<NewCollectPage />} />
        {/* Define other routes as needed */}
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
