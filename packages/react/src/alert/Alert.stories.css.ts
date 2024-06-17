import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  padding: '6px 16px',

  // statue
  backgroundColor: 'var(--info)',
  color: 'white',

  selectors: {
    '&[data-status="success"]': {
      backgroundColor: 'var(--success)',
      color: 'white',
    },
    '&[data-status="warning"]': {
      backgroundColor: 'var(--warning)',
      color: 'white',
    },
    '&[data-status="error"]': {
      backgroundColor: 'var(--error)',
      color: 'white',
    },
  },
});

export const icon = style({
  padding: '7px 0',
  marginRight: 12,
});

export const content = style({
  padding: '8px 0',
});

export const title = style({
  marginTop: -2,
  fontWeight: 'bold',
  marginBottom: '0.35em',
});

export const flexCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});
