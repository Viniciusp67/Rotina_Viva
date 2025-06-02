
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import EventListItem from '../components/EventListItem';
import FloatingActionButton from '../components/FloatingActionButton';
import Header from '../components/Header';
import { AppRoutes, DEFAULT_USER_AVATAR } from '../constants';
import { CalendarIcon, EllipsisVerticalIcon, UserCircleIcon } from '../components/icons';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { events, user } = useAppContext();

  const handleCreateEvent = () => {
    navigate(AppRoutes.CREATE_EVENT);
  };

  const handleProfileClick = () => {
    navigate(AppRoutes.PROFILE);
  };

  // Group events by date
  const eventsByDate: { [date: string]: typeof events } = events.reduce((acc, event) => {
    const dateKey = new Date(event.date + 'T00:00:00').toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as { [date: string]: typeof events });


  const sortedDates = Object.keys(eventsByDate).sort((a, b) => {
     // Extract date parts for comparison from the full date string
    const dateA = eventsByDate[a][0].date;
    const dateB = eventsByDate[b][0].date;
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  });


  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <Header 
        title="EVENTOS"
        rightContent={
          <div className="flex items-center space-x-3">
            <button className="text-brand-purple hover:text-purple-700">
              <CalendarIcon className="w-6 h-6" />
            </button>
            <button className="text-brand-purple hover:text-purple-700">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
            <button onClick={handleProfileClick} className="text-brand-purple hover:text-purple-700">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full object-cover"/>
              ) : (
                <UserCircleIcon className="w-8 h-8" />
              )}
            </button>
          </div>
        }
      />
      
      <div className="flex-grow overflow-y-auto p-4">
        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img src="https://picsum.photos/seed/eventbanner/600/200" alt="Events Banner" className="w-full h-32 object-cover" />
            <div className="bg-yellow-400 p-3 text-center">
                <p className="text-yellow-900 font-semibold">Próximos Destaques!</p>
            </div>
        </div>

        {sortedDates.length === 0 && (
          <p className="text-center text-gray-500 mt-10">Nenhum evento agendado.</p>
        )}

        {sortedDates.map(dateStr => (
          <div key={dateStr} className="mb-6">
            <h2 className="text-lg font-semibold text-brand-secondary-text mb-2 sticky top-0 bg-slate-50 py-1">{dateStr}</h2>
            {eventsByDate[dateStr].map(event => (
              <EventListItem key={event.id} event={event} />
            ))}
          </div>
        ))}
      </div>

      <FloatingActionButton onClick={handleCreateEvent} />
    </div>
  );
};

export default HomeScreen;
