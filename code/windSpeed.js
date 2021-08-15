export const getWindSpeed = (ws) => {
    let windSpeedName;
    if (ws <= 0.2) {
      windSpeedName = 'Stiltje';
    } else if (ws > 0.2 && ws <= 13.8) {
      windSpeedName = 'Bris';
    } else if (ws > 18.8 && ws <= 24.4) {
      windSpeedName = 'Kuling';
    } else if (ws > 24.4 && ws <= 32.6) {
      windSpeedName = 'Storm';
    } else {
      windSpeedName = 'Orkan';
    }
    return windSpeedName;
  };