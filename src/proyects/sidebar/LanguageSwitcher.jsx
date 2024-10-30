import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
