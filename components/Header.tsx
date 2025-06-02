
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from './icons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  rightContent?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false, onBack, rightContent }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="bg-brand-light-purple p-4 flex items-center justify-between shadow-sm sticky top-0 z-40">
      <div className="flex items-center">
        {showBackButton && (
          <button onClick={handleBack} className="mr-3 text-brand-purple hover:text-purple-700">
            <ChevronLeftIcon className="w-7 h-7" />
          </button>
        )}
        <h1 className="text-xl font-bold text-brand-text">{title}</h1>
      </div>
      <div>{rightContent}</div>
    </header>
  );
};

export default Header;
