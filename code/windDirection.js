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