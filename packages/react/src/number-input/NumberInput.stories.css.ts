import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  width: '100%',
});

export const field = style({
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  position: 'relative',
  border: '0.0625rem solid var(--border)',
  boxSizing: 'border-box',
  backgroundColor: 'var(--component-bg)',
  // color: var(--es-text),
  color: 'inherit',
  padding: '0.3125rem 0.6875rem',
  lineHeight: 1,
  fontSize: '1rem',
  height: '2rem',

  ':focus': {
    outline: 'none',
    borderColor: 'var(--primary-color)',
    borderWidth: '0.0625rem',
    boxShadow: '0 0 0.125rem var(--primary-color)',
  },

  ':disabled': {
    backgroundColor: 'var(--disabled-bg)',
    color: 'var(--disabled-text)',
    borderColor: 'var(--disabled-border)',
    cursor: 'not-allowed',
  },
});

export const buttonGroup = style({
  height: '2rem',
});

export const button = style({
  display: 'block',
  width: '100%',
  height: '1rem',
  padding: 0,

  cursor: 'pointer',
  boxSizing: 'border-box',
  color: 'inherit',
  background: 'transparent',
  border: '0.0625rem solid var(--border)',
  fontSize: '0.875rem',
  lineHeight: 1,
  verticalAlign: 'middle',

  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: 'var(--disabled-bg)',
    color: 'var(--disabled-text)',
    borderColor: 'var(--disabled-border)',
  },

  selectors: {
    [`${root}[data-readonly] &`]: {
      cursor: 'default',
    },
  },
});
