import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
  padding: '0.4375rem 0',

  selectors: {
    '&[data-disabled]': {
      opacity: 0.3,
      cursor: 'default',
      pointerEvents: 'none',
    },
    '&[data-orientation="vertical"]': {
      width: '0.25rem',
      height: '100%',
      padding: '0 0.8125rem',
    },
  },
});

export const track = style({
  width: '100%',
  height: '0.25rem',
  position: 'absolute',
  borderRadius: '0.0625rem',
  backgroundColor: 'var(--component-down-bg)',

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      width: '0.25rem',
      height: '100%',
    },
  },
});

export const range = style({
  left: 0,
  position: 'absolute',
  backgroundColor: 'var(--primary-color)',
  height: 'inherit',

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      width: '100%',
    },
  },
});

export const thumb = style({
  display: 'flex',
  width: '0.875rem',
  height: '0.875rem',
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-color)',
  outline: 0,
  marginTop: '-0.375rem',
  marginLeft: '-0.4375rem',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    [`${root}[data-orientation="vertical"] &`]: {
      marginLeft: '-0.3438rem',
      marginBottom: '-0.4375rem',
    },
  },
});

// thumb 값 표시 label
export const thumbLabel = style({
  zIndex: 1,
  whiteSpace: 'nowrap',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.43,
  letterSpacing: '0.01071em',
  transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  top: '-0.625rem',
  transformOrigin: 'center bottom',
  transform: 'translateY(-100%) scale(1)',
  position: 'absolute',
  backgroundColor: '#272c36',
  borderRadius: '0.125rem',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem 0.75rem',

  '::before': {
    position: 'absolute',
    content: '',
    width: '0.5rem',
    height: '0.5rem',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%) rotate(45deg)',
    backgroundColor: 'inherit',
  },
});
