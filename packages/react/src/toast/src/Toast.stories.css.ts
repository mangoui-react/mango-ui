import { keyframes, style } from '@vanilla-extract/css';

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 25px))' },
  to: { transform: 'translateX(0)' },
});

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const content = style({
  borderRadius: '0.375rem',
  minWidth: '18rem',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0rem 0.625rem 2.375rem -0.625rem, hsl(206 22% 7% / 20%) 0rem 0.625rem 1.25rem -0.9375rem',
  border: '0.0625rem solid #dedede',

  selectors: {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
  },
});

export const viewport = style({
  position: 'fixed',
  zIndex: 1300,

  selectors: {
    '&[data-placement="top"]': {
      top: '0.625rem',
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)',
    },
    '&[data-placement="top-left"]': {
      top: '0.625rem',
      left: '0.625rem',
      right: 'auto',
    },
    '&[data-placement="top-right"]': {
      top: '0.625rem',
      left: 'auto',
      right: '0.625rem',
    },
    '&[data-placement="bottom"]': {
      left: '50%',
      right: 'auto',
      bottom: '0.625rem',
      transform: 'translateX(-50%)',
    },
    '&[data-placement="bottom-left"]': {
      left: '0.625rem',
      right: 'auto',
      bottom: '0.625rem',
    },
    '&[data-placement="bottom-right"]': {
      left: 'auto',
      right: '0.625rem',
      bottom: '0.625rem',
    },
  },
});

export const action = style({
  marginRight: '0.9375rem',
});
