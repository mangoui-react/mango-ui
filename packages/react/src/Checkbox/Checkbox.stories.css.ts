import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',

  selectors: {
    '&[data-readonly]': {
      cursor: 'default',
      pointerEvents: 'none',
    },
    '&[data-disabled]': {
      cursor: 'not-allowed',
    },
    // '& > input': {
    //   position: 'absolute',
    //   width: '1px',
    //   height: '1px',
    //   margin: 0,
    //   cursor: 'inherit',
    //   opacity: 0,
    // },
  },
});

globalStyle(`${root} > input[type="checkbox"]`, {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: 0,
  cursor: 'inherit',
  opacity: 0,
});

export const indicator = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: 'var(--primary-color)',
  cursor: 'pointer',

  selectors: {
    [`${root}[data-readonly] &`]: {
      cursor: 'default',
    },
    [`${root}[data-disabled] &`]: {
      color: 'var(--disabled-text)',
      cursor: 'default',
      pointerEvents: 'none',
    },
    // '& > svg': {
    //   fontSize: '1.5rem',
    // },
  },
});
export const icon = style({
  fontSize: '1.5rem',
});
// globalStyle(`${indicator} > svg`, {
//   fontSize: '1.5rem',
// });

export const label = style({
  paddingLeft: '5px',
  paddingRight: '5px',
  cursor: 'pointer',

  selectors: {
    [`${root}[data-disabled] &`]: {
      color: 'var(--disabled-text)',
      cursor: 'default',
      pointerEvents: 'none',
    },
  },
});

export const group = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.625rem',

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
  },
});
