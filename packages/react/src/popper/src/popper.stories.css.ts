import { style } from '@vanilla-extract/css';

export const anchor = style({
  backgroundColor: 'hotpink',
  width: 100,
  height: 50,
});

export const content = style({
  backgroundColor: 'var(--component-bg)',
  // border: '0.0625rem solid var(--border)',
  borderRadius: '0.25rem',
  boxShadow: '0 0.125rem 0.1875rem 0 rgba(0, 0, 0, 0.15)',
  padding: 10,

  ':focus': {
    outline: 0,
  },
});

export const arrow = style({
  fill: 'var(--component-bg)',
});
