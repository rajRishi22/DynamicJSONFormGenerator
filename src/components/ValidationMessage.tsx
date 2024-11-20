import React from 'react';

interface ValidationMessageProps {
  message: string | null;
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
  if (!message) return null;
  return <p className="text-red-500 text-sm">{message}</p>;
};

export default ValidationMessage;
