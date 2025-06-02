
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Header from '../components/Header';
import Button from '../components/Button';
import { AppRoutes } from '../constants';
import { ChevronDownIcon } from '../components/icons';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const [showVibrations, setShowVibrations] = useState(false);

  if (!user) {
    // Or redirect to login, for now just show loading/error
    return (
      <div className="flex flex-col h-screen">
        <Header title="Perfil" showBackButton />
        <div className="flex-grow p-6 text-center">Carregando perfil...</div>
      </div>
    );
  }

  const handleProfileSettings = () => {
    // navigate(AppRoutes.PROFILE_SETTINGS); // For future implementation
    alert('Configurações de Perfil (Não implementado)');
  };

  const handleVibrationSettings = () => {
    // navigate(AppRoutes.VIBRATION_SETTINGS); // For future implementation
    alert('Configuração de Vibração (Não implementado)');
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <Header title="" showBackButton />
      
      <div className="flex-grow overflow-y-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-brand-light-purple shadow-lg"
          />
          <h2 className="text-2xl font-bold text-brand-text">{user.name}</h2>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-xs font-medium text-brand-secondary-text">Email</label>
            <p className="text-md text-brand-text p-2 bg-gray-100 rounded">{user.email}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-brand-secondary-text">Senha</label>
            <p className="text-md text-brand-text p-2 bg-gray-100 rounded">**********</p>
          </div>
        </div>

        <div className="mb-8">
            <button 
                onClick={() => setShowVibrations(!showVibrations)}
                className="w-full flex justify-between items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left"
            >
                <span className="text-md font-medium text-brand-text">Vibrações salvas</span>
                <ChevronDownIcon className={`w-5 h-5 text-brand-secondary-text transition-transform ${showVibrations ? 'rotate-180' : ''}`} />
            </button>
            {showVibrations && (
                <div className="mt-2 p-3 bg-gray-100 rounded-lg shadow">
                    <p className="text-sm text-brand-secondary-text">Padrão 1</p>
                    <p className="text-sm text-brand-secondary-text mt-1">Padrão Curto</p>
                    <p className="text-sm text-brand-secondary-text mt-1">Silencioso</p>
                </div>
            )}
        </div>

        <div className="space-y-3">
          <Button onClick={handleProfileSettings} variant="secondary" fullWidth>
            Configurações de Perfil
          </Button>
          <Button onClick={handleVibrationSettings} variant="secondary" fullWidth>
            Configuração de vibração
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
