import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Layouts
import MainLayout from 'src/components/layouts/main';

// Pages
import { Custom404Page, HelpPage, HomePage } from 'src/pages';

function RouterProvider() {
  return (
    <Router>
      <Routes>
        {/* Help */}
        <Route path="/help" element={<HelpPage />} />

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Auth layout */}
        <Route path="/auth" element={<MainLayout />}>
          <Route path="signup" element={<Custom404Page />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Custom404Page />} />
      </Routes>
    </Router>
  );
}

export default RouterProvider;
