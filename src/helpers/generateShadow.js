/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

const androidDepth = {
  penumbra: [
    '0px 1px 1px 0px',
    '0px 2px 2px 0px',
    '0px 3px 4px 0px',
    '0px 4px 5px 0px',
    '0px 5px 8px 0px',
    '0px 6px 10px 0px',
    '0px 7px 10px 1px',
    '0px 8px 10px 1px',
    '0px 9px 12px 1px',
    '0px 10px 14px 1px',
    '0px 11px 15px 1px',
    '0px 12px 17px 2px',
    '0px 13px 19px 2px',
    '0px 14px 21px 2px',
    '0px 15px 22px 2px',
    '0px 16px 24px 2px',
    '0px 17px 26px 2px',
    '0px 18px 28px 2px',
    '0px 19px 29px 2px',
    '0px 20px 31px 3px',
    '0px 21px 33px 3px',
    '0px 22px 35px 3px',
    '0px 23px 36px 3px',
    '0px 24px 38px 3px',
  ],
};

const parseShadow = raw => {
  const values = raw.split(' ').map(val => +val.replace('px', ''));
  return {
    x: values[0],
    y: values[1],
    blur: values[2],
    spread: values[3],
  };
};

const interpolate = (i, a, b, a2, b2) => ((i - a) * (b2 - a2)) / (b - a) + a2;

const generateShadow = elevation => {
  if (elevation < 1 || elevation > 24) {
    throw new Error(
      'O valor "elevation" passado para generateShadow precisa estar entre 1 e 24',
    );
  }

  const shadow = parseShadow(androidDepth.penumbra[elevation - 1]);

  const height = shadow.y === 1 ? 1 : Math.floor(shadow.y * 0.5);

  return {
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height,
    },
    shadowOpacity: parseFloat(
      interpolate(elevation - 1, 1, 24, 0.2, 0.6).toFixed(2),
    ),
    shadowRadius: parseFloat(interpolate(shadow.blur, 1, 38, 1, 16).toFixed(2)),
    elevation,
  };
};

export {generateShadow};
