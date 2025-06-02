
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import CreateEventScreen from './screens/CreateEventScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AppRoutes } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg font-sans">
        <Routes>
          <Route path={AppRoutes.SPLASH} element={<SplashScreen />} />
          <Route path={AppRoutes.HOME} element={<HomeScreen />} />
          <Route path={AppRoutes.CREATE_EVENT} element={<CreateEventScreen />} />
          <Route path={AppRoutes.PROFILE} element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to={AppRoutes.SPLASH} replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
