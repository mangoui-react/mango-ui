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
  top: '30px',
  right: 0,
  left: 0,
  margin: '0 auto',
  width: '520px',
  minWidth: '200px',
  minHeight: '42px',
  backgroundColor: 'var(--component-bg)',
  zIndex: 1200,
  borderRadius: '6px',
  animation: `${fadein} 0.3s`,
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
});

export const body = style({
  padding: '1.5rem',
  maxHeight: '46.3125rem',
  overflow: 'auto',
});

export const footer = style({
  padding: '0.625rem 1rem',
  textAlign: 'right',
  borderTop: '0.0625rem solid var(--border-inner)',
});
