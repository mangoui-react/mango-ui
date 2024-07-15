import { style } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  alignItems: 'center',
  // gap: 5,
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  color: 'var(--primary-color)',
});

export const link = style({
  display: 'flex',
  alignItems: 'center',
  color: 'var(--primary-text-color)',
  cursor: 'pointer',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const separator = style({
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
});

export const collapse = style({
  cursor: 'pointer',
  color: 'var(--primary-text-color)',
});
