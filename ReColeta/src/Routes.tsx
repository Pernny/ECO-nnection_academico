// src/Routes.js
import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UserAreaPage } from './pages/UserAreaPage';

function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserAreaPage />} />
        {/* Define other routes as needed */}
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
