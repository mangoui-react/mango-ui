import { style } from '@vanilla-extract/css';

export const content = style({
  backgroundColor: 'var(--component-bg)',
  border: '0.0625rem solid var(--border)',
  borderRadius: '0.25rem',
  boxShadow: '0 0.125rem 0.1875rem 0 rgba(0, 0, 0, 0.15)',

  ':focus': {
    outline: 0,
  },
});

export const arrow = style({
  fill: 'var(--component-bg)',
});

export const close = style({
  borderRadius: '100%',
  height: '1.5625rem',
  width: '1.5625rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: '#fff',
  position: 'absolute',
  top: '0.3125rem',
  right: '0.3125rem',
});
