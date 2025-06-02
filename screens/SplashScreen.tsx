
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, APP_NAME } from '../constants';
import Button from '../components/Button';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div 
      className="h-screen flex flex-col items-center justify-between p-8 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/splashbg/720/1280')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="z-10 text-center mt-16">
        {/* Placeholder for logo or app name */}
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{APP_NAME}</h1>
        {/* <img src="/path-to-logo.png" alt="Rotina Viva Logo" className="w-32 h-32 mx-auto" /> */}
      </div>

      <div className="z-10 w-full max-w-xs text-center">
        <p className="text-white text-lg mb-6 drop-shadow-md">Organize sua rotina de forma vibrante.</p>
        <Button onClick={handleBegin} variant="primary" size="lg" fullWidth className="bg-white text-brand-purple hover:bg-gray-200">
          Deslize para cima
        </Button>
        <p className="text-xs text-gray-300 mt-2 italic">(Clique para começar)</p>
      </div>
    </div>
  );
};

export default SplashScreen;
