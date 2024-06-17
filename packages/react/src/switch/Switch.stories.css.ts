import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-block',
  cursor: 'pointer',
  verticalAlign: 'middle',
  position: 'relative',

  selectors: {
    '&[data-readonly]': {
      cursor: 'default',
      pointerEvents: 'none',
    },
    '&[data-disabled]': {
      opacity: '0.5',
      cursor: 'default',
    },
  },
});

globalStyle(`${root} > input[type="checkbox"]`, {
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '0.0625rem',
  height: '0.0625rem',
  margin: 0,
  padding: 0,
  zIndex: 1,
});

export const label = style({
  paddingLeft: '0.3125rem',
  paddingRight: '0.3125rem',
});

export const track = style({
  display: 'inline-flex',
  position: 'relative',
  boxSizing: 'content-box',
  height: '1.625rem',
  borderRadius: '0.9375rem',
  backgroundColor: 'var(--component-down-bg)',
  padding: '0.125rem',
  minWidth: '3rem',
  alignItems: 'center',
  cursor: 'pointer',
  verticalAlign: 'middle',
  transition: 'background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  selectors: {
    // [`${root}[data-state="checked"] &`]: {
    //   backgroundColor: 'var(--primary-color)',
    // },
    '&[data-state="checked"]': {
      backgroundColor: 'var(--primary-color)',
    },
    [`${root}[data-disabled] &`]: {
      cursor: 'not-allowed',
    },
  },
});

export const thumb = style({
  backgroundColor: 'white',
  width: '1.375rem',
  height: '1.375rem',
  borderRadius: '6.25rem',
  boxShadow:
    '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)',
  position: 'absolute',
  top: '0.25rem',
  left: '0.25rem',
  transition: 'all 0.2s ease-in-out',

  selectors: {
    // [`${root}[data-state="checked"] &`]: {
    //   left: 'calc(100% - 1.625rem)',
    // },
    '&[data-state="checked"]': {
      left: 'calc(100% - 1.625rem)',
    },
  },
});
