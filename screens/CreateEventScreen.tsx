
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import Header from '../components/Header';
import Button from '../components/Button';
import { AppRoutes, DEFAULT_USER_AVATAR } from '../constants';
import { UserCircleIcon, ClockIcon, CalendarIcon as CalendarInputIcon } from '../components/icons'; // Renamed to avoid conflict


const CreateEventScreen: React.FC = () => {
  const navigate = useNavigate();
  const { addEvent, user } = useAppContext();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Defaults to today
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })); // Defaults to current time HH:MM

  const handleSave = () => {
    if (title && date && time) {
      addEvent({ 
        title, 
        description, 
        date, 
        time, 
        imageUrl: `https://picsum.photos/seed/${title.replace(/\s+/g, '')}/200/200` 
      });
      navigate(AppRoutes.HOME);
    } else {
      alert("Por favor, preencha o título, data e hora.");
    }
  };

  const handleCancel = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <Header 
        title="Criar Evento" 
        showBackButton 
        rightContent={
          <button onClick={() => navigate(AppRoutes.PROFILE)} className="text-brand-purple hover:text-purple-700">
            {user?.avatarUrl ? (
              <img src={user.avatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full object-cover"/>
            ) : (
              <UserCircleIcon className="w-8 h-8" />
            )}
          </button>
        }
      />
      
      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        <div>
          <label htmlFor="eventTitle" className="block text-sm font-medium text-brand-text mb-1">
            Título do Evento
          </label>
          <input
            type="text"
            id="eventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Reunião de equipe"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-purple focus:border-brand-purple"
          />
        </div>

        <div className="bg-brand-text text-white p-4 rounded-lg shadow-md">
            <label className="block text-sm font-medium text-gray-300 mb-2">Horário</label>
            <div className="flex items-center justify-center space-x-2 mb-3">
                <input 
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-purple-700 text-white text-4xl font-mono p-3 rounded-md w-full text-center appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>
            <div className="flex justify-end space-x-3 text-sm">
                <button className="text-purple-300 hover:text-white" onClick={() => setTime('')}>Limpar</button>
                <button className="text-purple-300 hover:text-white" onClick={() => { /* Can add logic for OK here if needed */ }}>OK</button>
            </div>
        </div>
        
        <div className="bg-brand-text text-white p-4 rounded-lg shadow-md">
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
            Data do Evento
          </label>
           <div className="flex items-center relative">
            <CalendarInputIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                type="date"
                id="eventDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-500 bg-gray-700 text-white rounded-lg shadow-sm focus:ring-purple-400 focus:border-purple-400 appearance-none"
            />
           </div>
           <div className="flex justify-end space-x-3 text-sm mt-3">
                <button className="text-purple-300 hover:text-white" onClick={() => setDate('')}>Limpar</button>
                <button className="text-purple-300 hover:text-white">OK</button>
            </div>
        </div>

        <div>
          <label htmlFor="eventDescription" className="block text-sm font-medium text-brand-text mb-1">
            Descrição (Opcional)
          </label>
          <textarea
            id="eventDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Detalhes sobre o evento..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-purple focus:border-brand-purple"
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <Button onClick={handleCancel} variant="secondary" fullWidth>
            Cancelar
          </Button>
          <Button onClick={handleSave} variant="primary" fullWidth>
            Salvar Evento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventScreen;
