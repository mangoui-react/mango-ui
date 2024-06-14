import { keyframes, style } from '@vanilla-extract/css';

export const backdrop = style({
  opacity: 1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1200,
  animation: 'fadein 0.3s',
});

const fadein = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
export const content = style({
  position: 'fixed',
  margin: '0 auto',
  width: '520px',
  minWidth: '200px',
  minHeight: '42px',
  zIndex: 1200,
  borderRadius: '6px',
  animation: `${fadein} 0.3s`,
  //
  backgroundColor: 'var(--component-bg)',
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  // placement
  selectors: {
    '&[data-placement="top"]': {
      top: 0,
      left: 0,
      width: '100%',
      height: '40%',
    },
    '&[data-placement="bottom"]': {
      bottom: 0,
      left: 0,
      width: '100%',
      height: '40%',
    },
    '&[data-placement="right"]': {
      top: 0,
      right: 0,
      width: '40%',
      height: '100%',
    },
    '&[data-placement="left"]': {
      top: 0,
      left: 0,
      width: '40%',
      height: '100%',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '0.875rem',
  border: 'none',
  outline: 'none',

  cursor: 'pointer',
  boxSizing: 'border-box',
  color: 'inherit',
  background: 'transparent',
  fontSize: '0.875rem',
  lineHeight: 1,
  verticalAlign: 'middle',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const header = style({
  padding: '1rem 1.5rem',
  borderBottom: '0.0625rem solid var(--border-inner)',
  //
  flex: '0 1 auto',
});

export const body = style({
  padding: '1.5rem',
  overflow: 'auto',
  //
  flex: '1 1 auto',
  maxHeight: '100%',
});

export const footer = style({
  padding: '0.625rem 1rem',
  textAlign: 'right',
  borderTop: '0.0625rem solid var(--border-inner)',
  //
  flex: '0 1 auto',
});
