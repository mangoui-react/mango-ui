import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',

  selectors: {
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
  },
});

export const step = style({
  padding: 0,
  margin: 0,
  alignItems: 'center',
  position: 'relative',
  flex: 1,
  display: 'flex',
  overflow: 'hidden',

  ':last-child': {
    flex: 'none',
  },

  selectors: {
    '&:not(:first-of-type)': {
      paddingLeft: '0.75rem',
    },
    [`${root}[data-orientation="vertical"] &:not(:first-of-type)`]: {
      marginTop: '0.625rem',
      paddingLeft: 0,
    },
    [`${root}[data-orientation="vertical"] &`]: {
      paddingBottom: '1.25rem',
      alignItems: 'flex-start',
    },
  },
});

export const indicator = style({
  marginRight: '0.375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '1.875rem',
  height: '1.875rem',

  border: '0.0625rem solid',
  borderRadius: '50%',
  lineHeight: '1.875rem',

  selectors: {
    [`${step}[data-status="wait"] &`]: {
      background: 'inherit',
      borderColor: 'var(--soft-text)',
      color: 'var(--soft-text)',
    },
    [`${step}[data-status="process"] &`]: {
      background: 'var(--primary-color)',
      borderColor: 'var(--primary-color)',
      color: '#fff',
    },
    [`${step}[data-status="finish"] &`]: {
      background: 'inherit',
      borderColor: 'var(--primary-color)',
      color: 'var(--primary-color)',
    },
    [`${step}[data-status="error"] &`]: {
      background: 'inherit',
      borderColor: 'var(--error)',
      color: 'var(--error)',
    },
  },
});
globalStyle(`${indicator} > svg`, {
  display: 'inline-block',
  verticalAlign: 'inherit',
});

export const content = style({
  flexShrink: 0,

  selectors: {
    [`${step}[data-status="wait"] &`]: {
      color: 'var(--soft-text)',
    },
    [`${step}[data-status="process"] &`]: {
      color: 'inherit',
    },
    [`${step}[data-status="finish"] &`]: {
      color: 'inherit',
    },
    [`${step}[data-status="error"] &`]: {
      color: 'var(--error)',
    },
  },
});

export const separator = style({
  width: '100%',
  height: '2px',
  backgroundColor: 'var(--border)',

  selectors: {
    '&[data-orientation="horizontal"]': {
      marginInlineStart: '0.5rem',
    },
    '&[data-orientation="vertical"]': {
      position: 'absolute',
      width: '0.125rem',
      height: '100%',
      top: '2.125rem',
      left: '0.875rem',
      marginBlockStart: '0.5rem',
    },
  },
});
