import { style } from '@vanilla-extract/css';

export const root = style({
  selectors: {
    '&[data-orientation="vertical"]': {
      display: 'flex',
    },
  },
});

export const list = style({
  borderBottom: '0.0625rem solid var(--border)',
  margin: 0,
  padding: 0,

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '3.125rem',
      margin: 0,
      borderBottom: 'none',
      borderRight: '1px solid var(--border)',
    },
  },
});

export const tab = style({
  display: 'inline-block',
  border: '0.0625rem solid transparent',
  borderBottom: 'none',
  bottom: '-0.0625rem',
  position: 'relative',
  listStyle: 'none',
  padding: '0.375rem 0.75rem',
  cursor: 'pointer',

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      display: 'block',
      bottom: 0,
      borderRight: 'none',
      right: '-0.0625rem',
    },
    [`${root}[data-orientation="vertical"] &[data-state="active"]`]: {
      borderBottom: '0.0625rem solid var(--border)',
      borderRadius: '0.3125rem 0 0 0.3125rem',
    },
    '&[data-state="active"]': {
      backgroundColor: 'var(--component-bg)',
      borderColor: 'var(--border)',
      color: 'var(--primary-color)',
      borderRadius: '0.3125rem 0.3125rem 0 0',
    },
    '&[data-disabled]': {
      cursor: 'default',
      opacity: '0.3',
    },
  },
});

export const content = style({
  padding: '0.625rem',
  display: 'none',

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      width: '100%',
    },
    '&[data-state="active"]': {
      display: 'block',
      backgroundColor: 'var(--component-bg)',
    },
  },
});
