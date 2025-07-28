import { style } from '@vanilla-extract/css';

// export const root = style({});

export const trigger = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  height: '2.5rem',
  paddingLeft: '0.875rem',
  paddingRight: '0.75rem',
  margin: 0,
  outline: 0,
  border: '1px solid var(--border)',
  borderRadius: '0.375rem',
  fontFamily: 'inherit',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  // color: 'var(--color-gray-900)',
  color: 'inherit',
  cursor: 'default',
  userSelect: 'none',
  minWidth: '9rem',

  selectors: {
    '&:hover': { backgroundColor: 'var(--selected-hover)' },
    '&:active': { backgroundColor: 'var(--selected-hover)' },
    '&[data-popup-open]': { backgroundColor: 'var(--selected-hover)' },
    '&:focus-visible': { outline: '2px solid var(--color-blue)', outlineOffset: '-1px' },
  },
});

export const content = style({
  backgroundColor: 'var(--component-bg)',
  border: '0.0625rem solid var(--border)',
  borderRadius: '0.25rem',
  boxShadow: '0 0.125rem 0.1875rem 0 rgba(0, 0, 0, 0.15)',

  ':focus': {
    outline: 0,
  },
});
