import { useEffect } from 'react';

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  const init = () => {
    tg.ready();
  };

  useEffect(() => {
    init();
  }, []);

  const close = () => tg.close();
  const showMainButton = (text) => {
    tg.MainButton.setText(text);
    tg.MainButton.show();
  };

  const hideMainButton = () => {
    tg.MainButton.hide();
  };

  return {
    tg,
    init,
    close,
    showMainButton,
    hideMainButton,
  };
};
