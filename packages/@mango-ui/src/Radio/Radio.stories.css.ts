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

globalStyle(`${root} > input[type="radio"]`, {
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
  // gap: '0.625rem',

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
      gap: '0.625rem',
    },
  },
});

// button style
export const buttonRoot = style({
  position: 'relative',
  margin: 0,
  padding: '0.3125rem 0.625rem',
  border: '0.0625rem solid var(--border)',
  minWidth: '1.875rem',

  selectors: {
    '&[data-state="checked"]': {
      color: 'var(--primary-color)',
      borderColor: 'var(--primary-color)',
    },
    // '&[data-readonly]': {
    //   cursor: 'default',
    //   pointerEvents: 'none',
    // },
    // '&[data-disabled]': {
    //   cursor: 'not-allowed',
    // },
  },
});
globalStyle(`${buttonRoot} > input[type="radio"]`, {
  width: 0,
  height: 0,
  opacity: 0,
  pointerEvents: 'none',
});

export const buttonIndicator = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const buttonIcon = style({
  display: 'none',
  width: 0,
  height: 0,
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row',

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
  },
});

export const buttonLabel = style({
  selectors: {
    [`${buttonGroup}[data-orientation="vertical"] &`]: {
      width: '100%',
      textAlign: 'center',
    },
  },
});
