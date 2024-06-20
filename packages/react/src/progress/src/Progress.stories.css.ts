import { keyframes, style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'var(--component-down-bg)',
  width: '100%',
  height: 8,
});

const indeterminate = keyframes({
  '0%': { left: '-40%' },
  '100%': { left: '100%' },
});

export const indicator = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--primary-color)',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',

  selectors: {
    '&[data-state="indeterminate"]': {
      minWidth: '50%',
      position: 'absolute',
      // background-image: linear-gradient(to right, transparent 0%, #1976d2 50%, transparent 100%);
      animation: `${indeterminate} 1s ease infinite normal none running`,
      transitionDuration: '300ms',
    },
  },
});
