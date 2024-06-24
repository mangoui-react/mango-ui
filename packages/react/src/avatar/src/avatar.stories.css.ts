import { style } from '@vanilla-extract/css';

export const group = style({
  display: 'flex',
  alignItems: 'center',
});

export const groupContent = style({
  display: 'flex',
  alignItems: 'center',
});

export const root = style({
  display: 'flex',
  width: 40,
  height: 40,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--avatar-bg)',
  color: 'var(--avatar-text)',
  borderRadius: '50%',
  fontSize: '1.25rem',
  userSelect: 'none',

  selectors: {
    [`${groupContent} &`]: {
      border: '2px solid var(--bg)',
      marginLeft: -10,
    },
    [`${groupContent} &:first-child`]: {
      marginLeft: 0,
    },
    // extra
    [`${groupContent} + &`]: {
      border: '2px solid var(--bg)',
      marginLeft: -10,
    },
  },
});

export const img = style({
  width: '100%',
  height: '100%',
  color: 'transparent',
});
