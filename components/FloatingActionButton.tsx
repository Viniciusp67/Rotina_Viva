
import React from 'react';
import { PlusIcon } from './icons';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-brand-purple text-white p-4 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-150 z-50"
      aria-label="Add new event"
    >
      <PlusIcon className="w-8 h-8" />
    </button>
  );
};

export default FloatingActionButton;
