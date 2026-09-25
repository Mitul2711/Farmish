import React from 'react';
import { MessageCircle } from 'lucide-react';
import config from '../../data/config';
import './WhatsAppButton.css';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <a href={`https://wa.me/${config.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat with us on WhatsApp">
        <MessageCircle size={22} />
    </a>
  );
};
export default WhatsAppButton;
