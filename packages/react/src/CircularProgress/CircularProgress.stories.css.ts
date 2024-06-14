import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-block',
  position: 'relative',
  verticalAlign: 'middle',
  fontSize: '3rem',
  width: '3rem',
  height: '3rem',
});

const indeterminate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const indicator = style({
  display: 'block',
  width: '100%',
  height: '100%',

  selectors: {
    '&[data-state="indeterminate"]': {
      animation: `${indeterminate} 2s linear infinite`,
    },
  },
});
globalStyle(`${indicator} > circle[data-component="bg"]`, {
  stroke: 'var(--component-down-bg)',
});
globalStyle(`${indicator} > circle[data-component="bar"]`, {
  stroke: 'var(--primary-color)',
});

globalStyle(
  `${indicator}[data-state="complete"] > circle[data-component="bar"], ${indicator}[data-state="loading"] > circle[data-component="bar"]`,
  {
    strokeDashoffset: 66,
    transitionDuration: '0.6s',
    transitionTimingFunction: 'ease',
  },
);

const indeterminateBar = keyframes({
  '0%': { strokeDasharray: '1, 400', strokeDashoffset: 0 },
  '50%': { strokeDasharray: '400, 400', strokeDashoffset: -100 },
  '100%': { strokeDasharray: '400, 400', strokeDashoffset: -260 },
});
globalStyle(`${indicator}[data-state="indeterminate"] > circle[data-component="bar"]`, {
  animation: `${indeterminateBar} 1.5s linear infinite`,
});

export const label = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100%',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  fontSize: '0.24em',
});
