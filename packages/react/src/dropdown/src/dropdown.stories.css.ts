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

export const item = style({
  display: 'flex',
  cursor: 'pointer',
  padding: '8px 16px',
  borderBottom: 'none',
  lineHeight: '1.063rem', // rem(17px); 빌드시 에러남 (원래 안났는데 그냥 갑자기 남)

  ':hover': {
    background: 'var(--selected-hover)',
  },

  selectors: {
    '&[data-disabled]': {
      cursor: 'default',
      opacity: 0.45,
      pointerEvents: 'none',
    },
  },
});

export const group = style({
  padding: '0.625rem 0.3125rem',
});

export const title = style({
  paddingLeft: '0.3125rem',
  paddingBottom: '0.5rem',
});

export const separator = style({
  height: '0.0625rem',
  backgroundColor: 'var(--border)',
  margin: '0.3125rem',
});
