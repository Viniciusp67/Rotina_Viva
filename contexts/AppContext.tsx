
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { User, Event, AppContextType } from '../types';
import { DEFAULT_USER_AVATAR } from '../constants';

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialEvents: Event[] = [
  { id: '1', title: 'Visita ao Médico', description: 'Check-up anual', date: '2024-07-28', time: '10:00', imageUrl: 'https://picsum.photos/seed/medico/200/200' },
  { id: '2', title: 'Festa do Condomínio', description: 'Festa junina do condomínio', date: '2024-07-28', time: '19:00', imageUrl: 'https://picsum.photos/seed/festa/200/200' },
  { id: '3', title: 'Visita da Família', description: 'Almoço com a família', date: '2024-07-29', time: '13:00', imageUrl: 'https://picsum.photos/seed/familia/200/200' },
];

const mockUser: User = {
  id: 'user1',
  name: 'JOÃO PAULO',
  email: 'exemplo@gmail.com',
  avatarUrl: DEFAULT_USER_AVATAR,
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState<User | null>(mockUser);
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = useCallback((newEventData: Omit<Event, 'id'>) => {
    setEvents(prevEvents => [
      ...prevEvents,
      { ...newEventData, id: Date.now().toString() }
    ].sort((a, b) => new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()));
  }, []);

  return (
    <AppContext.Provider value={{ user, events, addEvent }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
