
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-brand-purple text-white hover:bg-purple-700 focus:ring-purple-500';
      break;
    case 'secondary':
      variantStyles = 'bg-brand-light-purple text-brand-purple hover:bg-purple-200 focus:ring-purple-400 border border-brand-purple';
      break;
    case 'ghost':
        variantStyles = 'bg-transparent text-brand-purple hover:bg-purple-100 focus:ring-purple-400';
        break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-4 py-2 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
  }

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
