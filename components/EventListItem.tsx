
import React from 'react';
import { Event } from '../types';
import { EllipsisVerticalIcon } from './icons';

interface EventListItemProps {
  event: Event;
}

const EventListItem: React.FC<EventListItemProps> = ({ event }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 mb-3 hover:shadow-md transition-shadow">
      <img 
        src={event.imageUrl || 'https://picsum.photos/80/80'} 
        alt={event.title} 
        className="w-14 h-14 rounded-full object-cover" 
      />
      <div className="flex-grow">
        <h3 className="font-semibold text-brand-text">{event.title}</h3>
        <p className="text-sm text-brand-secondary-text">{event.time}</p>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <EllipsisVerticalIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default EventListItem;
