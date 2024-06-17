import { style } from '@vanilla-extract/css';

export const root = style({
  margin: 0,
  padding: 0,
  backgroundColor: 'var(--component-bg)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--border)',
  borderRadius: '0.125rem',
  borderBottomWidth: '0px',
  color: 'inherit',
});

export const item = style({
  borderBottomWidth: '1px',
  borderBottomColor: 'var(--border)',
});

export const header = style({
  display: 'flex',
  paddingLeft: '1rem' /* 16px */,
  paddingRight: '1rem' /* 16px */,
  paddingTop: '0.75rem' /* 12px */,
  paddingBottom: '0.75rem' /* 12px */,
  cursor: 'pointer',
});

export const title = style({
  flex: '1 1 0%',
  textAlign: 'left',
});

export const content = style({
  borderTopWidth: '1px',
  borderTopColor: 'var(--border)',
  padding: '1rem' /* 16px */,
});

const arrow = style({
  width: '1.25rem' /* 20px */,
  height: '1.25rem' /* 20px */,
});

export const openArrow = style([
  arrow,
  {
    transform: 'rotate(180deg)',
  },
]);

export const closeArrow = style([
  arrow,
  {
    transition: 'transform 0.2s',
  },
]);
