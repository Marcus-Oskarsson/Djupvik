//Extra, ska ligga i assets (funderar på att visa ikoner beroende på väder)
 export const descriptions = {
    1: 'Klart',
    2: 'Lätt molnighet',
    3: 'Halvklart',
    4: 'Molnigt',
    5: 'Mycket moln',
    6: 'Mulet',
    7: 'Dimma',
    8: 'Lätt regnskur',
    9: 'Regnskur',
    10: 'Kraftig regnskur',
    11: 'Åskskur',
    12: 'Lätt by av regn och snö',
    13: 'By av regn och snö',
    14: 'Kraftig by av regn och snö',
    15: 'Lätt snöby',
    16: 'Snöby',
    17: 'Kraftig snöby',
    18: 'Lätt regn',
    19: 'Regn',
    20: 'Kraftigt regn',
    21: 'Åska',
    22: 'Lätt snöblandat regn',
    23: 'Snöblandat regn',
    24: 'Kraftigt snöblandat regn',
    25: 'Lätt snöfall',
    26: 'Snöfall',
    27: 'Ymnigt snöfall',
  };
  
  //Extra, ska ligga i assets
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
  
  
  //Extra, ska ligga i assets
export const getWindDirection = (deg) => {
    let direction;
    if (deg > 22.5 && deg < 67.5) {
      direction = 'nordväst';
    } else if (deg > 67.5 && deg < 112.5) {
      direction = 'väst';
    } else if (deg > 112.5 && deg < 157.5) {
      direction = 'sydväst';
    } else if (deg > 157.5 && deg < 202.5) {
      direction = 'syd';
    } else if (deg > 202.5 && deg < 247.5) {
      direction = 'sydost';
    } else if (deg > 247.5 && deg < 292.5) {
      direction = 'ost';
    } else if (deg > 292.5 && deg < 337.5) {
      direction = 'nordost';
    } else {
      direction = 'nord';
    }
    return direction;
  };