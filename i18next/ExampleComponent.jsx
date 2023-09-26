import React from 'react';
import { useTranslation } from 'react-i18next';

function ExampleComponent() {
  const { t } = useTranslation();
  const userName = "World";

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome', { name: userName })}</p>
    </div>
  );
}

export default ExampleComponent;
