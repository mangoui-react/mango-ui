import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  margin: 0,
  padding: 0,

  // 이런 방법도 있음
  // selectors: {
  //   [`&[data-placement="top-right"]:has(${content})`]: {
  //     top: 0,
  //     right: 0,
  //     transform: 'translate(50%, -50%)',
  //   },
  // },
});

export const content = style({
  textAlign: 'center',
  zIndex: 1,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  position: 'absolute',
  transformOrigin: '100% 0',

  backgroundColor: '#E23731',
  color: '#ffffff',
  padding: '0 6px',

  // size
  minWidth: '0.9375rem',
  height: '0.9375rem',
  fontSize: 'calc(0.9375rem - 0.1875rem)',
  borderRadius: 'calc(0.9375rem / 2)',
  lineHeight: '0.9375rem',

  // placement
  selectors: {
    [`${root}[data-placement="top-right"] &`]: {
      top: 0,
      right: 0,
      transform: 'translate(50%, -50%)',
    },
    [`${root}[data-placement="top"] &`]: {
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    [`${root}[data-placement="top-left"] &`]: {
      top: 0,
      left: 0,
      transform: 'translate(-50%, -50%)',
    },
    [`${root}[data-placement="bottom"] &`]: {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    [`${root}[data-placement="bottom-right"] &`]: {
      bottom: 0,
      right: 0,
      transform: 'translate(50%, 0)',
    },
    [`${root}[data-placement="bottom-left"] &`]: {
      bottom: 0,
      left: 0,
      transform: 'translate(-50%, 0)',
    },
  },
});
