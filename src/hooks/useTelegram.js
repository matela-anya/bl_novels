import { useEffect } from 'react';

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  const close = () => tg.close();

  return {
    tg,
    close,
  };
};

